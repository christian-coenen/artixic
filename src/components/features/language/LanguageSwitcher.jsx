import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
    const languageRef = useRef(null)

    const toggleLanguageMenu = () => setIsLanguageMenuOpen(prev => !prev)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setIsLanguageMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className='language-switcher' ref={languageRef}>
            <button
                type='button'
                onClick={toggleLanguageMenu}
                className={`language-switcher-button ${isLanguageMenuOpen ? 'open' : ''}`}
            >
                {/* Currently displays static text */}
                {/* TODO: turn text below to dynamic: default is ENG (English) */}
                ENG
                <ChevronDown 
                    className='language-switcher-icon' 
                />
            </button>



            <div
                className={`language-switcher-dropdown ${isLanguageMenuOpen ? 'open' : ''}`}
            >
                {/* TODO: ensure language options are dynamic */}
                <button
                    type='button'
                    className='language-switcher-dropdown-option'
                >
                    English ENG
                </button>
                <button
                    type='button'
                    className='language-switcher-dropdown-option'
                >
                    Dutch NLD
                </button>
                {/*
                <button
                    type='button'
                    className='language-switcher-dropdown-option'
                >
                    German DEU
                </button>
                <button
                    type='button'
                    className='language-switcher-dropdown-option'
                >
                    Russian RUS
                </button>
                <button
                    type='button'
                    className='language-switcher-dropdown-option'
                >
                    Spanish ESP
                </button>
                */}
            </div>

        </div>
    )
}

export default LanguageSwitcher
