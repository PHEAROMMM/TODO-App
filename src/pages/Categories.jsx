import CategoryForm from '../components/categories/CategoryForm'
import CategoryList from '../components/categories/CategoryList'
import PageLayout from '../components/layout/PageLayout'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import { useTodosContext } from '../hooks/useTodosContext'

export default function Categories() {
  const { tasks, categories, addCategory, updateCategory, removeCategory } = useTodosContext()

  return (
    <PageLayout
      railLabel="New category"
      rail={
        <Section title="New category">
          <CategoryForm submitLabel="Add category" onSubmit={addCategory} resetOnSubmit idPrefix="new-category" />
        </Section>
      }
    >
      <PageHeader title="Categories" subtitle="Group tasks by course or area." />
      <CategoryList
        categories={categories}
        tasks={tasks}
        onUpdate={updateCategory}
        onDelete={removeCategory}
      />
    </PageLayout>
  )
}