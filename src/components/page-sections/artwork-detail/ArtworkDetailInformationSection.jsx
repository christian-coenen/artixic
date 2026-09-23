import { NavLink } from 'react-router-dom'
import './ArtworkDetailInformationSection.css'

const ArtworkDetailInformationSection = ({ artwork }) => {
    const meta = `${artwork.authors.join(' \u00B7 ')} \u00B7 ${artwork.year}`

    return (
        <section className="artwork-detail-information-section">
            <div className="artwork-detail-information-inner">

                <p className="artwork-detail-information-eyebrow">
                    {meta}
                </p>

                <h3 className="artwork-detail-information-title">
                    {artwork.title}
                </h3>

                <div className="artwork-detail-information-body">
                    {artwork.description && (
                        <p className="artwork-detail-information-description">
                            {artwork.description}
                        </p>
                    )}

                    {artwork.collection && (
                        <p className="artwork-detail-information-collection">
                            Featured in{""} <NavLink to={`/collections/${artwork.collection}`}>{collection.title}</NavLink>.
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ArtworkDetailInformationSection
