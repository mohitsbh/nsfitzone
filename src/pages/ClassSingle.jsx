import { Link } from 'react-router-dom'

export default function ClassSingle() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Class Detail</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Bodybuilding Class</h1>
          <p className="text-on-surface-variant font-body mt-4">Build muscle, increase strength, transform your physique</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="relative overflow-hidden aspect-[16/10]">
            <img src="/images/horizontal_slider1.jpg" alt="Bodybuilding Class" className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-4 right-4 text-6xl">🏋️</span>
          </div>

          <div>
            <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Class Details</span>
            <h2 className="font-display text-headline-md text-white uppercase mt-2 mb-4">Bodybuilding Training</h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-3">Our bodybuilding classes use world-class Jerai equipment to build lean muscle mass, increase strength, and sculpt your ideal physique.</p>
            <p className="text-on-surface-variant font-body leading-relaxed mb-6">Led by experienced trainers providing personalized guidance on form, technique, and progressive overload.</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Duration', value: '60 min' },
                { label: 'Difficulty', value: 'All Levels' },
                { label: 'Trainer', value: 'Expert Led' },
                { label: 'Equipment', value: 'Jerai' },
              ].map(m => (
                <div key={m.label} className="bg-surface-container-low border border-outline-variant/20 p-4">
                  <div className="font-body text-label-sm text-on-surface-variant uppercase tracking-widest">{m.label}</div>
                  <div className="font-display text-headline-md text-white mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-block bg-electric-blue text-black font-body text-label-bold uppercase tracking-widest px-10 py-5 electric-glow-hover transition-all active:scale-95">
              Book This Class <span className="material-symbols-outlined align-middle text-lg ml-1">trending_flat</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
