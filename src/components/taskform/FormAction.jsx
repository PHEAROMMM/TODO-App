import Button from '../ui/Button'
import LinkButton from '../ui/LinkButton'

export default function FormActions({ submitLabel, cancelTo }) {
  return (
    <div className="form-actions">
      <Button type="submit">{submitLabel}</Button>
      <LinkButton to={cancelTo} variant="outline">
        Cancel
      </LinkButton>
    </div>
  )
}