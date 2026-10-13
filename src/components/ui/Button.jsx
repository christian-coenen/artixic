import './Button.css'

const Button = ({
    children,
    variant = 'bordered',
    as: Element = 'button',
    type = 'button',
    className = '',
    icon,
    iconPosition = 'left',
    ...props
}) => {
    const buttonClassName = [
        'button',
        `button-${variant}`,
        className,
    ]
        .filter(Boolean)
        .join(' ')
    
    return (
        <Element
            className={buttonClassName}
            type={Element === 'button' ? type : undefined}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="button-icon">{icon}</span>
            )}

            {children}

            {icon && iconPosition === 'right' && (
                <span className="button-icon">{icon}</span>
            )}
        </Element>
    )
}

export default Button
