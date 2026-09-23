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
                        {artworks.map((artwork) => (
                            <MediaCard
                                key={artwork.artwork_id}
                                image={artwork.image_path}
                                link={`/artworks/${artwork.slug}`}
                                aspectRatio="5 / 4"
                            />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default ArtworksGridSection
