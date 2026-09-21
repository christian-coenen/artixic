import './FeatureCard.css'

const FeatureCard = ({
    icon,
    image,
    title,
    description,
    as: Wrapper = 'li'
}) => {
    return (
        <Wrapper className="feature-card">
            <div className="feature-card-inner">
                {(icon || image) && (
                    <div className="feature-card-icon">
                        {icon ? (
                            icon
                        ) : (
                            <img
                                src={image}
                                alt=""
                                draggable={false}
                            />
                        )}
                    </div>
                )}

                <div className="feature-card-text">
                    {title && (
                        <h3 className="feature-card-title">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="feature-card-description">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Wrapper>
    )
}

export default FeatureCard
