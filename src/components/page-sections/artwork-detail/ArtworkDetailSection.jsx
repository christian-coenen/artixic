import { NavLink, useParams } from 'react-router-dom'
import { artworks } from '../../../data/artworks'
import { collections } from '../../../data/collections'
import ArtworkCard from '../../ui/cards/ArtworkCard'
import './ArtworkDetailSection.css'

const ArtworkDetailSection = () => {
    const { artworkId } = useParams()
    const artwork = artworks[artworkId]

    const collection = artwork.collection
        ? collections[artwork.collection]
        : null

    if (!artwork) {
        return <p>Artwork not found.</p>
    }

    return (
        <section className="artwork-detail-section">
            <div className="artwork-detail-inner">
                <div className="artwork-detail-layout">
                    <div className="artwork-detail-image">
                        <ArtworkCard image={artwork.image} title={artwork.title} as="div" aspectRatio="original" />
                    </div>

                    <aside className="artwork-detail-aside">
                        <p className="artwork-detail-eyebrow">
                            {artwork.subtitle} {/* TODO: rename subtitle to meta */}
                        </p>

                        <h3 className="artwork-detail-title">
                            {artwork.title}
                        </h3>

                        <div className="artwork-detail-body">
                            {artwork.description && (
                                <p className="artwork-detail-description">
                                    {artwork.description}
                                </p>
                            )}

                            {artwork.collection && (
                                <p className="artwork-detail-collection">
                                    Featured in{""} <NavLink to={`/collections/${artwork.collection}`}>{collection.title}</NavLink>.
                                </p>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default ArtworkDetailSection
