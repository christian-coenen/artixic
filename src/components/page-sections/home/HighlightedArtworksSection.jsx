import Masonry from 'react-layout-masonry'
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
                    <div className="highlighted-artworks-list">
                        <Masonry
                            columns={{
                                0: 1,
                                480: 2,
                                880: 3,
                            }}
                            gap={32}
                        >
                            {artworks.map((artwork) => {
                                const meta = `${artwork.authors.join(' \u00B7 ')} \u00B7 ${artwork.year}`

                                return (
                                    <MediaCard
                                        as="li"
                                        key={artwork.artwork_id}
                                        image={artwork.image_path}
                                        link={`/artworks/${artwork.slug}`}
                                        radius="1"
                                        meta={meta}
                                        title={artwork.title}
                                    />
                                )
                            })}
                        </Masonry>
                    </div>
                )}
            </div>
        </section>
    )
}

export default HighlightedArtworksSection
