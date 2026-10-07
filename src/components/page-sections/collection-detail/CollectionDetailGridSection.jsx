import Masonry from 'react-layout-masonry'
import MediaCard from '../../ui/cards/MediaCard'
import './CollectionDetailGridSection.css'

const CollectionDetailGridSection = ({ artworks }) => {
    return (
        <section className="collection-detail-grid-section">
            <div className="collection-detail-grid-inner">
                <ul className="collection-detail-grid-list">
                    <Masonry
                        columns={{
                            0: 1,
                            480: 2,
                            880: 3,
                        }}
                        gap={32}
                    >
                        {artworks.map((artwork) => {
                            const meta = `${artwork.authors.join(' \u00B7 ')}`

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
            </div>
        </section>
    )
}

export default CollectionDetailGridSection
