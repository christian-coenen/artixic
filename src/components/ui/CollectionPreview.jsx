import { useState } from 'react'
import './CollectionPreview.css'

const MAX_ARTWORKS = 3

const CollectionPreview = ({ artworks = [], getImageUrl, variant = 'card' }) => {
    const [failedIds, setFailedIds] = useState(() => new Set())

    const selected = artworks
        .filter((artworks) => artworks.image_path && !failedIds.has(artworks.artwork_id))
        .slice(0, MAX_ARTWORKS)

    const handleError = (artworkId) =>
        setFailedIds((previous) => new Set(previous).add(artworkId))

    return (
        <div
            className={`collection-preview ${variant === 'detail' ? 'collection-preview-detail' : ''}`}
            data-count={selected.length}
        >
            {selected.map((artworks) => (
                <div key={artworks.artwork_id} className="collection-preview-cell">
                    <img
                        className="collection-preview-image"
                        src={getImageUrl(artworks.image_path, variant)}
                        alt={artworks.title ?? ''}
                        loading="lazy"
                        draggable={false}
                        onError={() => handleError(artworks.artwork_id)}
                    />
                </div>
            ))}
        </div>
    )
}

export default CollectionPreview
