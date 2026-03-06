import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoArtixic from '../../assets/icons/LogoArtixic'
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
        <nav className='navbar'>
            <div className='navbar-inner'>
                <div className='navbar-brand'>
                    <Link to='/home' className='navbar-navigation-item-brand'>
                        <LogoArtixic />
                        <span className='navbar-logo-text'>ARTIXIC</span>
                    </Link>
                </div>

                {/* TODO: rename className below */}
                <div className='navbar-right'>
                    <div className='navbar-navigation'>
                        <ul className='navbar-navigation-list'>
                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/home'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/art'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Art
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/collections'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Collections
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link current"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>

                        <div className='navbar-hamburger-button'>
                            <HamburgerButton
                                isOpen={isDrawerNavigationOpen}
                                onToggle={toggleDrawerNavigation}
                            />
                        </div>
                    </div>

                    <div className='navbar-language'>
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
