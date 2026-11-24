import { supabase } from '../lib/supabaseClient'

const STORAGE_BUCKET = 'media-submissions'

export const createSubmission = async (submissionData) => {
    const {
        imageFile,
        title,
        authors,
        year,
        description,
        email,
    } = submissionData

    const fileExtension = imageFile.name.split('.').pop().toLowerCase()
    const imagePath = `${crypto.randomUUID()}.${fileExtension}`

    const { error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(imagePath, imageFile, {
            contentType: imageFile.type,
            upsert: false,
        })

    if (uploadError) {
        throw uploadError
    }

    const { error: insertError } = await supabase
        .from('table_artwork_submissions')
        .insert({
            title,
            authors,
            year,
            description,
            image_path: imagePath,
            email,
        })

    if (insertError) {
        throw insertError
    }

    return { imagePath }
}
