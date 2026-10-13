import VisitorLayout from '../../components/layout/VisitorLayout'
import SubmissionsIntroSection from '../../components/page-sections/submissions/SubmissionsIntroSection'
import SubmissionsFormsSection from '../../components/page-sections/submissions/SubmissionsFormsSection'

const SubmissionsPage = () => {
    return (
        <VisitorLayout>
            <SubmissionsIntroSection />
            <SubmissionsFormsSection />
        </VisitorLayout>
    )
}

export default SubmissionsPage
