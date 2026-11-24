import { useId } from 'react'
import FormError from '../feedback/FormError'
import './TextField.css'

const TextField = ({
    id,
    value = '',
    onChange,
    maxLength,
    showCharacterCount = false,
    size = 'medium',
    multiline = false,
    rows = 4,
    type = 'text',
    className = '',
    error = '',
    ...props
}) => {
    const generatedId = useId()
    const fieldId = id ?? generatedId
    const Control = multiline ? 'textarea' : 'input'

    const characterCount = String(value ?? '').length

    const controlClassName = [
        'text-field-control',
        `text-field-control--${size}`,
        multiline && 'text-field-control--multiline',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    const handleChange = (changeEvent) => {
        onChange?.(changeEvent.currentTarget.value)
    }

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
                onChange={handleChange}
                maxLength={maxLength}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${fieldId}-error` : undefined}
                {...(multiline ? { rows } : { type })}
            />

            {showCharacterCount && Number.isInteger(maxLength) ? (
                <div className="text-field-meta">
                    {error && <FormError>{error}</FormError>}

                    <span className="text-field-counter">
                        {characterCount}/{maxLength}
                    </span>
                </div>
            ) : (
                error && (
                    <FormError>
                        {error}
                    </FormError>
                )
            )}
        </div>
    )
}

export default TextField
