import { Menu } from 'lucide-react'
import './HamburgerButton.css'

const HamburgerButton = ({ isOpen, onToggle }) => {
    return (
        <button
            type='button'
            className='hamburger-button'
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label='Toggle navigation'
        >
            <Menu className='hamburger-button-icon' />
        </button>
    )
}

export default HamburgerButton
