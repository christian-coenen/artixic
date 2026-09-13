import { collections } from '../../../data/collections'
import MediaCard from '../../ui/cards/MediaCard'
import './CollectionsGridSection.css'

const CollectionsGridSection = () => {
    return (
        <section className="collections-grid-section">
            <div className="collections-grid-inner">
                <ul className="collections-grid-list">
                    {/* TODO: Display collections stored in database */}
                    {Object.entries(collections).reverse().map(([key, collection]) => (
                        <MediaCard
                            key={key}
                            as="li"
                            aspectRatio="18 / 6"
                            image={collection.image}
                            link={`/collections/${key}`}
                            radius="0"
                            title={collection.title}
                            subtitle={collection.subtitle}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CollectionsGridSection
