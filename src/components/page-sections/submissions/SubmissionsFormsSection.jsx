import { useState } from 'react'
import { Upload, Plus } from 'lucide-react'
import SegmentedControl from '../../ui/SegmentedControl'
import Button from '../../ui/Button'
import './SubmissionsFormsSection.css'

const SUBMISSION_OPTIONS = [
    { label: 'Artwork', value: 'artwork' },
    { label: 'Collection', value: 'collection' },
]

const SubmissionsFormsSection = () => {
    const [submissionType, setSubmissionType] = useState('artwork')

    return (
        <section className="submissions-forms-section">
            <div className="submissions-forms-inner">
                <form className="submissions-forms-form">
                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            What would you like to submit?
                        </h2>

                        <div className="submissions-forms-toggle">
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

                        <div>

                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Description
                        </h2>

                        <div>

                        </div>
                    </section>

                    <section className="submissions-forms-subsection">
                        <h2 className="submissions-forms-header">
                            Creation year
                        </h2>

                        <div>

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
