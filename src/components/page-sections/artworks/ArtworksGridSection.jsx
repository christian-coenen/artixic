import { useEffect, useState } from 'react'
import { getArtworks } from '../../../services/artworks'
import MediaCard from '../../ui/cards/MediaCard'
import './ArtworksGridSection.css'

const ArtworksGridSection = () => {
    const [artworks, setArtworks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadArtworks = async () => {
            try {
                const data = await getArtworks()
                setArtworks(data)
            } catch (error) {
                setError(error)
            }
        }

        loadArtworks()
    }, [])

    if (error) {
        return <p>Unable to load artworks.</p>
    }

    return (
        <section className="artworks-grid-section">
            <div className="artworks-grid-inner">
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
            </div>
        </section>
    )
}

export default ArtworksGridSection
