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

export const getArtworksBySlug = async (slug) => {
    const { data, error } = await supabase
        .from('table_artworks')
        .select('*')
        .eq('slug', slug)
        .single()
    
    if (error) {
        throw error
    }

    return data
}

export const getFeaturedArtworks = async () => {
    const { data, error } = await supabase
        .from('table_artworks')
        .select('*')
        .eq('is_featured', true)
        .order('published_at', { ascending: false })

    if (error) {
        throw error
    }

    return data
}

export const getArtworksByCollectionId = async (collectionId, limit = 5) => {
    const { data, error } = await supabase
        .from('table_artworks')
        .select('*')
        .eq('collection_id', collectionId)
        .order('published_at', { ascending: false })
        .limit(limit)

    if (error) {
        throw error
    }

    return data
}

export const getArtworkImageUrl = (imagePath) => imagePath
