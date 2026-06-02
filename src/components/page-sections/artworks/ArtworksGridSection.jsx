import { artworks } from '../../../data/artworks'
import ArtworkCard from '../../ui/cards/ArtworkCard'
import './ArtworksGridSection.css'

const ArtworksGridSection = () => {
    return (
        <section className="artworks-grid-section">
            <div className="artworks-grid-inner">
                <ul className="artworks-grid-list">
                    {/* TODO: Display artworks stored in database */}
                    {Object.entries(artworks).reverse().map(([key, artwork]) => (
                        <ArtworkCard
                            key={key}
                            image={artwork.image}
                            link={`/artworks/${key}`}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ArtworksGridSection
