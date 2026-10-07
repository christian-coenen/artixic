import Masonry from 'react-layout-masonry'
import MediaCard from '../../ui/cards/MediaCard'
import './ArtworksGridSection.css'

const ArtworksGridSection = ({ artworks, error }) => {
    return (
        <section className="artworks-grid-section">
            <div className="artworks-grid-inner">
                {error ? (
                    <p>Unable to load artworks</p>
                ) : (
                    <ul className="artworks-grid-list">
                        <Masonry
                            columns={{
                                0: 1,
                                480: 2,
                                880: 3,
                            }}
                            gap={32}
                        >
                            {artworks.map((artwork) => {
                                const meta = artwork.authors.join(' \u00B7 ')

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
                    </ul>
                )}
            </div>
        </section>
    )
}

export default ArtworksGridSection
