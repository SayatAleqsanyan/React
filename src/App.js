import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Pages from './pages/Pages'

function App() {
  return (
    <div id="App" className="App w-[100%] h-[100%] dark:bg-gray-800 dark:text-gray-200 bg-gray-300 text-gray-900">
      <Header />
      <Pages />
      <Footer />
    </div>
  )
}

export default App
