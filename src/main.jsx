
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter basename="/Harsh_Portfolio_V25_01">
      <App />
    </BrowserRouter>
  </HelmetProvider>
)
