import { useState } from 'react'
import Button from '../ui/Button'
import FormField from '../ui/FormField'
import TextInput from '../ui/TextInput'

// onSubmit({ name }) must return an error message, or '' on success.
export default function CategoryForm({
  initial,
  submitLabel,
  onSubmit,
  onCancel,
  resetOnSubmit = false,
  idPrefix = 'category',
}) {
  const [name, setName] = useState(initial?.name ?? '')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const result = onSubmit({ name })
    if (result) {
      setError(result)
      return
    }
    setError('')
    if (resetOnSubmit) setName('')
  }

  function handleNameChange(e) {
    setName(e.target.value)
    if (error) setError('')
  }

  return (
    <form className="category-form" onSubmit={handleSubmit} noValidate>
      <FormField label="Name" htmlFor={`${idPrefix}-name`} error={error}>
        <TextInput
          id={`${idPrefix}-name`}
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Auditing"
          aria-invalid={Boolean(error)}
        />
      </FormField>
      <div className="category-form__actions">
        <Button type="submit" variant={onCancel ? 'outline' : 'primary'}>
          {submitLabel}
        </Button>
        {onCancel && (
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </div>
    </form>
  )
}