import { Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Categories from './pages/Categories'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'
import TaskForm from './pages/TaskForm'
import Tasks from './pages/Tasks'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
      <Route index element={<Dashboard />} />
      <Route path ="tasks" element={<Tasks />} />
      <Route path ="tasks/new" element={<TaskForm />} />
      <Route path ="tasks/:id/edit" element={<TaskForm />}/>
      <Route path ="categories" element={<Categories />}/>
      <Route path ="settings" element={<Settings />}/>
      <Route path ="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}