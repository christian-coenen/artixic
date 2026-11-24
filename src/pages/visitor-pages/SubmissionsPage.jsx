import { useEffect, useRef, useState } from 'react'
import { getYearOptions } from '../../utils/getYearOptions'
import { createSubmission } from '../../services/artworkSubmissions'
import VisitorLayout from '../../components/layout/VisitorLayout'
import SubmissionsIntroSection from '../../components/page-sections/submissions/SubmissionsIntroSection'
import SubmissionsFormsSection from '../../components/page-sections/submissions/SubmissionsFormsSection'
import SubmissionsConfirmationSection from '../../components/page-sections/submissions/SubmissionsConfirmationSection'
import SubmissionsNextStepsSection from '../../components/page-sections/submissions/SubmissionsNextStepsSection'

const MAX_IMAGE_SIZE = 20 * 1024 * 1024

const ALLOWED_IMAGE_TYPES = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
])

const ALLOWED_IMAGE_EXTENSIONS = /\.(jpe?g|png|webp)$/i

const SubmissionsPage = () => {
    const [submissionType, setSubmissionType] = useState('artwork')
    const [imageFile, setImageFile] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [creationYear, setCreationYear] = useState('')
    const [authors, setAuthors] = useState([''])
    const [email, setEmail] = useState('')
    const [validationErrors, setValidationErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissionSuccess, setSubmissionSuccess] = useState(false)
    const [submissionError, setSubmissionError] = useState('')

    const yearOptions = getYearOptions()

    const formRef = useRef(null)
    const shouldFocusError = useRef(false)

    useEffect(() => {
        if (!shouldFocusError.current) return

        try {
            const firstInvalidElement = formRef.current?.querySelector(
                '[aria-invalid="true"]'
            )

            if (firstInvalidElement) {
                firstInvalidElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                })

                firstInvalidElement.focus({ preventScroll: true })
            }
        } finally {
            shouldFocusError.current = false
        }
    }, [validationErrors])

    const validateImage = (file) => {
        if (!file) {
            return 'Please upload an image.'
        }

        const hasValidType = ALLOWED_IMAGE_TYPES.has(file.type.toLowerCase())
        const hasValidExtension = ALLOWED_IMAGE_EXTENSIONS.test(file.name)

        if (!hasValidType && !(file.type === '' && hasValidExtension)) {
            return 'File must be a JPEG, PNG, or WebP image.'
        }

        if (file.size > MAX_IMAGE_SIZE) {
            return 'File must not exceed 20 MB.'
        }

        return ''
    }

    const handleImageChange = (file) => {
        const error = file ? validateImage(file) : ''

        setImageFile(error ? null : file)
        setValidationErrors((previous) => ({
            ...previous,
            image: error,
        }))
    }

    const validateForm = () => {
        const nextvalidationErrors = {}

        const imageError = validateImage(imageFile)

        const normalizedEmail = email.trim()

        if (imageError) {
            nextvalidationErrors.image = imageError
        }

        if (!title.trim()) {
            nextvalidationErrors.title = 'Please enter a title.'
        }

        if (!yearOptions.some((option) => option.value === creationYear)) {
            nextvalidationErrors.creationYear = 'Please select a creation year.'
        }

        if (
            authors.length === 0 ||
            authors.length > 5 ||
            authors.some((author) => !author.trim())
        ) {
            nextvalidationErrors.authors = 'Please provide between 1 and 5 valid authors.'
        }

        if (!normalizedEmail) {
            nextvalidationErrors.email = 'Please enter your email address.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            nextvalidationErrors.email = 'Please enter a valid email address.'
        }
        setValidationErrors(nextvalidationErrors)

        return Object.keys(nextvalidationErrors).length === 0
    }

    const handleSubmit = async (submitEvent) => {
        submitEvent.preventDefault()

        if (isSubmitting) return

        const isValid = validateForm()

        if (!isValid) {
            shouldFocusError.current = true
            return
        }

        setIsSubmitting(true)
        setSubmissionError('')
        setSubmissionSuccess(false)

        try {
            const submissionData = {
                imageFile,
                title: title.trim(),
                description: description.trim() || null,
                year: Number(creationYear),
                authors: authors.map((author) => author.trim()),
                email: email.trim(),
            }

            await createSubmission(submissionData)

            setSubmissionSuccess(true)
        } catch (error) {
            console.error('Artwork submission failed:', error)
            setSubmissionError(
                'Your submission could not be completed. Please try again.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleSubmitAnother = () => {
        setSubmissionSuccess(false)
        setSubmissionError('')
        setValidationErrors({})
        setSubmissionType('artwork')
        setImageFile(null)
        setTitle('')
        setDescription('')
        setCreationYear('')
        setAuthors([''])
        setEmail('')
    }

    return (
        <VisitorLayout>
            {!submissionSuccess ? (
                <>
                    <SubmissionsIntroSection />
                    <SubmissionsFormsSection
                        submissionType={submissionType}
                        onSubmissionTypeChange={setSubmissionType}
                        imageFile={imageFile}
                        onImageChange={handleImageChange}
                        title={title}
                        onTitleChange={setTitle}
                        description={description}
                        onDescriptionChange={setDescription}
                        yearOptions={yearOptions}
                        creationYear={creationYear}
                        onCreationYearChange={setCreationYear}
                        authors={authors}
                        onAuthorsChange={setAuthors}
                        email={email}
                        onEmailChange={setEmail}
                        validationErrors={validationErrors}
                        formRef={formRef}
                        onSubmit={handleSubmit}
                        submissionError={submissionError}
                    />
                </>
            ) : (
                <>
                    <SubmissionsConfirmationSection />
                    <SubmissionsNextStepsSection 
                        onSubmitAnother={handleSubmitAnother}
                    />
                </>
            )}

        </VisitorLayout>
    )
}

export default SubmissionsPage
