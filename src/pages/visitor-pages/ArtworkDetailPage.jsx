import { useParams } from 'react-router-dom'
import { artworks } from '../../data/artworks.js' // Temporary data
import VisitorLayout from '../../components/layout/VisitorLayout.jsx'
import ArtworkDetaiSection from '../../components/page-sections/artwork-detail/ArtworkDetailSection.jsx'

const ArtworkDetailPage = () => {
    const { artworkId } = useParams()
    
    const artwork = artworks[artworkId]

    return (
        <VisitorLayout>
            <ArtworkDetaiSection />
        </VisitorLayout>
    )
}

export default ArtworkDetailPage
