import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 py-stack-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="NS FITZONE" className="h-10 w-auto" />
            <span className="font-display text-headline-md text-primary">NS FITZONE</span>
          </Link>
          <p className="text-on-surface-variant font-body text-body-md text-sm">Engineered for elite performance. Thane West's premier destination for serious transformation.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61558260086569" target="_blank" rel="noopener" aria-label="Facebook" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-electric-blue/40 transition-all group">
              <svg className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/ns_fitzone/" target="_blank" rel="noopener" aria-label="Instagram" className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-electric-blue/40 transition-all group">
              <svg className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-body text-label-bold text-on-surface uppercase tracking-widest">NAVIGATION</h5>
          <ul className="space-y-3">
            {[
              ['Home', '/'], ['Programs', '/health-programmes'], ['Gallery', '/gallery'], ['Timetable', '/timetable'],
            ].map(([l, t]) => (
              <li key={t}><Link to={t} className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-md text-sm">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-body text-label-bold text-on-surface uppercase tracking-widest">MORE</h5>
          <ul className="space-y-3">
            {[
              ['About', '/about-us'], ['Trainers', '/trainers'], ['Contact', '/contact'],
            ].map(([l, t]) => (
              <li key={t}><Link to={t} className="text-on-surface-variant hover:text-primary transition-colors font-body text-body-md text-sm">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h5 className="font-body text-label-bold text-on-surface uppercase tracking-widest">HOURS</h5>
          <div className="space-y-2 text-sm text-on-surface-variant font-body">
            <p><span className="text-on-surface font-bold">Mon-Sat:</span> 05:30 - 23:00</p>
            <p><span className="text-on-surface font-bold">Sunday:</span> 6:00 - 12:00</p>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant font-body text-[10px] uppercase tracking-widest">{'\u00A9'} {year} NS FITZONE. ENGINEERED FOR ELITE PERFORMANCE.</p>
          <p className="text-on-surface-variant font-body text-[10px] uppercase tracking-widest">Design by <a href="https://techuniverse.com" target="_blank" rel="noopener" className="text-electric-blue hover:underline">TechUniverse</a></p>
        </div>
      </div>
    </footer>
  )
}
