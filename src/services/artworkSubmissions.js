import { supabase } from '../lib/supabaseClient'

const STORAGE_BUCKET = 'media-submissions'
const PENDING_STATUS_KEY = 'pending'

export const createSubmission = async (submissionData) => {
    const {
        imageFile,
        title,
        authors,
        year,
        description,
        email,
    } = submissionData

    const { data: status, error: statusError } = await supabase
        .from('table_statuses')
        .select('status_id')
        .eq('key', PENDING_STATUS_KEY)
        .single()

    if (statusError) {
        throw statusError
    }

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
            status_id: status.status_id,
        })

    if (insertError) {
        throw insertError
    }

    return { imagePath }
}
