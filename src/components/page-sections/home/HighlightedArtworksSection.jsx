import { highlightedArtworks } from '../../../data/highlightedArtworks'
import HighlightedArtworkCard from '../../ui/cards/HighlightedArtworkCard'
import './HighlightedArtworksSection.css'

const HightlightedArtworksSection = () => {
    return (
        <section className="highlighted-artworks-section">
            <div className="highlighted-artworks-inner">
                <h1 className="highlighted-artworks-header">
                    Highlighted artworks
                </h1>

                {/* Display hightlighted artworks stored in database */}
                <ul className="highlighted-artworks-grid">
                    {Object.entries(highlightedArtworks).map(([key, highlightedArtwork]) => (
                        <HighlightedArtworkCard
                            key={key}
                            title={highlightedArtwork.title}
                            subtitle={highlightedArtwork.subtitle}
                            image={highlightedArtwork.image}
                            link={`/artworks/${key}`}
                        />
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default HightlightedArtworksSection
