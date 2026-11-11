import { NO_CATEGORY, PRIORITY_RANK } from './constants'
import { isOverdue } from './dates'

export function matchesStatus(task, status) {
  switch (status) {
    case 'active':
      return !task.done
    case 'completed':
      return task.done
    case 'overdue':
      return isOverdue(task.due, task.done)
    default:
      return true
  }
}

export function matchesCategory(task, category) {
  if (!category) return true
  if (category === NO_CATEGORY) return !task.categoryId
  return task.categoryId === category
}

export function matchesQuery(task, query) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  return task.text.toLowerCase().includes(q) || (task.notes || '').toLowerCase().includes(q)
}

export function filterTasks(tasks, { status = 'all', query = '', category = '' } = {}) {
  return tasks.filter(
    (t) => matchesStatus(t, status) && matchesCategory(t, category) && matchesQuery(t, query),
  )
}

const NO_DUE = '9999-99-99'

export function sortTasks(tasks, sort = 'newest') {
  const list = [...tasks]
  switch (sort) {
    case 'oldest':
      return list.sort((a, b) => a.createdAt - b.createdAt)
    case 'priority':
      return list.sort(
        (a, b) => PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] || b.createdAt - a.createdAt,
      )
    case 'due':
      return list.sort((a, b) => (a.due || NO_DUE).localeCompare(b.due || NO_DUE))
    default:
      return list.sort((a, b) => b.createdAt - a.createdAt)
  }
}

// What to do next: earliest due date first (so overdue leads), then priority, then oldest.
export function rankNext(tasks) {
  return tasks
    .filter((t) => !t.done)
    .sort(
      (a, b) =>
        (a.due || NO_DUE).localeCompare(b.due || NO_DUE) ||
        PRIORITY_RANK[a.priority] - PRIORITY_RANK[b.priority] ||
        a.createdAt - b.createdAt,
    )
}

export function countByStatus(tasks) {
  return {
    all: tasks.length,
    active: tasks.filter((t) => !t.done).length,
    completed: tasks.filter((t) => t.done).length,
    overdue: tasks.filter((t) => isOverdue(t.due, t.done)).length,
  }
}

export function completionPercent(tasks) {
  if (tasks.length === 0) return 0
  return Math.round((tasks.filter((t) => t.done).length / tasks.length) * 100)
}

// One row per category (plus "Uncategorized" when needed) with total/done counts.
export function countByCategory(tasks, categories) {
  const rows = categories.map((c) => {
    const own = tasks.filter((t) => t.categoryId === c.id)
    return { id: c.id, name: c.name, total: own.length, done: own.filter((t) => t.done).length }
  })
  const known = new Set(categories.map((c) => c.id))
  const loose = tasks.filter((t) => !t.categoryId || !known.has(t.categoryId))
  if (loose.length > 0) {
    rows.push({
      id: NO_CATEGORY,
      name: 'Uncategorized',
      total: loose.length,
      done: loose.filter((t) => t.done).length,
    })
  }
  return rows
}