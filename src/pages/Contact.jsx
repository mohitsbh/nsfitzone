import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('https://formspree.io/f/xvgojrbq', {
        method: 'POST', body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
      if (res.ok) setSent(true)
      else alert('Please email us at nsfitzone@gmail.com')
    } catch { alert('Please email us at nsfitzone@gmail.com') }
    finally { setSending(false) }
  }

  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Contact</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Contact Us</h1>
          <p className="text-on-surface-variant font-body mt-4">Ready to start your fitness journey? Get in touch today</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* FORM */}
          <div className="bg-surface-container-low border border-outline-variant/30 p-8 md:p-10">
            {!sent ? (
              <>
                <h3 className="font-display text-headline-md text-white uppercase mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    ['name', 'Full Name', 'text', 'Your full name'],
                    ['email', 'Email Address', 'email', 'your@email.com'],
                  ].map(([id, label, type, ph]) => (
                    <div key={id}>
                      <label htmlFor={id} className="font-body text-label-bold text-on-surface-variant uppercase tracking-widest block mb-2">{label} *</label>
                      <input type={type} id={id} name={id} required placeholder={ph}
                        className="w-full px-4 py-3.5 bg-surface-container border border-outline-variant text-on-surface text-sm outline-none transition-all focus:border-electric-blue focus:shadow-[0_0_0_2px_rgba(0,229,255,0.2)]" />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="subject" className="font-body text-label-bold text-on-surface-variant uppercase tracking-widest block mb-2">Subject *</label>
                    <select id="subject" name="subject" required
                      className="w-full px-4 py-3.5 bg-surface-container border border-outline-variant text-on-surface text-sm outline-none transition-all focus:border-electric-blue appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c4c7c7' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")", backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}>
                      <option value="" className="bg-surface-container">Select</option>
                      {['Membership Inquiry', 'Personal Training', 'Group Classes', 'Diet Consultation', 'General Feedback', 'Other'].map(o => (
                        <option key={o} className="bg-surface-container">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-body text-label-bold text-on-surface-variant uppercase tracking-widest block mb-2">Message *</label>
                    <textarea id="message" name="message" required placeholder="How can we help you?"
                      className="w-full px-4 py-3.5 bg-surface-container border border-outline-variant text-on-surface text-sm outline-none transition-all focus:border-electric-blue resize-y min-h-[120px]" />
                  </div>
                  <button type="submit" disabled={sending}
                    className="w-full bg-electric-blue text-black font-body text-label-bold uppercase tracking-widest px-10 py-5 electric-glow-hover transition-all active:scale-95">
                    {sending ? 'SENDING...' : 'SEND MESSAGE'} <span className="material-symbols-outlined align-middle text-lg ml-1">send</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <span className="material-symbols-outlined text-6xl text-success">check_circle</span>
                <h4 className="font-display text-headline-md text-white uppercase mt-4">Message Sent!</h4>
                <p className="text-on-surface-variant font-body mt-2">We'll get back within 24 hours. Call +91 9987493515 for urgent inquiries.</p>
              </div>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-6">
            {[
              { icon: 'location_on', title: 'Visit Us', desc: 'Taskar House, Shop No. 3, Ram Maruti Road, Thane (W) 400 602, India' },
              { icon: 'call', title: 'Call Us', desc: '+91 9987493515\n+91 97020 40930\n+91 9324244770' },
              { icon: 'mail', title: 'Email Us', desc: 'nsfitzone@gmail.com' },
            ].map(item => (
              <div key={item.title} className="bg-surface-container-low border border-outline-variant/30 p-7 flex gap-4 items-start hover:border-electric-blue/30 transition-all">
                <span className="material-symbols-outlined text-electric-blue text-3xl">{item.icon}</span>
                <div>
                  <h4 className="font-body text-label-bold text-white uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant font-body text-sm whitespace-pre-line">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-surface-container-low border border-outline-variant/30 p-7">
              <h3 className="font-display text-headline-md text-white uppercase mb-5">Gym Timings</h3>
              <div className="space-y-4 mb-6">
                <div><h4 className="font-body text-label-bold text-electric-blue uppercase tracking-widest mb-1">Monday - Saturday</h4><p className="text-on-surface-variant font-body text-sm">05:30 - 23:00</p></div>
                <div><h4 className="font-body text-label-bold text-electric-blue uppercase tracking-widest mb-1">Sunday</h4><p className="text-on-surface-variant font-body text-sm">6:00 - 12:00</p></div>
              </div>

              <div className="w-full aspect-[16/9] overflow-hidden mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15072.571544748156!2d72.96346244702151!3d19.188960514446233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9bb8f4d5ec7%3A0x9fbca0f6b52f0ca4!2sNS%20FITZONE!5e0!3m2!1sen!2sin!4v1711655437948!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location" className="w-full h-full" />
              </div>
              <a href="https://www.google.com/maps/place/NS+FITZONE/@19.1889605,72.9634624,15z/" target="_blank" rel="noopener" className="text-electric-blue font-body text-sm hover:underline inline-flex items-center gap-2 mb-5">
                <span className="material-symbols-outlined text-lg">map</span> Click here to see inside the gym on Google Maps
              </a>

              <h4 className="font-body text-label-bold text-white uppercase tracking-widest mb-3">Owners</h4>
              <p className="text-on-surface-variant font-body text-sm mb-5">Nitin Sawardekar<br />Sandeep Sawardekar<br />Mangesh Sawardekar</p>

              <h4 className="font-body text-label-bold text-white uppercase tracking-widest mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=61558260086569" target="_blank" rel="noopener" aria-label="Facebook" className="w-11 h-11 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-electric-blue/30 transition-all group">
                  <svg className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/ns_fitzone/" target="_blank" rel="noopener" aria-label="Instagram" className="w-11 h-11 border border-outline-variant flex items-center justify-center hover:text-primary hover:border-electric-blue/30 transition-all group">
                  <svg className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
