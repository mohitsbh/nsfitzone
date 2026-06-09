import { Link } from 'react-router-dom'

const features = [
  { icon: 'location_on', title: 'Location', desc: '6000 sq. ft. premium gym on Ram Maruti Road, Thane West.' },
  { icon: 'settings', title: 'Equipment', desc: 'World-class Jerai brand equipment for the ultimate training experience.' },
  { icon: 'badge', title: 'Trainers', desc: 'All staff professionally qualified and well experienced.' },
  { icon: 'apartment', title: 'Ambience', desc: 'State-of-the-art infrastructure and high standard interior design.' },
  { icon: 'star', title: 'Quality', desc: 'When you are here, you know you are in good hands.' },
  { icon: 'diversity_3', title: 'Connectivity', desc: 'Grow your network within our premium fitness community.' },
  { icon: 'favorite', title: 'Attitude', desc: 'We thrive on motivation and devotion towards our cause.' },
  { icon: 'check_circle', title: 'Facilities', desc: 'Every possible fitness facility available under one roof.' },
]

const facilityList = [
  'Strength & Cardio fitness machines', 'Advanced Level Personal Training', 'Group Exercise Training',
  'Diet & Personalised Consultation', 'Advanced Inner scan Body Composition Analysis', 'Ayurvedic Massage Therapy',
  'Steam Bath', 'Locker Facility', 'In house Health drinks & juice corner',
  'Centrally Air-conditioned with Anti-bacterial filters', 'WiFi for members', 'Member Grievances Cell',
]

export default function About() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">About NS FITZONE</h1>
          <p className="text-on-surface-variant font-body mt-4 max-w-xl mx-auto">Our story, our philosophy, and our commitment to your fitness journey</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src="/images/trainer-vertical2.jpg" alt="NS FITZONE" className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-6 right-6 text-6xl">🏆</span>
          </div>
          <div>
            <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Our Story</span>
            <h2 className="font-display text-headline-lg text-white uppercase mt-2 mb-6">What is NS FITZONE?</h2>
            <p className="text-on-surface-variant font-body leading-relaxed mb-3">NS FITZONE is a professionally dedicated fitness and health club in Thane West that adheres to its motto <strong className="text-on-surface">"Hamesha FIT raho"</strong> in all aspects. Born with an ambition to spread fitness through a holistic approach, we have been providing health and body building guidance since past 15 years.</p>
            <p className="text-on-surface-variant font-body leading-relaxed">Our philosophy: <strong className="text-on-surface">"No compromise. Just optimise."</strong></p>
          </div>
        </div>

        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Why We Are the Best</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-surface-container-high p-8 border border-outline-variant/30 hover:border-electric-blue/40 transition-all group">
              <span className="material-symbols-outlined text-electric-blue text-4xl mb-4 block">{f.icon}</span>
              <h3 className="font-display text-headline-md text-white uppercase tracking-tight">{f.title}</h3>
              <p className="text-on-surface-variant text-sm font-body mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Facilities</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">What We Offer</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {facilityList.map(item => (
            <div key={item} className="flex items-center gap-4 p-4 bg-surface-container-high border border-outline-variant/20 hover:border-electric-blue/30 transition-all">
              <span className="material-symbols-outlined text-electric-blue">check_circle</span>
              <span className="text-on-surface-variant font-body text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
