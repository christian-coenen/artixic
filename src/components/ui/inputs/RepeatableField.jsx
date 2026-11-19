import { Plus, Minus } from 'lucide-react'
import Button from '../Button'
import FormError from '../feedback/FormError'
import './RepeatableField.css'

const RepeatableField = ({
    FieldComponent,
    values = [''],
    onChange,
    maxFields = 5,
    minFields = 1,
    addLabel = 'Add another field',
    removeLabel = 'Remove field',
    getFieldProps,
    error = '',
}) => {
    const canRemove = values.length > minFields

    const handleChange = (index, value) => {
        onChange?.(
            values.map((currentValue, currentIndex) =>
                currentIndex === index ? value : currentValue,
            ),
        )
    }

    const handleAdd = () => {
        if (values.length >= maxFields) return

        onChange?.([...values, ''])
    }

    const handleRemove = (index) => {
        if (!canRemove) return

        onChange?.(values.filter((_, currentIndex) => currentIndex !== index))
    }

    return (
        <div className="repeatable-field">
            <div className="repeatable-field-list">
                {values.map((value, index) => (
                    <div className="repeatable-field-item" key={index}>
                        <FieldComponent
                            {...getFieldProps?.(index)}
                            value={value}
                            onChange={(eventOrValue) =>
                                handleChange(
                                    index,
                                    eventOrValue?.target
                                        ? eventOrValue.target.value
                                        : eventOrValue,
                                )
                            }
                        />

                        {canRemove && (
                            <button
                                type="button"
                                className="repeatable-field-remove"
                                aria-label={`${removeLabel} ${index + 1}`}
                                onClick={() => handleRemove(index)}
                            >
                                <Minus aria-hidden="true" size={24} />
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {values.length < maxFields && (
                <Button
                    className="repeatable-field-add"
                    icon={<Plus size={24} />}
                    iconPosition="left"
                    onClick={handleAdd}
                >
                    {addLabel}
                </Button>
            )}

            {error && (
                    <FormError>
                        {error}
                    </FormError>
            )}
        </div>
    )
}

export default RepeatableField
