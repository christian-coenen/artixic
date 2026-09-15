import { useParams } from 'react-router-dom'
import { collections } from '../../../data/collections'
import './CollectionDetailCoverSection.css'

const CollectionDetailCoverSection = () => {
    const { collectionId } = useParams()
    const collection = collections[collectionId]

    if (!collection) {
        return <p>Collection not found.</p>
    }

    const authors = collection.authors.join(' · ')
    const year = new Date(collection.created_at).getFullYear()
    const eyebrow = `${authors} · ${year}`

    return (
        <section className="collection-detail-cover-section">
            <div className="collection-detail-cover-image-container">
                <img
                    className="collection-detail-cover-image"
                    src={collection.image}
                    alt={collection.title}
                    draggable={false}
                />
            </div>

            <div className="collection-detail-cover-inner">
                <p className="collection-detail-cover-eyebrow">
                    {eyebrow}
                </p>

                <h3 className="collection-detail-cover-title">
                    {collection.title}
                </h3>

                <div className="collection-detail-cover-body">
                    {collection.description && (
                        <p className="collection-detail-information-description">
                            {collection.description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CollectionDetailCoverSection
