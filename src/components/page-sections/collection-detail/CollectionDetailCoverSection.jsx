import CollectionPreview from '../../ui/CollectionPreview'
import Badge from '../../ui/Badge'
import './CollectionDetailCoverSection.css'

const CollectionDetailCoverSection = ({ collection, artworks, getImageUrl }) => {
    const meta = collection.authors.join(' \u00B7 ')

    return (
        <section className="collection-detail-cover-section">
            <div className="collection-detail-cover-image-container">
                <CollectionPreview
                    artworks={artworks}
                    getImageUrl={getImageUrl}
                />
            </div>

            <div className="collection-detail-cover-inner">
                <Badge>
                    {collection.year}
                </Badge>

                <h3 className="collection-detail-cover-title">
                    {collection.title}
                </h3>

                <p className="collection-detail-cover-meta">
                    {meta}
                </p>

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
