import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import SmoothScroll from './components/SmoothScroll'
import ProgressBar from './components/ProgressBar'
import ErrorBoundary from './components/ErrorBoundary'
import ResponsiveContainer from './components/ResponsiveContainer'
import EnhancedHome from './pages/EnhancedHome'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Workflow from './pages/Workflow'
import AdminPanel from './components/AdminPanel'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <ErrorBoundary>
      <ResponsiveContainer>
        <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${
          darkMode ? 'bg-dark text-text-light' : 'bg-light text-text-dark'
        }`}>
          <Router>
            <ProgressBar />
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="w-full max-w-full">
              <Routes>
                <Route path="/" element={<EnhancedHome />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/workflow" element={<Workflow />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <SmoothScroll />
          </Router>
        </div>
      </ResponsiveContainer>
    </ErrorBoundary>
  )
}

export default App