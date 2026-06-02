import { useParams } from 'react-router-dom'
import { artworks } from '../../data/artworks'
import { collections } from '../../data/collections'
import VisitorLayout from '../../components/layout/VisitorLayout'
import HeroSection from '../../components/page-sections/home/HeroSection'
import HightlightedArtworksSection from '../../components/page-sections/home/HighlightedArtworksSection'
import LatestCollectionSection from '../../components/page-sections/home/LatestCollectionSection'

const HomePage = () => {
    return (
        <VisitorLayout>
            <HeroSection />
            <HightlightedArtworksSection artworks={artworks} />
            <LatestCollectionSection collections={collections} />
        </VisitorLayout>
    )
}

export default HomePage
