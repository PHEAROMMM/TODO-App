import Section from '../ui/Section'
import TextLink from '../ui/TextLink'
import AfterRow from './AfterRow'

export default function AfterThat({ tasks }) {
  if (tasks.length === 0) return null
  return (
    <Section title="After that" action={<TextLink to="/tasks?status=active&sort=due">All active tasks</TextLink>}>
      <ul className="after-list">
        {tasks.map((task) => (
          <AfterRow key={task.id} task={task} />
        ))}
      </ul>
    </Section>
  )
}