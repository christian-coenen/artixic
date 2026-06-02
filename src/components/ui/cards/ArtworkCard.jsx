import { NavLink } from 'react-router-dom'
import './ArtworkCard.css'

const ArtworkCard = ({ link, image }) => {
    return (
        <li className="artwork-card">
            <NavLink
                to={link}
            >
                <div className="artwork-card-inner">
                    <div className="artwork-card-image">
                        <img src={image} />
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default ArtworkCard
