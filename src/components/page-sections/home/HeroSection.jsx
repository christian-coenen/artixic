import { NavLink } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-inner">
                <h1 className="hero-title">
                    Welcome to ARTIXIC
                </h1>

                <span className="hero-subtitle">
                    Curated contemporary artworks
                </span>

                <div className="hero-cta">
                    <NavLink className="hero-cta-link">Explore artworks</NavLink>
                </div>

            </div>
        </section>
    )
}

export default HeroSection
