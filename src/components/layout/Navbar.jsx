import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../ui/BrandLogo'
import HamburgerButton from '../features/navigation/HamburgerButton'
import DrawerNavigation from '../features/navigation/DrawerNavigation'
import LanguageSwitcher from '../features/language/LanguageSwitcher'
import './Navbar.css'

const Navbar = () => {
    const [isDrawerNavigationOpen, setIsDrawerNavigationOpen] = useState(false)

    const toggleDrawerNavigation = () => {
        setIsDrawerNavigationOpen(prev => !prev)
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
                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `navbar-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/artworks"
                                    className={({ isActive }) =>
                                        `navbar-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Artworks
                                </NavLink>
                            </li>

                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/collections"
                                    className={({ isActive }) =>
                                        `navbar-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    Collections
                                </NavLink>
                            </li>

                            <li className="navbar-navigation-link">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `navbar-navigation-link ${isActive ? 'current' : ''}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
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
