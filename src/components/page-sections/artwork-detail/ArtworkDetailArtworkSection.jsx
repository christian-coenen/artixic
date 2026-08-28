import { NavLink, useParams } from 'react-router-dom'
import { artworks } from '../../../data/artworks'
import { collections } from '../../../data/collections'
import ArtworkCard from '../../ui/cards/ArtworkCard'
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
                    <ArtworkCard image={artwork.image} title={artwork.title} as="div" aspectRatio="original" />
            </div>
        </section>
    )
}

export default ArtworkDetailArtworkSection
