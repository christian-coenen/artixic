import { useEffect, useState } from 'react'
import { getCollectionsWithPreviewArtworks } from '../../services/collections'
import { getArtworkImageUrl } from '../../services/artworks'
import VisitorLayout from '../../components/layout/VisitorLayout'
import CollectionsIntroSection from '../../components/page-sections/collections/CollectionsIntroSection'
import CollectionsGridSection from '../../components/page-sections/collections/CollectionsGridSection'

const CollectionsPage = () => {
    const [collections, setCollections] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        getCollectionsWithPreviewArtworks()
            .then((data) => {
                console.log('collections:', data)
                setCollections(data)
            })
            .catch(setError)
    }, [])

    return (
        <VisitorLayout>
            <CollectionsIntroSection />
            <CollectionsGridSection
                collections={collections}
                error={error}
                getImageUrl={getArtworkImageUrl}
            />
        </VisitorLayout>
    )
}

export default CollectionsPage