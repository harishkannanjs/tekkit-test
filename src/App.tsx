import { useEffect } from 'react'
import Home from './pages/Home'

function App() {
  useEffect(() => {
    // Apply html attributes
    const htmlAttrs = {}
    Object.entries(htmlAttrs).forEach(([key, value]) => {
      const attrValue = Array.isArray(value) ? value.join(' ') : value as string
      document.documentElement.setAttribute(key, attrValue)
    })

    // Apply body attributes
    const bodyAttrs = {}
    Object.entries(bodyAttrs).forEach(([key, value]) => {
      const attrValue = Array.isArray(value) ? value.join(' ') : value as string
      document.body.setAttribute(key, attrValue)
    })
    
    // Cleanup if needed (though usually we want these to stay)
    return () => {
      Object.keys(htmlAttrs).forEach(key => document.documentElement.removeAttribute(key))
      Object.keys(bodyAttrs).forEach(key => document.body.removeAttribute(key))
    }
  }, [])

  return <Home />
}

export default App