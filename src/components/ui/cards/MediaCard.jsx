import { NavLink } from 'react-router-dom'
import './MediaCard.css'

const MediaCard = ({
    link,
    image,
    title,
    meta,
    as: Wrapper = "li",
    aspectRatio = "5 / 4",
    radius = "0"
}) => {
    const cardClassName = [
        "media-card",
        link && "media-card--interactive",
        `media-card--radius-${radius}`
    ]
        .filter(Boolean)
        .join(" ")

    const content = (
        <div className="media-card-inner">
            <div
                className="media-card-image"
                style={{ aspectRatio }}
            >
                <img
                    src={image}
                    alt={title}
                    draggable={false}
                />
            </div>

            {(title || meta) && (
                <div className="media-card-text">
                    {title && (
                        <h3 className="media-card-title">
                            {title}
                        </h3>
                    )}

                    {meta && (
                        <p className="media-card-meta">
                            {meta}
                        </p>
                    )}
                </div>
            )}
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

export default MediaCard
