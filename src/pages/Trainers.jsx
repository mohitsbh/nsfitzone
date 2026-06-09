import { Link } from 'react-router-dom'

const trainers = [
  { img: '/images/a.jpg', name: 'Vishal L.', role: 'BODYBUILDING SPECIALIST', certs: ['Strength', 'Muscle Gain'] },
  { img: '/images/b.jpg', name: 'Dinesh P.', role: 'BODYBUILDING SPECIALIST', certs: ['Muscle Building', 'Bulking'] },
  { img: '/images/c.jpg', name: 'Kartik C.', role: 'BODYBUILDING SPECIALIST', certs: ['Fat Loss', 'Toning'] },
  { img: '/images/d.jpg', name: 'Mahesh H.', role: 'YOGA INSTRUCTOR', certs: ['Yoga', 'Flexibility'] },
  { img: '/images/e.jpg', name: 'Jon K.', role: 'YOGA INSTRUCTOR', certs: ['Power Yoga', 'Meditation'] },
  { img: '/images/f.jpg', name: 'Raj R.', role: 'FITNESS COACH', certs: ['Functional', 'HIIT'] },
]

export default function Trainers() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Our Team</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Professional Trainers</h1>
          <p className="text-on-surface-variant font-body mt-4 max-w-xl mx-auto">All our staff are professionally qualified with years of experience</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map(t => (
            <div key={t.name} className="group relative overflow-hidden bg-surface-container-low">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={`Trainer ${t.name}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-100" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h4 className="font-display text-2xl text-white">{t.name}</h4>
                <p className="text-electric-blue font-body text-[10px] uppercase tracking-widest mb-2">{t.role}</p>
                <div className="flex gap-2 flex-wrap">
                  {t.certs.map(c => (
                    <span key={c} className="bg-white/10 px-2 py-1 text-[8px] text-on-surface-variant uppercase font-body">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
