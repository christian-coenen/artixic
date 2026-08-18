import { useParams } from 'react-router-dom'
import { artworks } from '../../data/artworks.js' // Temporary data
import VisitorLayout from '../../components/layout/VisitorLayout.jsx'
import ArtworkDetailArtworkSection from '../../components/page-sections/artwork-detail/ArtworkDetailArtworkSection.jsx'
import ArtworkDetailInformationSection from '../../components/page-sections/artwork-detail/ArtworkDetailInformationSection.jsx'

const ArtworkDetailPage = () => {
    const { artworkId } = useParams()
    
    const artwork = artworks[artworkId]

    return (
        <VisitorLayout>
            <ArtworkDetailArtworkSection />
            <ArtworkDetailInformationSection />
        </VisitorLayout>
    )
}

export default ArtworkDetailPage
