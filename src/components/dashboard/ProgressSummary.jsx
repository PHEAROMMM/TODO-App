import ProgressBar from '../ui/ProgressBar'
import Section from '../ui/Section'

export default function ProgressSummary({ percent, done, total }) {
  return (
    <Section title="Progress">
      <p className="progress-figure">{percent}%</p>
      <ProgressBar value={percent} label="Tasks completed" />
      <p className="progress-caption">
        {total === 0 ? 'Nothing to measure yet.' : `${done} of ${total} done`}
      </p>
    </Section>
  )
}