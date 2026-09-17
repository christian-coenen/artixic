import VisitorLayout from '../../components/layout/VisitorLayout.jsx'
import AboutIntroSection from '../../components/page-sections/about/AboutIntroSection'
import AboutMissionSection from '../../components/page-sections/about/AboutMissionSection'
import AboutExhibitionSection from '../../components/page-sections/about/AboutExhibitionSection.jsx'

const AboutPage = () => {
    return (
        <VisitorLayout>
            <AboutIntroSection />
            <AboutMissionSection />
            <AboutExhibitionSection />
        </VisitorLayout>
    )
}

export default AboutPage