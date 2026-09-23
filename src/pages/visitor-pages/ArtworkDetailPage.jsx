import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArtworksBySlug } from '../../services/artworks'
import VisitorLayout from '../../components/layout/VisitorLayout'
import ArtworkDetailArtworkSection from '../../components/page-sections/artwork-detail/ArtworkDetailArtworkSection'
import ArtworkDetailInformationSection from '../../components/page-sections/artwork-detail/ArtworkDetailInformationSection'

const ArtworkDetailPage = () => {
    const { slug } = useParams()
    const [artwork, setArtwork] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadArtwork = async () => {
            try {
                const data = await getArtworksBySlug(slug)
                setArtwork(data)
            } catch (error) {
                setError(error)
            }
        }

        loadArtwork()
    }, [slug])

    if (error) {
        return <p>Unable to load artwork.</p>
    }

    if (!artwork) {
        return null
    }

    return (
        <VisitorLayout>
            <ArtworkDetailArtworkSection artwork={artwork} />
            <ArtworkDetailInformationSection artwork={artwork} />
        </VisitorLayout>
    )
}

export default ArtworkDetailPage
