import { NavLink } from 'react-router-dom'
import './LatestCollectionCard.css'

const LatestCollectionCard = ({ link, image, title, subtitle }) => {
    return (
        <div className="latest-collection-card">
            <NavLink
                to={link}
            >
                <div className="latest-collection-card-inner">
                    <div className="latest-collection-card-image">
                        <img src={image} alt={title} draggable={false} />
                    </div>

                    <div className="latest-collection-card-text">
                        <h3 className="latest-collection-card-title">{title}</h3>

                        <p className="latest-collection-card-subtitle">{subtitle}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default LatestCollectionCard
