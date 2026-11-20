import FormField from '../ui/FormField'
import TextInput from '../ui/TextInput'

export default function TitleField({ value, onChange, error }) {
  return (
    <FormField label="Title" htmlFor="task-title" error={error}>
      <TextInput
        id="task-title"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="What needs doing?"
        aria-invalid={Boolean(error)}
        autoFocus
      />
    </FormField>
  )
}