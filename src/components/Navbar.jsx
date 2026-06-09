import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About' },
  { to: '/health-programmes', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/timetable', label: 'Timetable' },
  { to: '/trainers', label: 'Trainers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/20 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="NS FITZONE" className="h-10 w-auto" />
          <span className="font-display text-headline-md text-primary tracking-tighter hidden sm:block">NS FITZONE</span>
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`font-body text-label-bold uppercase tracking-widest transition-colors duration-300 pb-1 ${
                location.pathname === l.to
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-on-primary font-body text-label-bold uppercase tracking-widest px-6 py-3 hover:opacity-80 active:scale-95 transition-all duration-200">
            JOIN NOW
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-2 z-50" aria-label="Toggle menu">
          <span className={`block w-7 h-0.5 bg-on-surface rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-7 h-0.5 bg-on-surface rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-0.5 bg-on-surface rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <div className={`fixed top-0 right-0 h-full w-72 bg-background/98 backdrop-blur-2xl border-l border-outline-variant/30 transform transition-all duration-300 lg:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-1 p-8 pt-28">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`block px-5 py-3.5 font-body text-label-bold uppercase tracking-widest transition-all ${
                  location.pathname === l.to
                    ? 'text-primary bg-white/5'
                    : 'text-on-surface-variant hover:text-primary hover:bg-white/5'
                }`}>
                {l.label}
              </Link>
            ))}
            <div className="mt-6 px-5">
              <Link to="/contact" className="block bg-primary text-on-primary font-body text-label-bold uppercase tracking-widest px-6 py-4 text-center hover:opacity-80 transition-all">
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
