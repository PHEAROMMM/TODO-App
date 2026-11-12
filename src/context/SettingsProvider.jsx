import { useCallback, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { DEFAULT_SETTINGS, STORAGE_KEYS } from '../utils/constants'
import { SettingsContext } from './SettingsContext'

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export default function SettingsProvider({ children }) {
  const [stored, setStored] = useLocalStorage(STORAGE_KEYS.settings, DEFAULT_SETTINGS, isPlainObject)

  // Defaults fill in anything missing, so older saved settings keep working.
  const settings = useMemo(() => ({ ...DEFAULT_SETTINGS, ...stored }), [stored])

  const updateSetting = useCallback(
    (key, value) => setStored((prev) => ({ ...DEFAULT_SETTINGS, ...prev, [key]: value })),
    [setStored],
  )

  const resetSettings = useCallback(() => setStored(DEFAULT_SETTINGS), [setStored])

  const value = useMemo(
    () => ({ settings, updateSetting, resetSettings }),
    [settings, updateSetting, resetSettings],
  )

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}