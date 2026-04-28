import { useParams } from 'react-router-dom'
import { highlightedArtworks } from '../../data/highlightedArtworks'
import { collections } from '../../data/collections'
import VisitorLayout from '../../components/layout/VisitorLayout'
import HeroSection from '../../components/page-sections/home/HeroSection'
import HightlightedArtworksSection from '../../components/page-sections/home/HighlightedArtworksSection'
import LatestCollectionSection from '../../components/page-sections/home/LatestCollectionSection'

const HomePage = () => {
    return (
        <VisitorLayout>
            <HeroSection />
            <HightlightedArtworksSection highlightedArtworks={highlightedArtworks} />
            <LatestCollectionSection collections={collections} />
        </VisitorLayout>
    )
}

export default HomePage
