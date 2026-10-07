import MediaCard from '../../ui/cards/MediaCard'
import CollectionPreview from '../../ui/CollectionPreview'
import './CollectionsGridSection.css'

const CollectionsGridSection = ({ collections, error, getImageUrl }) => {
    if (error) return <p>Failed to load collections.</p>

    return (
        <section className="collections-grid-section">
            <div className="collections-grid-inner">
                <ul className="collections-grid-list">
                    {collections.map((collection) => {
                        const meta = collection.authors.join(' \u00B7 ')

                        return (
                            <MediaCard
                                key={collection.collection_id}
                                as="li"
                                aspectRatio="18 / 6"
                                media={
                                    <CollectionPreview
                                        artworks={collection.artworks}
                                        getImageUrl={getImageUrl}
                                    />
                                }
                                link={`/collections/${collection.slug}`}
                                radius="0"
                                title={collection.title}
                                meta={meta}
                            />
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default CollectionsGridSection
