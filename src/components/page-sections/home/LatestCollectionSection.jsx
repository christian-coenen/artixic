import MediaCard from '../../ui/cards/MediaCard'
import CollectionPreview from '../../ui/CollectionPreview'
import './LatestCollectionSection.css'

const LatestCollectionSection = ({ collections, getImageUrl }) => {
    const latestCollection = collections[0]

    if (!latestCollection) return null

    const meta = `${latestCollection.authors.join(' \u00B7 ')} \u00B7 ${latestCollection.year}`

    return (
        <section className="latest-collection-section">
            <div className="latest-collection-section-background" />

            <div className="latest-collection-inner">
                <p className="latest-collection-eyebrow">
                    Latest collection
                </p>

                <h2 className="latest-collection-header">
                    Discover what's new
                </h2>

                <div className="latest-collection-feature">
                    <MediaCard
                        as="div"
                        aspectRatio="18 / 6"
                        media={
                            <CollectionPreview
                                artworks={latestCollection.artworks}
                                getImageUrl={getImageUrl}
                            />
                        }
                        link={`/collections/${latestCollection.slug}`}
                        radius="1"
                        meta={meta}
                        title={latestCollection.title}
                    />
                </div>
            </div>
        </section>
    )
}

export default LatestCollectionSection
