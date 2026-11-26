import { Link } from 'react-router-dom'
import Section from '../ui/Section'
import TextLink from '../ui/TextLink'

function Row({ label, value, to, className }) {
  return (
    <>
      <dt>
        <Link to={to}>{label}</Link>
      </dt>
      <dd className={className}>{value}</dd>
    </>
  )
}

export default function Totals({ counts }) {
  return (
    <Section title="Totals">
      <dl className="totals">
        <Row label="Active" value={counts.active} to="/tasks?status=active" />
        <Row
          label="Overdue"
          value={counts.overdue}
          to="/tasks?status=overdue"
          className={counts.overdue > 0 ? 'totals__overdue' : undefined}
        />
        <Row label="Completed" value={counts.completed} to="/tasks?status=completed" />
        <Row label="All tasks" value={counts.all} to="/tasks" />
      </dl>
      <TextLink to="/tasks/new">Add a task</TextLink>
    </Section>
  )
}