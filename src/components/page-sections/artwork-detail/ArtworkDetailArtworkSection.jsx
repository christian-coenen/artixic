import MediaCard from '../../ui/cards/MediaCard'
import './ArtworkDetailArtworkSection.css'

const ArtworkDetailArtworkSection = ({ artwork }) => {
    return (
        <section className="artwork-detail-artwork-section">
            <div className="artwork-detail-artwork-section-background" />

            <div className="artwork-detail-artwork-inner">
                <MediaCard
                    as="div"
                    image={artwork.image_path}
                    aspectRatio="original"
                />
            </div>
        </section>
    )
}

export default ArtworkDetailArtworkSection
