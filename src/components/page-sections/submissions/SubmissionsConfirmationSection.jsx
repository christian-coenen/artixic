import { CircleCheck } from 'lucide-react'
import './SubmissionsConfirmationSection.css'

const SubmissionsConfirmationSection = () => {
    return (
        <section className="submissions-confirmation-section">
            <div className="submissions-confirmation-inner">
                <CircleCheck className="submissions-confirmation-icon" size={100} strokeWidth={1.25}/>

                <h1 className="submissions-confirmation-header">
                    Submission received
                </h1>

                <p className="submissions-confirmation-body">
                    Thank you for your submission.
                </p>
            </div>
        </section>
    )
}

export default SubmissionsConfirmationSection
