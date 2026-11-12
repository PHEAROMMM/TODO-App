import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/alfa-slab-one/400.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/600.css'
import './styles/index.css'
import App from './App.jsx'
import SettingsProvider from './context/SettingsProvider.jsx'
import TodosProvider from './context/TodosProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </SettingsProvider>
  </StrictMode>,
)