import { CircleAlert } from 'lucide-react'
import './FormError.css'

const FormError = ({ children, id, className = '' }) => {
    if (!children) return null

    return (
        <p
            id={id}
            className={['form-error', className].filter(Boolean).join(' ')}
            role="alert"
        >
            <CircleAlert
                className="form-error-icon"
                size={20}
                aria-hidden="true"
            />
            <span>{children}</span>
        </p>
    )
}

export default FormError
