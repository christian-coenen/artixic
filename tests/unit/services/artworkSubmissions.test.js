
import { beforeEach, describe, expect, it, vi } from 'vitest'

const {
    mockFrom,
    mockInsert,
    mockStorage,
    mockStorageFrom,
    mockUpload,
    mockRandomUUID,
} = vi.hoisted(() => ({
    mockFrom: vi.fn(),
    mockInsert: vi.fn(),
    mockStorage: vi.fn(),
    mockStorageFrom: vi.fn(),
    mockUpload: vi.fn(),
    mockRandomUUID: vi.fn(),
}))

vi.mock('../../../src/lib/supabaseClient', () => ({
    supabase: {
        from: mockFrom,
        storage: {
            from: mockStorageFrom,
        },
    },
}))

vi.stubGlobal('crypto', {
    randomUUID: mockRandomUUID,
})

import { createSubmission } from '../../../src/services/artworkSubmissions'

const mockSubmission = {
    imageFile: {
        name: 'artwork.jpg',
        type: 'image/jpeg',
    },
    title: 'Test Artwork',
    authors: 'Test Artist',
    year: 2025,
    description: 'A test artwork description.',
    email: 'artist@example.com',
}

describe('Artwork submission service', () => {
    beforeEach(() => {
        vi.clearAllMocks()

        mockRandomUUID.mockReturnValue('test-uuid-123')

        mockStorageFrom.mockReturnValue({
            upload: mockUpload,
        })

        mockFrom.mockReturnValue({
            insert: mockInsert,
        })

        mockUpload.mockResolvedValue({
            data: {
                path: 'test-uuid-123.jpg',
            },
            error: null,
        })

        mockInsert.mockResolvedValue({
            data: null,
            error: null,
        })
    })

    it('should upload an image and create a submission successfully', async () => {
        const result = await createSubmission(mockSubmission)

        expect(mockStorageFrom).toHaveBeenCalledWith('media-submissions')

        expect(mockUpload).toHaveBeenCalledWith(
            'test-uuid-123.jpg',
            mockSubmission.imageFile,
            {
                contentType: 'image/jpeg',
                upsert: false,
            },
        )

        expect(mockFrom).toHaveBeenCalledWith(
            'table_artwork_submissions',
        )

        expect(mockInsert).toHaveBeenCalledWith({
            title: mockSubmission.title,
            authors: mockSubmission.authors,
            year: mockSubmission.year,
            description: mockSubmission.description,
            image_path: 'test-uuid-123.jpg',
            email: mockSubmission.email,
        })

        expect(result).toEqual({
            imagePath: 'test-uuid-123.jpg',
        })
    })

    it('should generate the image path using a UUID and file extension', async () => {
        await createSubmission(mockSubmission)

        expect(mockRandomUUID).toHaveBeenCalled()
        expect(mockUpload).toHaveBeenCalledWith(
            'test-uuid-123.jpg',
            mockSubmission.imageFile,
            expect.any(Object),
        )
    })

    it('should throw an error when image upload fails', async () => {
        const error = new Error('Image upload failed')

        mockUpload.mockResolvedValue({
            data: null,
            error,
        })

        await expect(
            createSubmission(mockSubmission),
        ).rejects.toThrow(error)

        expect(mockInsert).not.toHaveBeenCalled()
    })

    it('should throw an error when database insertion fails', async () => {
        const error = new Error('Database insertion failed')

        mockInsert.mockResolvedValue({
            data: null,
            error,
        })

        await expect(
            createSubmission(mockSubmission),
        ).rejects.toThrow(error)

        expect(mockUpload).toHaveBeenCalled()
    })

    it('should convert the file extension to lowercase', async () => {
        const submission = {
            ...mockSubmission,
            imageFile: {
                name: 'artwork.JPG',
                type: 'image/jpeg',
            },
        }

        await createSubmission(submission)

        expect(mockUpload).toHaveBeenCalledWith(
            'test-uuid-123.jpg',
            submission.imageFile,
            expect.any(Object),
        )
    })
})
