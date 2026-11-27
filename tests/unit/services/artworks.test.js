
import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
    mockFrom,
    mockSelect,
    mockEq,
    mockOrder,
    mockSingle,
    mockLimit,
} = vi.hoisted(() => ({
    mockFrom: vi.fn(),
    mockSelect: vi.fn(),
    mockEq: vi.fn(),
    mockOrder: vi.fn(),
    mockSingle: vi.fn(),
    mockLimit: vi.fn(),
}))

vi.mock('../../../src/lib/supabaseClient', () => ({
    supabase: {
        from: mockFrom,
    },
}))

import {
    getArtworks,
    getArtworksBySlug,
    getFeaturedArtworks,
    getArtworksByCollectionId,
    getArtworkImagePath,
} from '../../../src/services/artworks'

const mockArtworks = [
    {
        artwork_id: 1,
        title: 'Artwork One',
        slug: 'artwork-one',
        published_at: '2026-01-01T10:00:00Z',
        is_featured: true,
        collection_id: 10,
    },
    {
        artwork_id: 2,
        title: 'Artwork Two',
        slug: 'artwork-two',
        published_at: '2025-12-01T10:00:00Z',
        is_featured: false,
        collection_id: 10,
    },
]

describe('Artwork services', () => {
    beforeEach(() => {
        vi.clearAllMocks()

        mockFrom.mockReturnValue({
            select: mockSelect,
        })

        mockSelect.mockReturnValue({
            eq: mockEq,
            order: mockOrder,
        })

        mockEq.mockReturnValue({
            order: mockOrder,
            single: mockSingle,
        })

        mockOrder.mockReturnValue({
            eq: mockEq,
            limit: mockLimit,
        })

        mockSingle.mockResolvedValue({
            data: mockArtworks[0],
            error: null,
        })

        mockLimit.mockResolvedValue({
            data: mockArtworks,
            error: null,
        })
    })

    describe('getArtworks', () => {
        it('should retrieve all artworks ordered by publication date', async () => {
            mockOrder.mockResolvedValue({
                data: mockArtworks,
                error: null,
            })

            const result = await getArtworks()

            expect(mockFrom).toHaveBeenCalledWith('table_artworks')
            expect(mockSelect).toHaveBeenCalledWith('*')
            expect(mockOrder).toHaveBeenCalledWith('published_at', {
                ascending: false,
            })
            expect(result).toEqual(mockArtworks)
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Database error')

            mockOrder.mockResolvedValue({
                data: null,
                error,
            })

            await expect(getArtworks()).rejects.toThrow(error)
        })
    })

    describe('getArtworksBySlug', () => {
        it('should retrieve an artwork by slug', async () => {
            const result = await getArtworksBySlug('artwork-one')

            expect(mockFrom).toHaveBeenCalledWith('table_artworks')
            expect(mockSelect).toHaveBeenCalledWith('*')
            expect(mockEq).toHaveBeenCalledWith('slug', 'artwork-one')
            expect(mockSingle).toHaveBeenCalled()
            expect(result).toEqual(mockArtworks[0])
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Artwork not found')

            mockSingle.mockResolvedValue({
                data: null,
                error,
            })

            await expect(
                getArtworksBySlug('unknown-artwork'),
            ).rejects.toThrow(error)
        })
    })

    describe('getFeaturedArtworks', () => {
        it('should retrieve featured artworks ordered by publication date', async () => {
            mockOrder.mockResolvedValue({
                data: [mockArtworks[0]],
                error: null,
            })

            const result = await getFeaturedArtworks()

            expect(mockFrom).toHaveBeenCalledWith('table_artworks')
            expect(mockEq).toHaveBeenCalledWith('is_featured', true)
            expect(mockOrder).toHaveBeenCalledWith('published_at', {
                ascending: false,
            })
            expect(result).toEqual([mockArtworks[0]])
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Database error')

            mockOrder.mockResolvedValue({
                data: null,
                error,
            })

            await expect(getFeaturedArtworks()).rejects.toThrow(error)
        })
    })

    describe('getArtworksByCollectionId', () => {
        it('should retrieve artworks using the default limit', async () => {
            const result = await getArtworksByCollectionId(10)

            expect(mockFrom).toHaveBeenCalledWith('table_artworks')
            expect(mockEq).toHaveBeenCalledWith('collection_id', 10)
            expect(mockOrder).toHaveBeenCalledWith('published_at', {
                ascending: false,
            })
            expect(mockLimit).toHaveBeenCalledWith(5)
            expect(result).toEqual(mockArtworks)
        })

        it('should retrieve artworks using a custom limit', async () => {
            await getArtworksByCollectionId(10, 3)

            expect(mockLimit).toHaveBeenCalledWith(3)
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Database error')

            mockLimit.mockResolvedValue({
                data: null,
                error,
            })

            await expect(
                getArtworksByCollectionId(10),
            ).rejects.toThrow(error)
        })
    })

    describe('getArtworkImagePath', () => {
        it('should return the provided image path', () => {
            const imagePath = 'artworks/image-one.jpg'

            expect(getArtworkImagePath(imagePath)).toBe(imagePath)
        })

        it('should return null when the image path is null', () => {
            expect(getArtworkImagePath(null)).toBe(null)
        })
    })
})
