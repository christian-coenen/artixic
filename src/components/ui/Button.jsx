import './Button.css'

const Button = ({
    children,
    variant = 'bordered',
    as: Element = 'button',
    type = 'button',
    className = '',
    icon,
    iconPosition = 'left',
    layout = 'horizontal',
    description,
    fullWidth = false,
    padding = '0.5rem 1.25rem',
    ...props
}) => {
    const buttonClassName = [
        'button',
        `button-${variant}`,
        `button-layout-${layout}`,
        `button-icon-${iconPosition}`,
        fullWidth && 'button-full-width',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <Element
            className={buttonClassName}
            style={{
                ...(props.style ?? {}),
                ...(padding ? { padding } : {}),
            }}
            type={Element === 'button' ? type : undefined}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="button-icon">{icon}</span>
            )}

            {icon && iconPosition === 'center' && (
                <span className="button-icon">{icon}</span>
            )}

            <span className="button-label">{children}</span>

            {icon && iconPosition === 'right' && (
                <span className="button-icon">{icon}</span>
            )}

            {description && (
                <span className="button-description">
                    {description}
                </span>
            )}
        </Element>
    )
}

export default Button
