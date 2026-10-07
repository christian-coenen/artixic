import { NavLink } from 'react-router-dom'
import Badge from '../../ui/Badge'
import './ArtworkDetailInformationSection.css'

const ArtworkDetailInformationSection = ({ artwork, collection }) => {
    const meta = artwork.authors.join(' \u00B7 ')

    return (
        <section className="artwork-detail-information-section">
            <div className="artwork-detail-information-inner">

                <Badge>
                    {artwork.year}
                </Badge>

                <h3 className="artwork-detail-information-title">
                    {artwork.title}
                </h3>

                <p className="artwork-detail-information-meta">
                    {meta}
                </p>

                <div className="artwork-detail-information-body">
                    {artwork.description && (
                        <p className="artwork-detail-information-description">
                            {artwork.description}
                        </p>
                    )}

                    {collection && (
                        <p className="artwork-detail-information-collection">
                            Featured in{""} <NavLink to={`/collections/${collection.slug}`}>{collection.title}</NavLink>.
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ArtworkDetailInformationSection
