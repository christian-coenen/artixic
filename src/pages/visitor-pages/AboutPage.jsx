import VisitorLayout from '../../components/layout/VisitorLayout.jsx'
import AboutIntroSection from '../../components/page-sections/about/AboutIntroSection'
import AboutMissionSection from '../../components/page-sections/about/AboutMissionSection'

const AboutPage = () => {
    return (
        <VisitorLayout>
            <AboutIntroSection />
            <AboutMissionSection />
        </VisitorLayout>
    )
}

export default AboutPage