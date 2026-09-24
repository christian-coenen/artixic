import MediaCard from '../../ui/cards/MediaCard'
import './HighlightedArtworksSection.css'

const HighlightedArtworksSection = ({ artworks, error }) => {
    return (
        <section className="highlighted-artworks-section">
            <div className="highlighted-artworks-inner">
                <p className="highlighted-artworks-eyebrow">
                    Highlighted artworks
                </p>

                <h2 className="highlighted-artworks-header">
                    Works of focus
                </h2>

                {error ? (
                    <p>Unable to load artworks.</p>
                ) : (
                    <ul className="highlighted-artworks-grid">
                        {artworks.map((artwork) => {
                            const meta = `${artwork.authors.join(' \u00B7 ')} \u00B7 ${artwork.year}`

                            return (
                                <MediaCard
                                    as="li"
                                    aspectRatio="3 / 2"
                                    key={artwork.artwork_id}
                                    image={artwork.image_path}
                                    link={`/artworks/${artwork.slug}`}
                                    radius="1"
                                    meta={meta}
                                    title={artwork.title}
                                />
                            )
                        })}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default HighlightedArtworksSection
