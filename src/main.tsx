import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import './styles/site.css'  // Bundled CSS from the original site

// Try to load the bundled JS after a short delay to ensure DOM is ready
setTimeout(() => {
  const script = document.createElement('script')
  script.src = '/src/scripts/site.js'
  script.defer = true
  document.body.appendChild(script)
}, 100)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
