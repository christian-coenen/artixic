import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
    mockFrom,
    mockSelect,
    mockEq,
    mockOrder,
    mockSingle,
    mockGetArtworksByCollectionId,
} = vi.hoisted(() => ({
    mockFrom: vi.fn(),
    mockSelect: vi.fn(),
    mockEq: vi.fn(),
    mockOrder: vi.fn(),
    mockSingle: vi.fn(),
    mockGetArtworksByCollectionId: vi.fn(),
}))

vi.mock('../../../src/lib/supabaseClient', () => ({
    supabase: {
        from: mockFrom,
    },
}))

vi.mock('../../../src/services/artworks', () => ({
    getArtworksByCollectionId: mockGetArtworksByCollectionId,
}))

import {
    getCollections,
    getCollectionById,
    getCollectionBySlug,
    getCollectionsWithPreviewArtworks,
} from '../../../src/services/collections'

const mockCollections = [
    {
        collection_id: 10,
        title: 'Collection One',
        slug: 'collection-one',
        published_at: '2026-01-01T10:00:00Z',
    },
    {
        collection_id: 20,
        title: 'Collection Two',
        slug: 'collection-two',
        published_at: '2025-12-01T10:00:00Z',
    },
]

const mockArtworks = [
    {
        artwork_id: 1,
        title: 'Artwork One',
        collection_id: 10,
    },
    {
        artwork_id: 2,
        title: 'Artwork Two',
        collection_id: 10,
    },
]

describe('Collection services', () => {
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
            single: mockSingle,
        })

        mockSingle.mockResolvedValue({
            data: mockCollections[0],
            error: null,
        })

        mockOrder.mockResolvedValue({
            data: mockCollections,
            error: null,
        })

        mockGetArtworksByCollectionId.mockResolvedValue(mockArtworks)
    })

    describe('getCollections', () => {
        it('should retrieve all collections ordered by publication date', async () => {
            const result = await getCollections()

            expect(mockFrom).toHaveBeenCalledWith('table_collections')
            expect(mockSelect).toHaveBeenCalledWith('*')
            expect(mockOrder).toHaveBeenCalledWith('published_at', {
                ascending: false,
            })
            expect(result).toEqual(mockCollections)
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Database error')

            mockOrder.mockResolvedValue({
                data: null,
                error,
            })

            await expect(getCollections()).rejects.toThrow(error)
        })
    })

    describe('getCollectionById', () => {
        it('should retrieve a collection by ID', async () => {
            const result = await getCollectionById(10)

            expect(mockFrom).toHaveBeenCalledWith('table_collections')
            expect(mockSelect).toHaveBeenCalledWith('*')
            expect(mockEq).toHaveBeenCalledWith('collection_id', 10)
            expect(mockSingle).toHaveBeenCalled()
            expect(result).toEqual(mockCollections[0])
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Collection not found')

            mockSingle.mockResolvedValue({
                data: null,
                error,
            })

            await expect(getCollectionById(999)).rejects.toThrow(error)
        })
    })

    describe('getCollectionBySlug', () => {
        it('should retrieve a collection by slug', async () => {
            const result = await getCollectionBySlug('collection-one')

            expect(mockFrom).toHaveBeenCalledWith('table_collections')
            expect(mockSelect).toHaveBeenCalledWith('*')
            expect(mockEq).toHaveBeenCalledWith('slug', 'collection-one')
            expect(mockSingle).toHaveBeenCalled()
            expect(result).toEqual(mockCollections[0])
        })

        it('should throw an error when retrieval fails', async () => {
            const error = new Error('Collection not found')

            mockSingle.mockResolvedValue({
                data: null,
                error,
            })

            await expect(
                getCollectionBySlug('unknown-collection'),
            ).rejects.toThrow(error)
        })
    })

    describe('getCollectionsWithPreviewArtworks', () => {
        it('should retrieve collections with their preview artworks', async () => {
            const result = await getCollectionsWithPreviewArtworks()

            expect(mockFrom).toHaveBeenCalledWith('table_collections')
            expect(mockGetArtworksByCollectionId).toHaveBeenCalledTimes(2)
            expect(mockGetArtworksByCollectionId).toHaveBeenNthCalledWith(1, 10)
            expect(mockGetArtworksByCollectionId).toHaveBeenNthCalledWith(2, 20)

            expect(result).toEqual([
                {
                    ...mockCollections[0],
                    artworks: mockArtworks,
                },
                {
                    ...mockCollections[1],
                    artworks: mockArtworks,
                },
            ])
        })

        it('should return an empty array when no collections exist', async () => {
            mockOrder.mockResolvedValue({
                data: [],
                error: null,
            })

            const result = await getCollectionsWithPreviewArtworks()

            expect(result).toEqual([])
            expect(mockGetArtworksByCollectionId).not.toHaveBeenCalled()
        })

        it('should propagate an error when collection retrieval fails', async () => {
            const error = new Error('Database error')

            mockOrder.mockResolvedValue({
                data: null,
                error,
            })

            await expect(
                getCollectionsWithPreviewArtworks(),
            ).rejects.toThrow(error)
        })

        it('should propagate an error when preview artwork retrieval fails', async () => {
            const error = new Error('Artwork retrieval failed')

            mockGetArtworksByCollectionId.mockRejectedValue(error)

            await expect(
                getCollectionsWithPreviewArtworks(),
            ).rejects.toThrow(error)
        })
    })
})
