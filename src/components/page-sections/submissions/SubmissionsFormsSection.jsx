import { useState } from 'react'
import { Plus } from 'lucide-react'
import { getYearOptions } from '../../../utils/getYearOptions'
import SegmentedControl from '../../ui/SegmentedControl'
import ImageUpload from '../../ui/inputs/ImageUpload'
import TextField from '../../ui/inputs/TextField'
import SearchableDropdown from '../../ui/inputs/SearchableDropdown'
import './SubmissionsFormsSection.css'

const SUBMISSION_OPTIONS = [
    { label: 'Artwork', value: 'artwork' },
    { label: 'Collection', value: 'collection' },
]

const SubmissionsFormsSection = ({
    imageFile,
    onImageChange,
    imageError,
}) => {
    const [submissionType, setSubmissionType] = useState('artwork')
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [creationYear, setCreationYear] = useState('')
    const yearOptions = getYearOptions()

    return (
        <section className="submissions-forms-section">
            <div className="submissions-forms-inner">
                <form className="submissions-forms-form">
                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            What would you like to submit?
                        </h2>

                        <div className="submissions-forms-control">
                            <SegmentedControl
                                options={SUBMISSION_OPTIONS}
                                value={submissionType}
                                onChange={setSubmissionType}
                                label="Submission type"
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Upload artwork
                        </h2>

                        <div className="submissions-forms-control">
                            <ImageUpload
                                file={imageFile}
                                onFileChange={onImageChange}
                                error={imageError}
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Title
                        </h2>

                        <div className="submissions-forms-control">
                            <TextField
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                maxLength={200}
                                size="large"
                                placeholder="Enter the title of the artwork"
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Description (optional)
                        </h2>

                        <div className="submissions-forms-control">
                            <TextField
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                maxLength={2000}
                                size="large"
                                multiline
                                rows={8}
                                placeholder="Enter the description of the artwork"
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Creation year
                        </h2>

                        <div className="submissions-forms-control">
                            <SearchableDropdown
                                options={yearOptions}
                                value={creationYear}
                                onChange={setCreationYear}
                                placeholder="Select a year"
                                searchPlaceholder="Search years..."
                                emptyMessage="No years found"
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Authors
                        </h2>

                        <div>

                        </div>
                    </section>
                </form>
            </div>
        </section>
    )
}

export default SubmissionsFormsSection
