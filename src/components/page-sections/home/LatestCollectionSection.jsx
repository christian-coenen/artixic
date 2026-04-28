import { collections } from '../../../data/collections'
import LatestCollectionCard from '../../ui/cards/LatestCollectionCard'
import './LatestCollectionSection.css'

const LatestCollectionSection = () => {
    const latestCollection = Object.entries(collections).sort(([, a], [, b]) => new Date(b.created_at) - new Date(a.created_at))[0]

    if (!latestCollection) return null

    const [key, collection] = latestCollection

    return (
        <section className="latest-collection-section">
            <div className="latest-collection-inner">
                <h2 className="latest-collection-header">
                    Latest collection
                </h2>

                <div className="latest-collection-feature">
                    {/* TODO: Display latest collection stored in the database */}
                    <LatestCollectionCard
                        key={key}
                        title={collection.title}
                        subtitle={collection.subtitle}
                        image={collection.image}
                        link={`/collections/${key}`}
                    />
                </div>
            </div>
        </section>
    )
}

export default LatestCollectionSection
