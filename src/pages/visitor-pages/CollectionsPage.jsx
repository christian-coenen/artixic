import VisitorLayout from '../../components/layout/VisitorLayout'
import CollectionsIntroSection from '../../components/page-sections/collections/CollectionsIntroSection'
import CollectionsGridSection from '../../components/page-sections/collections/CollectionsGridSection'

const CollectionsPage = () => {
    return (
        <VisitorLayout>
            <CollectionsIntroSection />
            <CollectionsGridSection />
        </VisitorLayout>
    )
}

export default CollectionsPage