import { NavLink } from 'react-router-dom'
import './HighlightedArtworkCard.css'

const HighlightedArtworkCard = ({ link, image, title, subtitle, highlighted }) => {
    return (
        <li className="highlighted-artwork-card">
            <NavLink
                to={link}
            >
                <div className="highlighted-artwork-card-inner">
                    <div className="highlighted-artwork-card-image">
                        <img src={image} alt={title} draggable={false} />
                    </div>

                    <div className="highlighted-artwork-card-text">
                        <h3 className="highlighted-artwork-card-title">{title}</h3>

                        <p className="highlighted-artwork-card-subtitle">{subtitle}</p>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default HighlightedArtworkCard
