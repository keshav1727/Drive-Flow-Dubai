import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Category from './pages/Category'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dubai-sand to-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
