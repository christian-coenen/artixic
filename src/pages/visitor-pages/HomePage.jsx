import { useEffect, useState } from 'react'
import { getFeaturedArtworks, getArtworkImageUrl } from '../../services/artworks'
import { getCollectionsWithPreviewArtworks } from '../../services/collections'
import VisitorLayout from '../../components/layout/VisitorLayout'
import HeroSection from '../../components/page-sections/home/HeroSection'
import HightlightedArtworksSection from '../../components/page-sections/home/HighlightedArtworksSection'
import LatestCollectionSection from '../../components/page-sections/home/LatestCollectionSection'

const HomePage = () => {
    const [artworks, setArtworks] = useState([])
    const [collections, setCollections] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadHomeData = async () => {
            try {
                const [featuredArtworks, latestCollections] =
                    await Promise.all([
                        getFeaturedArtworks(),
                        getCollectionsWithPreviewArtworks(),
                    ])
                
                setArtworks(featuredArtworks)
                setCollections(latestCollections)
            } catch (error) {
                setError(error)
            }
        }

        loadHomeData()
    }, [])

    return (
        <VisitorLayout>
            <HeroSection />
            <HightlightedArtworksSection
                artworks={artworks}
                error={error}
            />
            <LatestCollectionSection 
                artworks={artworks}
                collections={collections}
                getImageUrl={getArtworkImageUrl}
            />
        </VisitorLayout>
    )
}

export default HomePage
