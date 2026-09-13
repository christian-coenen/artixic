import { artworks } from '../../../data/artworks'
import MediaCard from '../../ui/cards/MediaCard'
import './ArtworksGridSection.css'

const ArtworksGridSection = () => {
    return (
        <section className="artworks-grid-section">
            <div className="artworks-grid-inner">
                <ul className="artworks-grid-list">
                    {/* TODO: Display artworks stored in database */}
                    {Object.entries(artworks).reverse().map(([key, artwork]) => (
                        <MediaCard
                            key={key}
                            image={artwork.image}
                            link={`/artworks/${key}`}
                            aspectRatio="5 / 4"
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ArtworksGridSection
