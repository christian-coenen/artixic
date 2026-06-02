import VisitorLayout from '../../components/layout/VisitorLayout'
import ArtworksIntroSection from '../../components/page-sections/artworks/ArtworksIntroSection'
import ArtworksGridSection from '../../components/page-sections/artworks/ArtworksGridSection'

const ArtworksPage = () => {
    return (
        <VisitorLayout>
            <ArtworksIntroSection />
            <ArtworksGridSection />
        </VisitorLayout>
    )
}

export default ArtworksPage
