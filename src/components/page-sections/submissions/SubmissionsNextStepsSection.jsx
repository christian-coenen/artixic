import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import './SubmissionsNextStepsSection.css'

const SubmissionsNextStepsSection = ({ onSubmitAnother }) => {
    return (
        <section className="submissions-next-steps-section">
            <div className="submissions-next-steps-inner">
                <h1 className="submissions-next-steps-header">
                    What happens next?
                </h1>

                <p className="submissions-next-steps-body">
                    Your submission has been received and is awaiting review. Our team will assess your submission before deciding whether it is suitable for publication.
                </p>

                <div className="submissions-next-steps-actions">
                    <Button
                        as={Link}
                        to="/artworks"
                        variant="filled"
                    >
                        Explore artworks
                    </Button>

                    <Button
                        variant="bordered"
                        onClick={onSubmitAnother}
                    >
                        Make another submission
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default SubmissionsNextStepsSection
