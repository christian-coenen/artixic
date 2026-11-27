import { describe, it, expect } from 'vitest'
import { supabaseTest } from '../../src/lib/supabaseTestClient'

describe('Supabase test connection', () => {
    it('connects to the artixic_test schema', async () => {
        const { data, error } = await supabaseTest
            .from('table_statuses')
            .select('*')

        expect(error).toBeNull()
        expect(data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    key: 'pending',
                    label: 'Pending',
                }),
            ])
        )
    })
})
