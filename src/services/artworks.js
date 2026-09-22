import { supabase } from '../lib/supabaseClient'

export const getArtworks = async () => {
    const { data, error } = await supabase
        .from('table_artworks')
        .select('*')
        .order('published_at', { ascending: false })
    
    if (error) {
        throw error
    }

    return data
}
