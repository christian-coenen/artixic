import { useState } from 'react'
import VisitorLayout from '../../components/layout/VisitorLayout'
import SubmissionsIntroSection from '../../components/page-sections/submissions/SubmissionsIntroSection'
import SubmissionsFormsSection from '../../components/page-sections/submissions/SubmissionsFormsSection'

const SubmissionsPage = () => {
    const [imageFile, setImageFile] = useState(null)
    const [imageError, setImageError] = useState(null)

    const handleImageChange = (file) => {
        setImageError(null)

        if (!file) {
            setImageFile(null)
            return
        }

        const allowedTypes = new Set([
            'image/jpeg',
            'image/png',
            'image/webp',
        ])

        const allowedExtensions = /\.(jpe?g|png|webp)$/i

        const hasValidType = allowedTypes.has(file.type.toLowerCase())
        const hasValidExtension = allowedExtensions.test(file.name)

        if (!hasValidType && !(file.type === '' && hasValidExtension)) {
            setImageFile(null)
            setImageError('File must be a JPEG, PNG, or WebP image.')
            return
        }

        if (file.size > 20 * 1024 * 1024) {
            setImageFile(null)
            setImageError('File must not exceed 20 MB.')
            return
        }

        setImageFile(file)
    }

    return (
        <VisitorLayout>
            <SubmissionsIntroSection />
            <SubmissionsFormsSection
                imageFile={imageFile}
                onImageChange={handleImageChange}
                imageError={imageError}
            />
        </VisitorLayout>
    )
}

export default SubmissionsPage
