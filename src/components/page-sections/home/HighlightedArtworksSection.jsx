import { artworks } from '../../../data/artworks'
import MediaCard from '../../ui/cards/MediaCard'
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
                        <MediaCard
                            as="li"
                            aspectRatio="3 / 2"
                            image={artwork.image}
                            link={`/artworks/${key}`}
                            radius="1"
                            subtitle={artwork.subtitle}
                            title={artwork.title}
                        />
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default HightlightedArtworksSection
