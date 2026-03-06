import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './DrawerNavigation.css'

const DrawerNavigation = ({ isOpen, onClose }) => {
    return (
        <div className={`drawer-navigation ${isOpen ? 'is-open' : ''}`}>
            <div className='drawer-navigation-overlay' onClick={onClose} />

            <div className='drawer-navigation-panel'>
                <div
                    className='drawer-navigation-close-menu'
                    onClick={onClose}
                >
                    <X
                        className='drawer-navigation-close-menu-icon'
                    />

                </div>

                <ul className='drawer-navigation-list'>
                    <li className='drawer-navigation-link'>
                        <NavLink
                            to='/home'
                            className={({ isActive }) =>
                                isActive
                                    ? "drawer-navigation-link current"
                                    : "drawer-navigation-link"
                            }
                            onClick={onClose}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink
                            to='/art'
                            className={({ isActive }) =>
                                isActive
                                    ? "drawer-navigation-link current"
                                    : "drawer-navigation-link"
                            }
                            onClick={onClose}
                        >
                            Art
                        </NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink
                            to='/collections'
                            className={({ isActive }) =>
                                isActive
                                    ? "drawer-navigation-link current"
                                    : "drawer-navigation-link"
                            }
                            onClick={onClose}
                        >
                            Collections
                        </NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive
                                    ? "drawer-navigation-link current"
                                    : "drawer-navigation-link"
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
