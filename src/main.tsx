import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { trackWebVitals } from './utils'

// Track performance metrics in development
if (import.meta.env.DEV) {
  trackWebVitals();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
