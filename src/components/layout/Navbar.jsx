import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../ui/BrandLogo'
import HamburgerButton from '../features/navigation/HamburgerButton'
import DrawerNavigation from '../features/navigation/DrawerNavigation'
import LanguageSwitcher from '../features/language/LanguageSwitcher'
import navigationLinks from '../../data/navigationLinks'
import './Navbar.css'

const Navbar = () => {
    const [isDrawerNavigationOpen, setIsDrawerNavigationOpen] = useState(false)

    const toggleDrawerNavigation = () => {
        setIsDrawerNavigationOpen((prev) => !prev)
    }

    const closeDrawerNavigation = () => {
        setIsDrawerNavigationOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <BrandLogo size={48} />
                    <span className="navbar-logo-text">ARTIXIC</span>
                </Link>

                <div className="navbar-actions">
                    <div className="navbar-navigation">
                        <ul className="navbar-navigation-list">
                            {navigationLinks.map(({ label, to, end }) => (
                                <li
                                    key={to}
                                    className="navbar-navigation-list-item"
                                >
                                    <NavLink
                                        to={to}
                                        end={end}
                                        className={({ isActive }) =>
                                            `navbar-navigation-link ${isActive ? 'current' : ''}`
                                        }
                                    >
                                        {label}
                                    </NavLink>

                                    <span className="navbar-navigation-indicator" />
                                </li>
                            ))}
                        </ul>

                        <div className="navbar-hamburger-button">
                            <HamburgerButton
                                isOpen={isDrawerNavigationOpen}
                                onToggle={toggleDrawerNavigation}
                            />
                        </div>
                    </div>

                    <div className="navbar-language">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>

            <DrawerNavigation
                isOpen={isDrawerNavigationOpen}
                onClose={closeDrawerNavigation}
            />
        </nav>
    )
}

export default Navbar
