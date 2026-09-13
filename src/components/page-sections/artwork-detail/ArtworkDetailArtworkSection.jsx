import { NavLink, useParams } from 'react-router-dom'
import { artworks } from '../../../data/artworks'
import { collections } from '../../../data/collections'
import MediaCard from '../../ui/cards/MediaCard'
import './ArtworkDetailArtworkSection.css'

const ArtworkDetailArtworkSection = () => {
    const { artworkId } = useParams()
    const artwork = artworks[artworkId]

    const collection = artwork.collection
        ? collections[artwork.collection]
        : null

    if (!artwork) {
        return <p>Artwork not found.</p>
    }

    return (
        <section className="artwork-detail-artwork-section">
            <div className="artwork-detail-artwork-section-background" />

            <div className="artwork-detail-artwork-inner">
                <MediaCard
                    as="div"
                    image={artwork.image}
                />
            </div>
        </section>
    )
}

export default ArtworkDetailArtworkSection
