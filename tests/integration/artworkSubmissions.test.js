import { describe, it, expect } from 'vitest'
import { readFile } from 'node:fs/promises'
import { supabaseTest } from '../../src/lib/supabaseTestClient'

const BUCKET = 'media-submissions-test'

const validImage = new File(
    [
        await readFile(
            'tests/fixtures/png_1000x600_sample_file_21KB.png'
        ),
    ],
    'integration-test-image.png',
    { type: 'image/png' }
)

const oversizedImage = new File(
    [
        await readFile(
            'tests/fixtures/png_sample_file_25MB.png'
        ),
    ],
    'integration-test-oversized.png',
    { type: 'image/png' }
)

describe('Artwork submission integration tests', () => {
    it('uploads a valid image and creates a pending submission', async () => {
        const imagePath = `integration-test/${crypto.randomUUID()}.png`

        const { error: uploadError } = await supabaseTest.storage
            .from(BUCKET)
            .upload(imagePath, validImage, {
                contentType: validImage.type,
                upsert: false,
            })

        expect(uploadError).toBeNull()

        const { error: insertError } = await supabaseTest
            .from('table_artwork_submissions')
            .insert({
                title: 'Integration Test Submission',
                authors: ['Test Artist'],
                year: 2024,
                description: 'Artwork submission integration test.',
                image_path: imagePath,
                email: 'integration-test@example.com',
            })

        expect(insertError).toBeNull()
    })

    it('rejects an image exceeding the Storage size limit', async () => {
        const imagePath = `integration-test/${crypto.randomUUID()}.png`

        const { error } = await supabaseTest.storage
            .from(BUCKET)
            .upload(imagePath, oversizedImage, {
                contentType: oversizedImage.type,
                upsert: false,
            })

        expect(error).not.toBeNull()
    })
})
