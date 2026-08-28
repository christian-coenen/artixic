import { artworks } from '../../../data/artworks'
import HighlightedArtworkCard from '../../ui/cards/HighlightedArtworkCard'
import './HighlightedArtworksSection.css'

const HightlightedArtworksSection = () => {
    return (
        <section className="highlighted-artworks-section">
            <div className="highlighted-artworks-inner">
                <p className="highlighted-artworks-eyebrow">
                    Highlighted artworks
                </p>

                <h2 className="highlighted-artworks-header">
                    Works of focus
                </h2>

                <ul className="highlighted-artworks-grid">
                    {/* TODO: Display hightlighted artworks stored in database */}
                    {Object.entries(artworks).filter(([, artwork]) => artwork.highlighted).map(([key, artwork]) => (
                        <HighlightedArtworkCard
                            key={key}
                            title={artwork.title}
                            subtitle={artwork.subtitle}
                            image={artwork.image}
                            link={`/artworks/${key}`}
                        />
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default HightlightedArtworksSection
