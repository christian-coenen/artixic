import { describe, it, expect } from 'vitest'
import { supabaseTest } from '../../src/lib/supabaseTestClient'

describe('Artwork integration tests', () => {
    it('retrieves published artworks ordered by publication date', async () => {
        const { data, error } = await supabaseTest
            .from('table_artworks')
            .select('*')
            .order('published_at', { ascending: false })

        expect(error).toBeNull()
        expect(data).toHaveLength(3)

        expect(data[0].title).toBe('Integration Test Artwork One')
        expect(data[1].title).toBe('Integration Test Artwork Two')
        expect(data[2].title).toBe('Integration Test Artwork Three')
    })

    it('retrieves an artwork by slug', async () => {
        const { data, error } = await supabaseTest
            .from('table_artworks')
            .select('*')
            .eq('slug', 'integration-test-artwork-one')
            .single()

        expect(error).toBeNull()
        expect(data.title).toBe('Integration Test Artwork One')
        expect(data.collection_id).toBe(2)
    })

    it('retrieves featured artworks', async () => {
        const { data, error } = await supabaseTest
            .from('table_artworks')
            .select('*')
            .eq('is_featured', true)
            .order('published_at', { ascending: false })

        expect(error).toBeNull()
        expect(data).toHaveLength(1)
        expect(data[0].title).toBe('Integration Test Artwork One')
    })
})
