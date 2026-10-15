import { useState } from 'react'
import SegmentedControl from '../../ui/SegmentedControl'
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
                    <div className="submissions-forms-area">
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
                    </div>

                    <div className="submissions-forms-area">
                        <h2 className="submissions-forms-header">
                            Upload artwork
                        </h2>

                        <div>

                        </div>
                    </div>

                    <div className="submissions-forms-area">
                        <h2 className="submissions-forms-header">
                            Title
                        </h2>

                        <div>

                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SubmissionsFormsSection
