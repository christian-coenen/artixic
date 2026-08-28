import { NavLink } from 'react-router-dom'
import './ArtworkCard.css'

const ArtworkCard = ({ link, image, title, as: Wrapper = 'li', aspectRatio = 'fixed' }) => {
    const cardClassName = [
        "artwork-card",
        link && "artwork-card--interactive"
    ]
        .filter(Boolean)
        .join(" ")
    
    const content = (
        <div className={`artwork-card-inner artwork-card-inner--${aspectRatio}`}>
            <div className="artwork-card-image">
                <img src={image} alt={title} draggable={false} />
            </div>
        </div>
    )

    return (
        <Wrapper className={cardClassName}>
            {link ? (
                <NavLink to={link}>
                    {content}
                </NavLink>
            ) : (
                content
            )}
        </Wrapper>
    )
}

export default ArtworkCard
