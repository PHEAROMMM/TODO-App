import DateInput from '../ui/DateInput'
import FormField from '../ui/FormField'
import TextButton from '../ui/TextButton'

export default function DueDateField({ value, onChange }) {
  return (
    <FormField label="Due date" htmlFor="task-due">
      <div className="field__inline">
        <DateInput id="task-due" value={value} onChange={(e) => onChange(e.target.value)} />
        {value && <TextButton onClick={() => onChange('')}>Clear</TextButton>}
      </div>
    </FormField>
  )
}