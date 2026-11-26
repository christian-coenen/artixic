import { describe, it, expect } from 'vitest'
import { supabaseTest } from '../../src/lib/supabaseTestClient'

describe('Database security integration tests', () => {
    it('prevents anonymous users from reading artwork submissions', async () => {
        const { error } = await supabaseTest
            .from('table_artwork_submissions')
            .select('*')

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from modifying artwork submissions', async () => {
        const { error } = await supabaseTest
            .from('table_artwork_submissions')
            .update({ title: 'Unauthorized modification' })
            .eq('artwork_submission_id', 1)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from deleting artwork submissions', async () => {
        const { error } = await supabaseTest
            .from('table_artwork_submissions')
            .delete()
            .eq('artwork_submission_id', 1)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from inserting published artworks', async () => {
        const { error } = await supabaseTest
            .from('table_artworks')
            .insert({
                title: 'Unauthorized Artwork',
                authors: ['Test Artist'],
                year: 2024,
                description: 'Unauthorized test record.',
                slug: 'unauthorized-artwork',
                image_path: 'test/unauthorized.webp',
                created_at: new Date().toISOString(),
                status_id: 5,
            })

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from modifying published artworks', async () => {
        const { error } = await supabaseTest
            .from('table_artworks')
            .update({ title: 'Unauthorized modification' })
            .eq('artwork_id', 1)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from deleting published artworks', async () => {
        const { error } = await supabaseTest
            .from('table_artworks')
            .delete()
            .eq('artwork_id', 1)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from modifying collections', async () => {
        const { error } = await supabaseTest
            .from('table_collections')
            .update({ title: 'Unauthorized modification' })
            .eq('collection_id', 2)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('prevents anonymous users from deleting collections', async () => {
        const { error } = await supabaseTest
            .from('table_collections')
            .delete()
            .eq('collection_id', 2)

        expect(error).not.toBeNull()
        expect(error.code).toBe('42501')
    })

    it('only exposes the pending submission status to anonymous users', async () => {
        const { data, error } = await supabaseTest
            .from('table_statuses')
            .select('key')

        expect(error).toBeNull()
        expect(data).toEqual([{ key: 'pending' }])
    })
})
