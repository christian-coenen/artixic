import { useEffect, useState } from 'react'
import { getArtworks } from '../../services/artworks'
import VisitorLayout from '../../components/layout/VisitorLayout'
import ArtworksIntroSection from '../../components/page-sections/artworks/ArtworksIntroSection'
import ArtworksGridSection from '../../components/page-sections/artworks/ArtworksGridSection'

const ArtworksPage = () => {
    const [artworks, setArtworks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadArtworks = async () => {
            try {
                const data = await getArtworks()
                setArtworks(data)
            } catch (error) {
                setError(error)
            }
        }

        loadArtworks()
    }, [])

    return (
        <VisitorLayout>
            <ArtworksIntroSection />
            <ArtworksGridSection 
                artworks={artworks}
                error={error}
            />
        </VisitorLayout>
    )
}

export default ArtworksPage
