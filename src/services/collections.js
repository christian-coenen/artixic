import { supabase } from '../lib/supabaseClient'
import { getArtworksByCollectionId } from './artworks'

export const getCollections = async () => {
    const { data, error } = await supabase
        .from('table_collections')
        .select('*')
        .order('published_at', { ascending: false })

    if (error) {
        throw error
    }

    return data
}

export const getCollectionBySlug = async (slug) => {
    const { data, error } = await supabase
        .from('table_collections')
        .select('*')
        .eq('slug', slug)
        .single()

    if (error) {
        throw error
    }

    return data
}

export const getCollectionsWithPreviewArtworks = async () => {
    const collections = await getCollections()

    return Promise.all(
        collections.map(async (collection) => ({
            ...collection,
            artworks: await getArtworksByCollectionId(collection.collection_id),
        }))
    )
}
