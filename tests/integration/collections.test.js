import { describe, it, expect } from 'vitest'
import { supabaseTest } from '../../src/lib/supabaseTestClient'

describe('Collection integration tests', () => {
    it('retrieves collections ordered by publication date', async () => {
        const { data, error } = await supabaseTest
            .from('table_collections')
            .select('*')
            .order('published_at', { ascending: false })

        expect(error).toBeNull()
        expect(data).toHaveLength(2)

        expect(data[0].title).toBe('Integration Test Collection One')
        expect(data[1].title).toBe('Integration Test Collection Two')
    })

    it('retrieves a collection by slug', async () => {
        const { data, error } = await supabaseTest
            .from('table_collections')
            .select('*')
            .eq('slug', 'integration-test-collection-one')
            .single()

        expect(error).toBeNull()
        expect(data.title).toBe('Integration Test Collection One')
    })

    it('retrieves artworks belonging to a collection', async () => {
        const { data, error } = await supabaseTest
            .from('table_artworks')
            .select('*')
            .eq('collection_id', 2)
            .order('published_at', { ascending: false })

        expect(error).toBeNull()
        expect(data).toHaveLength(2)

        expect(data[0].title).toBe('Integration Test Artwork One')
        expect(data[1].title).toBe('Integration Test Artwork Two')
    })

    it('respects the artwork preview limit', async () => {
        const { data, error } = await supabaseTest
            .from('table_artworks')
            .select('*')
            .eq('collection_id', 2)
            .order('published_at', { ascending: false })
            .limit(1)

        expect(error).toBeNull()
        expect(data).toHaveLength(1)
        expect(data[0].title).toBe('Integration Test Artwork One')
    })
})
