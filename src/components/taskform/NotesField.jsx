import FormField from '../ui/FormField'
import TextArea from '../ui/TextArea'

export default function NotesField({ value, onChange }) {
  return (
    <FormField label="Notes" htmlFor="task-notes" hint="Optional details, links or next steps.">
      <TextArea id="task-notes" value={value} onChange={(e) => onChange(e.target.value)} />
    </FormField>
  )
}