import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown, Search, Check } from 'lucide-react'
import './SearchableDropdown.css'

const SearchableDropdown = ({
    id,
    options = [],
    value = '',
    onChange,
    placeholder = 'Select an option',
    searchPlaceholder = 'Search...',
    emptyMessage = 'No results found',
    className = '',
}) => {
    const generatedId = useId()
    const dropdownId = id ?? generatedId
    const menuId = `${dropdownId}-menu`

    const rootRef = useRef(null)
    const triggerRef = useRef(null)
    const searchRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')

    const selectedOption = options.find((option) => option.value === value)

    const normalizedQuery = query.trim().toLowerCase()
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(normalizedQuery),
    )

    const open = () => {
        setQuery('')
        setIsOpen(true)
    }

    const close = (returnToTrigger = false) => {
        setIsOpen(false)

        if (returnToTrigger) {
            triggerRef.current?.focus({ preventScroll: true })
            triggerRef.current?.scrollIntoView({ block: 'nearest' })
        }
    }

    const handleSelect = (option) => {
        onChange?.(option.value)
        close(true)
    }

    const handleMenuKeyDown = (event) => {
        if (event.key === 'Escape') close(true)
    }

    useEffect(() => {
        if (!isOpen) return

        searchRef.current?.focus({ preventScroll: true })
        triggerRef.current?.scrollIntoView({ block: 'start' })

        const handlePointerDown = (event) => {
            if (!rootRef.current?.contains(event.target)) setIsOpen(false)
        }

        document.addEventListener('pointerdown', handlePointerDown)

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown)
        }
    }, [isOpen])

    return (
        <div
            ref={rootRef}
            className={['searchable-dropdown', className]
                .filter(Boolean)
                .join(' ')}
        >
            <button
                ref={triggerRef}
                id={dropdownId}
                type="button"
                className="searchable-dropdown-trigger"
                aria-controls={menuId}
                aria-expanded={isOpen}
                onClick={() => (isOpen ? close() : open())}
            >
                <span
                    className={
                        selectedOption
                            ? 'searchable-dropdown-value'
                            : 'searchable-dropdown-placeholder'
                    }
                >
                    {selectedOption?.label ?? placeholder}
                </span>

                <ChevronDown
                    className={`searchable-dropdown-chevron ${isOpen ? 'open' : ''}`}
                    size={24}
                    aria-hidden="true"
                />
            </button>

            <div
                id={menuId}
                className={`searchable-dropdown-menu ${isOpen ? 'open' : ''}`}
                onKeyDown={handleMenuKeyDown}
            >
                <div className="searchable-dropdown-header">
                    <div className="searchable-dropdown-search">
                        <Search
                            className="searchable-dropdown-search-icon"
                            aria-hidden="true"
                        />

                        <input
                            ref={searchRef}
                            type="text"
                            className="searchable-dropdown-search-input"
                            placeholder={searchPlaceholder}
                            aria-label={searchPlaceholder}
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                </div>

                <div className="searchable-dropdown-options">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => {
                            const isSelected = option.value === value

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    className={[
                                        'searchable-dropdown-option',
                                        isSelected &&
                                            'searchable-dropdown-option--selected',
                                    ]
                                        .filter(Boolean)
                                        .join(' ')}
                                    aria-current={isSelected || undefined}
                                    onClick={() => handleSelect(option)}
                                >
                                    <span>{option.label}</span>

                                    {isSelected && (
                                        <Check
                                            className="searchable-dropdown-check"
                                            size={24}
                                            aria-hidden="true"
                                        />
                                    )}
                                </button>
                            )
                        })
                    ) : (
                        <p className="searchable-dropdown-empty" role="status">
                            {emptyMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchableDropdown
