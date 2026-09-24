import { collections } from '../../../data/collections'
import MediaCard from '../../ui/cards/MediaCard'
import './LatestCollectionSection.css'

const LatestCollectionSection = () => {
    const latestCollection = Object.entries(collections).sort(([, a], [, b]) => new Date(b.created_at) - new Date(a.created_at))[0]

    if (!latestCollection) return null

    const [key, collection] = latestCollection

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
                    {/* TODO: Display latest collection stored in the database */}
                    <MediaCard
                        as="div"
                        aspectRatio="18 / 6"
                        image={collection.image}
                        link={`/collections/${key}`}
                        radius="1"
                        meta={collection.meta}
                        title={collection.title}
                    />
                </div>
            </div>
        </section>
    )
}

export default LatestCollectionSection
