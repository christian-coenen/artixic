import { useParams } from 'react-router-dom'
import { highlightedArtworks } from '../../data/highlightedArtworks'
import VisitorLayout from '../../components/layout/VisitorLayout'
import HeroSection from '../../components/page-sections/home/HeroSection'
import HightlightedArtworksSection from '../../components/page-sections/home/HighlightedArtworksSection'

const HomePage = () => {
    return (
        <VisitorLayout>
            <HeroSection />
            <HightlightedArtworksSection highlightedArtworks={highlightedArtworks} />
        </VisitorLayout>
    )
}

export default HomePage
