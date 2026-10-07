import './Badge.css'

const Badge = ({ children, as: Element = 'span' }) => {
    return (
        <Element className="badge">
            {children}
        </Element>
    )
}

export default Badge
