import { useId } from 'react'
import './TextField.css'

const TextField = ({
    id,
    value = '',
    onChange,
    maxLength,
    size = 'medium',
    multiline = false,
    rows = 4,
    type = 'text',
    className = '',
    ...props
}) => {
    const generatedId = useId()
    const fieldId = id ?? generatedId
    const Control = multiline ? 'textarea' : 'input'

    const characterCount = String(value ?? '').length

    const controlClassName = [
        'text-field-control',
        `text-field-control--${size}`,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div
            className={[
                'text-field',
                multiline && 'text-field-multiline',
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <Control
                {...props}
                id={fieldId}
                className={controlClassName}
                value={value}
                onChange={onChange}
                maxLength={maxLength}
                {...(multiline ? { rows } : { type })}
            />

            {Number.isInteger(maxLength) && (
                <span className="text-field-counter">
                    {characterCount}/{maxLength}
                </span>
            )}
        </div>
    )
}

export default TextField
