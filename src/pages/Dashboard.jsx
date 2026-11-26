import { useMemo } from 'react'
import AfterThat from '../components/dashboard/AfterThat'
import CategoryBreakdown from '../components/dashboard/CategoryBreakdown'
import NextUp from '../components/dashboard/NextUp'
import ProgressSummary from '../components/dashboard/ProgressSummary'
import Totals from '../components/dashboard/Totals'
import PageLayout from '../components/layout/PageLayout'
import { useTodosContext } from '../hooks/useTodosContext'
import { completionPercent, countByCategory, countByStatus, rankNext } from '../utils/tasks'

export default function Dashboard() {
  const { tasks, categories, toggleTask } = useTodosContext()

  const counts = useMemo(() => countByStatus(tasks), [tasks])
  const percent = useMemo(() => completionPercent(tasks), [tasks])
  const ranked = useMemo(() => rankNext(tasks), [tasks])
  const rows = useMemo(() => countByCategory(tasks, categories), [tasks, categories])

  const next = ranked[0]
  const category = next ? categories.find((c) => c.id === next.categoryId) : undefined

  return (
    <PageLayout
      railSide="left"
      railLabel="Summary"
      // With no tasks the summary would be a column of zeros; the empty state carries the one action.
      rail={
        counts.all > 0 ? (
          <>
            <Totals counts={counts} />
            <ProgressSummary percent={percent} done={counts.completed} total={counts.all} />
            <CategoryBreakdown rows={rows} />
          </>
        ) : undefined
      }
    >
      <NextUp task={next} category={category} counts={counts} onDone={toggleTask} />
      <AfterThat tasks={ranked.slice(1, 6)} />
    </PageLayout>
  )
}