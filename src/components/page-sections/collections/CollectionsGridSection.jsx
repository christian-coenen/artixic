import { collections } from '../../../data/collections'
import LatestCollectionCard from '../../ui/cards/LatestCollectionCard'
import './CollectionsGridSection.css'

const CollectionsGridSection = () => {
    return (
        <section className="collections-grid-section">
            <div className="collections-grid-inner">
                <ul className="collections-grid-list">
                    {/* TODO: Display collections stored in database */}
                    {Object.entries(collections).reverse().map(([key, collection]) => (
                        <LatestCollectionCard
                            key={key}
                            title={collection.title}
                            subtitle={collection.subtitle}
                            image={collection.image}
                            link={`/collections/${key}`}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CollectionsGridSection
