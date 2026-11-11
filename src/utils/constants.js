export const STORAGE_KEYS = {
  tasks: 'todo-app:v1',
  categories: 'todo-app:categories',
  settings: 'todo-app:settings',
}

export const PRIORITIES = ['low', 'medium', 'high']

export const PRIORITY_RANK = { high: 0, medium: 1, low: 2 }

export const PRIORITY_LABELS = { low: 'Low', medium: 'Medium', high: 'High' }

export const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export const STATUS_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
  { value: 'overdue', label: 'Overdue' },
]

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest first' },
  { value: 'oldest', label: 'Oldest first' },
  { value: 'priority', label: 'Priority' },
  { value: 'due', label: 'Due date' },
]

// Value used in filters/URLs for tasks without a category.
export const NO_CATEGORY = 'none'

export const DEFAULT_CATEGORIES = [
  { id: 'cat-personal', name: 'Personal' },
  { id: 'cat-work', name: 'Work' },
  { id: 'cat-study', name: 'Study' },
]

export const DEFAULT_SETTINGS = {
  defaultPriority: 'medium',
  confirmDelete: true,
}