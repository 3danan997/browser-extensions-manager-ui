import { useState } from 'react'
import './App.css'
import { ExtensionsGrid } from './components/ExtensionsGrid/ExtensionsGrid'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import cardsData from './data/data.json'

function App() {
    // State for extensions and filter
    const [extensions, setExtensions] = useState(cardsData)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    // Filter extensions by status
    const getFilteredExtensions = () => {
      if(activeFilter === 'all') return extensions
      return extensions.filter(extension => {
        if (activeFilter === 'active') return extension.isActive
        if (activeFilter === 'inactive') return !extension.isActive
        return true
      })
    }

    // Remove an extension from the list
    const removeExtension = (name: string) => {
      const newExtensions = extensions.filter(ext => {
        if(ext.name !== name) return true
      })
      setExtensions(newExtensions)
    }

    // Toggle active/inactive status of an extension
    const toggleActive = (name: string) => {     
      const newExtensions = extensions.map(ext => 
        (ext.name === name) 
          ? {...ext, isActive: !ext.isActive} 
          : ext
      )
      setExtensions(newExtensions)
    }
  return (
    <div className="app">
      {/* Header with theme switcher */}
      <Header />
      {/* Navbar with filter buttons */}
      <Navbar activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      {/* Grid with extension cards */}
      <ExtensionsGrid 
        extensions={getFilteredExtensions()}
        removeExtension={removeExtension}
        toggleActive={toggleActive}
      />
    </div>
  )
}

export default App
