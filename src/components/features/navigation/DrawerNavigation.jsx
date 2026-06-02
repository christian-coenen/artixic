import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './DrawerNavigation.css'

const DrawerNavigation = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        const handleResize = () => {
            if (window.innerWidth >= 881 && isOpen) {
                onClose()
            }
        }

        window.addEventListener('resize', handleResize)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('resize', handleResize)
        }
    }, [isOpen, onClose])

    return (
        <div className={`drawer-navigation ${isOpen ? "is-open" : ""}`}>
            <div className="drawer-navigation-overlay" onClick={onClose} />

            <div className="drawer-navigation-panel">
                <div
                    className="drawer-navigation-close-panel"
                >
                    <button
                        type="button"
                        className="drawer-navigation-close-button"
                        onClick={onClose}
                        aria-label="Close drawer navigation"
                    >
                        <X className="drawer-navigation-close-button-icon" />
                    </button>
                </div>

                <ul className="drawer-navigation-list">
                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/artworks"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Artworks
                        </NavLink>
                    </li>

                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/collections"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            Collections
                        </NavLink>
                    </li>

                    <li className="drawer-navigation-link">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `drawer-navigation-link ${isActive ? 'current' : ''}`
                            }
                            onClick={onClose}
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerNavigation
