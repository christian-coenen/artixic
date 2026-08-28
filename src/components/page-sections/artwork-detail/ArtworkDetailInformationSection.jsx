import { NavLink, useParams } from 'react-router-dom'
import { artworks } from '../../../data/artworks'
import { collections } from '../../../data/collections'
import './ArtworkDetailInformationSection.css'

const ArtworkDetailInformationSection = () => {
    const { artworkId } = useParams()
    const artwork = artworks[artworkId]

    const collection = artwork.collection
        ? collections[artwork.collection]
        : null

    if (!artwork) {
        return <p>Artwork not found.</p>
    }

    return (
        <section className="artwork-detail-information-section">
            <div className="artwork-detail-information-inner">

                <p className="artwork-detail-information-eyebrow">
                    {artwork.subtitle} {/* TODO: rename subtitle to meta */}
                </p>

                <h3 className="artwork-detail-information-title">
                    {artwork.title}
                </h3>

                <div className="artwork-detail-information-body">
                    {artwork.description && (
                        <p className="artwork-detail-information-description">
                            {artwork.description}
                        </p>
                    )}

                    {artwork.collection && (
                        <p className="artwork-detail-information-collection">
                            Featured in{""} <NavLink to={`/collections/${artwork.collection}`}>{collection.title}</NavLink>.
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ArtworkDetailInformationSection
