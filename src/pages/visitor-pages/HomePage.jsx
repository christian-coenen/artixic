import { useEffect, useState } from 'react'
import { getFeaturedArtworks } from '../../services/artworks'
import { collections } from '../../data/collections'
import VisitorLayout from '../../components/layout/VisitorLayout'
import HeroSection from '../../components/page-sections/home/HeroSection'
import HightlightedArtworksSection from '../../components/page-sections/home/HighlightedArtworksSection'
import LatestCollectionSection from '../../components/page-sections/home/LatestCollectionSection'

const HomePage = () => {
    const [artworks, setArtworks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadFeaturedArtworks = async () => {
            try {
                const data = await getFeaturedArtworks()
                setArtworks(data)
            } catch (error) {
                setError(error)
            }
        }

        loadFeaturedArtworks()
    }, [])

    return (
        <VisitorLayout>
            <HeroSection />
            <HightlightedArtworksSection
                artworks={artworks}
                error={error}
            />
            <LatestCollectionSection collections={collections} />
        </VisitorLayout>
    )
}

export default HomePage
