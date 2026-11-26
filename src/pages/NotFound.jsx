import PageLayout from '../components/layout/PageLayout'
import EmptyState from '../components/ui/EmptyState'
import LinkButton from '../components/ui/LinkButton'

export default function NotFound() {
  return (
    <PageLayout>
      <EmptyState title="404: page not found" message="Nothing exists at this address.">
        <LinkButton to="/tasks">Go to tasks</LinkButton>
      </EmptyState>
    </PageLayout>
  )
}