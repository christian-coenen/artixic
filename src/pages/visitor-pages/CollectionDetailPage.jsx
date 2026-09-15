import VisitorLayout from '../../components/layout/VisitorLayout'
import CollectionDetailCoverSection from '../../components/page-sections/collection-detail/CollectionDetailCoverSection'
import CollectionDetailGridSection from '../../components/page-sections/collection-detail/CollectionDetailGridSection'

const CollectionDetailPage = () => {
    return (
        <VisitorLayout>
            <CollectionDetailCoverSection />
            <CollectionDetailGridSection />
        </VisitorLayout>
    )
}

export default CollectionDetailPage
