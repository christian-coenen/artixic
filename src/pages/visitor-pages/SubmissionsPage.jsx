import { getYearOptions } from '../../utils/getYearOptions'
import VisitorLayout from '../../components/layout/VisitorLayout'
import SubmissionsIntroSection from '../../components/page-sections/submissions/SubmissionsIntroSection'
import SubmissionsFormsSection from '../../components/page-sections/submissions/SubmissionsFormsSection'

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
    const [errors, setErrors] = useState({})

    const yearOptions = getYearOptions()

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
        setErrors((previous) => ({
            ...previous,
            image: error,
        }))
    }

    const validateForm = () => {
        const nextErrors = {}

        const imageError = validateImage(imageFile)

        const normalizedEmail = email.trim()

        if (imageError) {
            nextErrors.image = imageError
        }

        if (!title.trim()) {
            nextErrors.title = 'Please enter a title.'
        }

        if (!yearOptions.some((option) => option.value === creationYear)) {
            nextErrors.creationYear = 'Please select a creation year.'
        }

        if (
            authors.length === 0 ||
            authors.length > 5 ||
            authors.some((author) => !author.trim())
        ) {
            nextErrors.authors = 'Please provide between 1 and 5 valid authors.'
        }

        if (!normalizedEmail) {
            nextErrors.email = 'Please enter your email address.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
            nextErrors.email = 'Please enter a valid email address.'
        }
        setErrors(nextErrors)

        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault()

        if (!validateForm()) return

        const normalizedAuthors = authors.map((author) => author.trim())


        // Submission processing logic.
    }

    return (
        <VisitorLayout>
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
                errors={errors}
                onSubmit={handleSubmit}
            />
        </VisitorLayout>
    )
}

export default SubmissionsPage
