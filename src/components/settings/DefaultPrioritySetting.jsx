import { useSettings } from '../../hooks/useSettings'
import { PRIORITY_OPTIONS } from '../../utils/constants'
import SegmentedControl from '../ui/SegmentedControl'
import SettingRow from './SettingRow'

export default function DefaultPrioritySetting() {
  const { settings, updateSetting } = useSettings()
  return (
    <SettingRow label="Default priority" description="Pre-selected when you create a new task.">
      <SegmentedControl
        label="Default priority"
        options={PRIORITY_OPTIONS}
        value={settings.defaultPriority}
        onChange={(v) => updateSetting('defaultPriority', v)}
      />
    </SettingRow>
  )
}