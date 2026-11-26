import PageLayout from '../components/layout/PageLayout'
import ConfirmDeleteSetting from '../components/settings/ConfirmDeleteSetting'
import DefaultPrioritySetting from '../components/settings/DefaultPrioritySetting'
import ResetData from '../components/settings/ResetData'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'

export default function Settings() {
  return (
    <PageLayout>
      <PageHeader title="Settings" subtitle="Changes save immediately." />
      <Section title="Tasks">
        <DefaultPrioritySetting />
        <ConfirmDeleteSetting />
      </Section>
      <Section title="Reset" tone="danger">
        <ResetData />
      </Section>
    </PageLayout>
  )
}