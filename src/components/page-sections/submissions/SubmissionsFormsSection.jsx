import SegmentedControl from '../../ui/SegmentedControl'
import ImageUpload from '../../ui/inputs/ImageUpload'
import TextField from '../../ui/inputs/TextField'
import SearchableDropdown from '../../ui/inputs/SearchableDropdown'
import RepeatableField from '../../ui/inputs/RepeatableField'
import Button from '../../ui/Button'
import './SubmissionsFormsSection.css'

const SUBMISSION_OPTIONS = [
    { label: 'Artwork', value: 'artwork' },
    { label: 'Collection', value: 'collection' },
]

const SubmissionsFormsSection = ({
    submissionType,
    onSubmissionTypeChange,
    imageFile,
    onImageChange,
    title,
    onTitleChange,
    description,
    onDescriptionChange,
    yearOptions,
    creationYear,
    onCreationYearChange,
    authors,
    onAuthorsChange,
    email,
    onEmailChange,
    validationErrors,
    formRef,
    onSubmit,
}) => {

    return (
        <section className="submissions-forms-section">
            <div className="submissions-forms-inner">
                <form
                    ref={formRef}
                    className="submissions-forms-form"
                    onSubmit={onSubmit}
                    noValidate
                >
                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            What would you like to submit?
                        </h2>

                        <div className="submissions-forms-control">
                            <SegmentedControl
                                options={SUBMISSION_OPTIONS}
                                value={submissionType}
                                onChange={onSubmissionTypeChange}
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
                                error={validationErrors.image}
                                required
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
                                onChange={onTitleChange}
                                maxLength={200}
                                showCharacterCount
                                error={validationErrors.title}
                                size="large"
                                placeholder="Enter the title of the artwork"
                                required
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
                                onChange={onDescriptionChange}
                                maxLength={2000}
                                showCharacterCount
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

                        <p className="submissions-forms-body">
                            Enter the year the artwork was created, not the year it was submitted to ARTIXIC.
                        </p>

                        <div className="submissions-forms-control">
                            <SearchableDropdown
                                options={yearOptions}
                                value={creationYear}
                                onChange={onCreationYearChange}
                                error={validationErrors.creationYear}
                                placeholder="Select a year"
                                searchPlaceholder="Search years..."
                                emptyMessage="No years found"
                                required
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Authors
                        </h2>

                        <p className="submissions-forms-body">
                            Add up to 5 authors.
                        </p>

                        <div className="submissions-forms-control">
                            <RepeatableField
                                FieldComponent={TextField}
                                values={authors}
                                onChange={onAuthorsChange}
                                maxFields={5}
                                minFields={1}
                                error={validationErrors.authors}
                                addLabel="Add additional author"
                                removeLabel="Remove author"
                                getFieldProps={(index) => ({
                                    required: true,
                                    placeholder: `Author ${index + 1}`,
                                    'aria-label': `Author ${index + 1}`,
                                })}
                            />
                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Email
                        </h2>

                        <p className="submissions-forms-body">
                            Provide your email address so that we can contact you about your submission.
                        </p>

                        <div className="submissions-forms-control">
                            <TextField
                                type="email"
                                value={email}
                                onChange={onEmailChange}
                                error={validationErrors.email}
                                size="large"
                                placeholder="Enter your email address"
                                required
                                maxLength={254}
                                autoComplete="email"
                            />
                        </div>
                    </section>

                    <div className="submissions-forms-submit">
                        <Button
                            type="submit"
                            variant="filled"
                        >
                            Submit artwork
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SubmissionsFormsSection
