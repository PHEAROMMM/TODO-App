import { useSettings } from '../../hooks/useSettings'
import Toggle from '../ui/Toggle'
import SettingRow from './SettingRow'

export default function ConfirmDeleteSetting() {
  const { settings, updateSetting } = useSettings()
  return (
    <SettingRow
      label="Confirm before deleting"
      description="Ask first when deleting a task or clearing completed ones."
      htmlFor="setting-confirm-delete"
    >
      <Toggle
        id="setting-confirm-delete"
        label="Confirm before deleting"
        checked={settings.confirmDelete}
        onChange={(v) => updateSetting('confirmDelete', v)}
      />
    </SettingRow>
  )
}