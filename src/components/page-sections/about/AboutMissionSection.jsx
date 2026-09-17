import { Telescope, Images, Wind } from 'lucide-react'
import FeatureCard from '../../ui/cards/FeatureCard'
import './AboutMissionSection.css'

const AboutMissionSection = () => {
    return (
        <section className="about-mission-section">
            <div className="about-mission-inner">
                <p className="about-mission-eyebrow">
                    Mission
                </p>

                <h2 className="about-mission-header">
                    Easier to discover and experience
                </h2>

                <p className="about-mission-body">
                    ARTIXIC brings artworks and collections together in a digital exhibition space where artists can present their work and visitors can explore it without barriers. We aim to create a platform where discovery, context, and curation come together.
                </p>

                <ul className="about-mission-list">
                    <FeatureCard
                        icon={<Telescope size={100} strokeWidth={1.25} />}
                        title="Discovery"
                        description="Explore works from artists around the world."
                    />
                    <FeatureCard
                        icon={<Images size={100} strokeWidth={1.25} />}
                        title="Curation"
                        description="Explore works from artists around the world."
                    />
                    <FeatureCard
                        icon={<Wind size={100} strokeWidth={1.25} />}
                        title="Tranquility"
                        description="A quiet space for exploration."
                    />
                </ul>
            </div>
        </section>
    )
}

export default AboutMissionSection
