import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/images/horizontal_slider1.jpg" alt="NS FITZONE Premium Gym" className="w-full h-full object-cover brightness-[35%] grayscale-[20%]" />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-electric-blue/20 text-electric-blue font-body text-label-sm uppercase tracking-widest px-3 py-1.5 mb-6">Since 2009</div>
            <h1 className="font-display text-display-xl text-white uppercase leading-none mb-6">
              Transform Your Body.<br />
              <span className="text-primary">Transform Your Life.</span>
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-xl">
              Thane West's Premium Fitness Destination with World-Class Equipment and Expert Trainers. 6000 sq. ft. of elite training space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-electric-blue text-black font-body text-label-bold uppercase tracking-widest px-10 py-5 electric-glow-hover transition-all active:scale-95 text-center">
                Start Free Trial
              </Link>
              <Link to="/health-programmes" className="border-2 border-white text-white font-body text-label-bold uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-all active:scale-95 text-center">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter text-center">
            {[
              ['15+', 'Years Experience'],
              ['6000+', 'Sq. Ft. Space'],
              ['2000+', 'Happy Members'],
              ['7', 'Days Free Trial'],
            ].map(([n, l]) => (
              <div key={l} className="space-y-2 group">
                <div className="font-display text-[64px] text-white transition-all group-hover:text-electric-blue">{n}</div>
                <div className="font-body text-label-bold text-on-surface-variant uppercase tracking-widest">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - BENTO GRID */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Engineered for Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative h-80 overflow-hidden group">
            <img src="/images/horizontal_slider2.jpg" alt="Modern Equipment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-display text-headline-md text-white uppercase">MODERN EQUIPMENT</h3>
              <p className="text-on-surface-variant max-w-md font-body">World-class Jerai brand equipment engineered for maximum muscle recruitment and safety.</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/30">
            <span className="material-symbols-outlined text-electric-blue text-5xl">military_tech</span>
            <div>
              <h3 className="font-body text-label-bold text-white uppercase mb-2">CERTIFIED TRAINERS</h3>
              <p className="text-on-surface-variant text-sm font-body">All our staff are professionally qualified and highly experienced.</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant/30">
            <span className="material-symbols-outlined text-electric-blue text-5xl">fitness_center</span>
            <div>
              <h3 className="font-body text-label-bold text-white uppercase mb-2">PERSONAL TRAINING</h3>
              <p className="text-on-surface-variant text-sm font-body">One-on-one sessions tailored to your metabolic profile and personal goals.</p>
            </div>
          </div>
          <div className="md:col-span-2 relative h-80 overflow-hidden group">
            <img src="/images/horizontal_slider4.jpg" alt="Elite Recovery Zone" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-display text-headline-md text-white uppercase">ELITE RECOVERY ZONE</h3>
              <p className="text-on-surface-variant max-w-md font-body">Steam, sauna, and massage therapy facilities to ensure optimal performance and longevity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Facilities</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Everything You Need</h2>
          <p className="text-on-surface-variant font-body mt-3 max-w-xl mx-auto">State-of-the-art infrastructure designed to help you achieve your fitness goals.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'exercise', title: 'Exercise', desc: 'Strength & cardio equipment from Jerai covering every muscle group.' },
            { icon: 'nutrition', title: 'Diet', desc: 'Personalized nutrition plans by expert dieticians to match your goals.' },
            { icon: 'spa', title: 'Massage', desc: 'Ayurvedic massage therapy for recovery, stress reduction, and wellness.' },
            { icon: 'yoga_pose', title: 'Yoga', desc: 'Power yoga sessions combining asanas and breathing for mind-body harmony.' },
          ].map(f => (
            <div key={f.title} className="bg-surface-container-high p-8 border border-outline-variant/30 hover:border-electric-blue/40 transition-all group">
              <span className="material-symbols-outlined text-electric-blue text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-display text-headline-md text-white uppercase tracking-tight">{f.title}</h3>
              <p className="text-on-surface-variant text-sm font-body mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <div className="relative overflow-hidden aspect-video border border-outline-variant/30">
            <img src="/images/gallery/2.jpeg" alt="NS FITZONE Testimonial" className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-electric-blue text-black rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-electric-blue">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-body text-label-bold text-on-surface">4.9/5 ON GOOGLE</span>
            </div>
            <blockquote className="font-display text-3xl text-white italic leading-tight">
              "The most premium experience in Thane. From the elite equipment to the personalized attention, NS Fitzone has completely redefined what I expect from a gym."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-primary text-black p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="font-display text-[64px] leading-tight mb-4 uppercase">Ready To Start?</h2>
            <p className="font-body text-body-lg text-black/80">Experience the difference of an elite training ecosystem. Join today.</p>
          </div>
          <div className="relative z-10 flex flex-col gap-4 w-full md:w-auto">
            <Link to="/contact" className="bg-black text-white px-10 py-6 font-body text-label-bold uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 text-center">
              Book Free Trial
            </Link>
            <p className="text-[10px] uppercase font-body text-label-bold text-black/60 text-center">Limited slots available this month</p>
          </div>
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none select-none">
            <span className="font-display text-[200px] text-black">FITZONE</span>
          </div>
        </div>
      </section>
    </>
  )
}
