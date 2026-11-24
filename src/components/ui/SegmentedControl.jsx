import './SegmentedControl.css'

const SegmentedControl = ({
    options,
    value,
    onChange,
    label,
    className = ''
}) => {
    const selectedIndex = Math.max(
        0,
        options.findIndex((option) => option.value === value),
    )

    const componentClassName = [
        'segmented-control',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={componentClassName}
            role="group"
            aria-label={label}
            style={{
                '--segment-count': options.length,
                '--segment-index': selectedIndex,
            }}
        >
            <span
                className="segmented-control-indicator"
                aria-hidden="true"
            />

            {options.map((option) => {
                const isSelected = value === option.value

                return (
                    <button
                        key={option.value}
                        className="segmented-control-option"
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                            if (!isSelected) onChange(option.value)
                        }}
                    >
                        {option.label}
                    </button>
                )
            })}
        </div>
    )
}

export default SegmentedControl
