import CollectionPreview from '../../ui/CollectionPreview'
import './CollectionDetailCoverSection.css'

const CollectionDetailCoverSection = ({ collection, artworks, getImageUrl }) => {
    const authors = collection.authors.join(' \u00B7 ')

    return (
        <section className="collection-detail-cover-section">
            <div className="collection-detail-cover-image-container">
                <CollectionPreview
                    artworks={artworks}
                    getImageUrl={getImageUrl}
                />
            </div>

            <div className="collection-detail-cover-inner">
                <p className="collection-detail-cover-eyebrow">
                    {authors}
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
