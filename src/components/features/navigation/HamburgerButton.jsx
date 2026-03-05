import { Menu } from 'lucide-react'
import './HamburgerButton.css'

const HamburgerButton = ({ isOpen, onToggle }) => {
    return (
        <div className='hamburger-button'>
            <button
                type='button'
                className='hamburger-button-button'
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-label='Toggle navigation'
            >
                <Menu color='#3C414D' />
            </button>
        </div>
    )
}

export default HamburgerButton
