import { useSyncExternalStore } from 'react'
import { getStorageFailed, subscribeStorageStatus } from '../utils/storageStatus'

export function useStorageFailed() {
  return useSyncExternalStore(subscribeStorageStatus, getStorageFailed, () => false)
}