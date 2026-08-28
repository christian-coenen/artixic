import { NavLink } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-background" />

            <div className="hero-inner">
                <p className="hero-eyebrow">
                    Curated contemporary artworks
                </p>

                <h1 className="hero-title">
                    Welcome to ARTIXIC
                </h1>

                <p className="hero-body">
                    Contemporary artworks brought together in a digital exhibition space.
                </p>

                <div className="hero-cta">
                    <NavLink
                        to="/artworks"
                        className="hero-cta-link"
                    >
                        Explore artworks
                    </NavLink>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
