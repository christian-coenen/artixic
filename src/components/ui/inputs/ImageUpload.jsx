import { useEffect, useRef, useState } from 'react'
import { Upload, CircleAlert } from 'lucide-react'
import Button from '../Button'
import './ImageUpload.css'

const ImageUpload = ({
    file,
    onFileChange,
    error,
    description = 'JPEG, PNG or WebP \u00B7 Maximum 20 MB',
}) => {
    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    useEffect(() => {
        if (!file) {
            setPreviewUrl(null)
            return
        }

        const objectUrl = URL.createObjectURL(file)
        setPreviewUrl(objectUrl)

        return () => {
            URL.revokeObjectURL(objectUrl)
        }
    }, [file])

    const handleFileChange = (changeEvent) => {
        const selectedFile = changeEvent.currentTarget.files?.[0] ?? null

        onFileChange(selectedFile)

        changeEvent.currentTarget.value = ''
    }

    return (
        <div className="image-upload">
            <input
                ref={inputRef}
                className="image-upload-input"
                type="file"
                accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                hidden
            />

            <Button
                className="image-upload-button"
                layout="stacked"
                icon={
                    previewUrl ? (
                        <img
                            className="image-upload-preview"
                            src={previewUrl}
                            alt=""
                        />
                    ) : (
                        <Upload size={80} strokeWidth={1.5} />
                    )
                }
                iconPosition="center"
                size="large"
                description={file ? file.name : description}
                fullWidth
                padding="2.5rem"
                onClick={() => inputRef.current?.click()}
            >
                {file ? 'Change image' : 'Choose an image'}
            </Button>

            {error && (
                <p className="image-upload-error" role="alert">
                    <CircleAlert
                        className="image-upload-error-icon"
                        size={20}
                        aria-hidden="true"
                    />
                    {error}
                </p>
            )}
        </div>
    )
}

export default ImageUpload
