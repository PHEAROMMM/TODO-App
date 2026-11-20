import FormField from '../ui/FormField'
import SelectInput from '../ui/SelectInput'

export default function CategoryField({ value, categories, onChange }) {
  const options = categories.map((c) => ({ value: c.id, label: c.name }))
  // A task may point at a category that no longer exists; show it as "No category".
  const safeValue = categories.some((c) => c.id === value) ? value : ''
  return (
    <FormField label="Category" htmlFor="task-category">
      <SelectInput
        id="task-category"
        value={safeValue}
        options={options}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">No category</option>
      </SelectInput>
    </FormField>
  )
}