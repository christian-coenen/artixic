import VisitorLayout from '../../components/layout/VisitorLayout.jsx'
import AboutIntroSection from '../../components/page-sections/about/AboutIntroSection'
import AboutMissionSection from '../../components/page-sections/about/AboutMissionSection'
import AboutExhibitionSection from '../../components/page-sections/about/AboutExhibitionSection.jsx'
import AboutArtistsSection from '../../components/page-sections/about/AboutArtistsSection.jsx'

const AboutPage = () => {
    return (
        <VisitorLayout>
            <AboutIntroSection />
            <AboutMissionSection />
            <AboutExhibitionSection />
            <AboutArtistsSection />
        </VisitorLayout>
    )
}

export default AboutPage