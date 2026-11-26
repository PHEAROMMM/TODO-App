import { useSettings } from '../../hooks/useSettings'
import { useTodosContext } from '../../hooks/useTodosContext'
import Button from '../ui/Button'
import SettingRow from './SettingRow'

export default function ResetData() {
  const { resetAll } = useTodosContext()
  const { resetSettings } = useSettings()

  function handleReset() {
    if (!window.confirm('Delete all tasks and reset categories and settings? This cannot be undone.')) return
    resetAll()
    resetSettings()
  }

  return (
    <SettingRow
      label="Reset everything"
      description="Deletes all tasks and restores the default categories and settings."
    >
      <Button variant="danger" onClick={handleReset}>
        Reset
      </Button>
    </SettingRow>
  )
}