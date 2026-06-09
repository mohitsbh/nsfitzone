import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programmes from './pages/Programmes'
import Gallery from './pages/Gallery'
import Timetable from './pages/Timetable'
import Trainers from './pages/Trainers'
import Contact from './pages/Contact'
import ClassSingle from './pages/ClassSingle'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/health-programmes" element={<Programmes />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/class-single" element={<ClassSingle />} />
      </Routes>
      <Footer />
    </div>
  )
}
