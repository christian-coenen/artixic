import Button from '../../ui/Button'
import './SubmissionsFormsSection.css'

const SubmissionsFormsSection = () => {
    return (
        <section className="submissions-forms-section">
            <div className="submissions-forms-inner">
                {/* Refactor to use button component (yet to be made) */}
                <div className="submissions-forms-options">
                    <Button
                        variant='filled'
                    >
                        Submit an artwork
                    </Button>

                    <Button
                        variant='bordered'
                    >
                        Submit a collection
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default SubmissionsFormsSection
