import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCollectionBySlug } from '../../services/collections'
import { getArtworksByCollectionId, getArtworkImageUrl } from '../../services/artworks'
import VisitorLayout from '../../components/layout/VisitorLayout'
import CollectionDetailCoverSection from '../../components/page-sections/collection-detail/CollectionDetailCoverSection'
import CollectionDetailGridSection from '../../components/page-sections/collection-detail/CollectionDetailGridSection'

const CollectionDetailPage = () => {
    const { slug } = useParams()

    const [collection, setCollection] = useState(null)
    const [artworks, setArtworks] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadCollection = async () => {
            try {
                const currentCollection =
                    await getCollectionBySlug(slug)
                
                const collectionArtworks =
                    await getArtworksByCollectionId(
                        currentCollection.collection_id
                    )

                setCollection(currentCollection)
                setArtworks(collectionArtworks)
            } catch (error) {
                console.error(error)
                setError(error)
            }
        }

        loadCollection()
    }, [slug])

    if (error) {
        return <p>Failed to load collection.</p>
    }

    if (!collection) {
        return <p>Loading collection...</p>
    }

    return (
        <VisitorLayout>
            <CollectionDetailCoverSection
                collection={collection}
                artworks={artworks}
                getImageUrl={getArtworkImageUrl}
            />
            <CollectionDetailGridSection
                artworks={artworks}
            />
        </VisitorLayout>
    )
}

export default CollectionDetailPage
