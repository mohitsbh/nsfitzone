const programmes = [
  { icon: 'monitor_weight', title: 'Weight Loss / Fat Loss', desc: 'Our in-house developed programme combines proper dieting, relevant exercise, and regular monitoring of fat loss. Designed to reduce fat mass without eroding muscle mass.' },
  { icon: 'trending_up', title: 'Weight Gain / Muscle Gain', desc: 'Includes proper diet consultation, protein supplement guidance, strength and stamina building, and effective muscle mass increase.' },
  { icon: 'balance', title: 'Maintenance Programme', desc: 'Our weight maintenance program helps you sustain your results after weight loss or weight gain, ensuring long-term success.' },
  { icon: 'restaurant', title: 'Balanced / Sports Nutrition', desc: 'Full body analysis, metabolism assessment, and a custom diet plan tailored to your lifestyle with result-oriented diet prescription.' },
  { icon: 'scan', title: 'Advanced Inner Scan Analysis', desc: 'Detailed body insights: Body Weight, BMI, Body Fat Percentage, Visceral Fat, Muscle Mass, Bone Mass, Body Water, BMR, Metabolic Age, Blood Pressure, and Pulse.' },
  { icon: 'personal_video', title: 'Personal Training', desc: 'Choose your personal trainer for exclusive one-on-one coaching throughout your session. Your trainer is completely dedicated to your progress.' },
  { icon: 'self_improvement', title: 'Power Yoga', desc: 'Blends mental, physical, and spiritual benefits with vigorous exercise. Includes various asanas and breathing techniques for overall wellness.' },
  { icon: 'directions_run', title: 'Aerobics', desc: 'Rhythmic exercise combining stretching and strength training to improve flexibility, muscular strength, and cardiovascular fitness.' },
  { icon: 'sports_kabaddi', title: 'Kickboxing', desc: 'A dynamic blend of martial arts and stand-up combat combining kicking and punching techniques. Great for self-defence and fitness.' },
  { icon: 'music_note', title: 'Zumba', desc: 'A dance fitness program blending hip-hop, soca, samba, salsa, merengue, mambo, and martial arts into a high-energy workout.' },
  { icon: 'spa', title: 'Massage Therapy', desc: 'Ancient therapeutic practice helping relieve pain, rehabilitate sports injuries, reduce stress, and promote general wellness.' },
]

export default function Programmes() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Programs</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Health Programmes</h1>
          <p className="text-on-surface-variant font-body mt-4 max-w-xl mx-auto">Holistic fitness programs designed for every body and every goal</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src="/images/trainer-vertical3.jpg" alt="NS FITZONE Programs" className="w-full h-full object-cover brightness-75" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-6 right-6 text-6xl">🎯</span>
          </div>
          <div>
            <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Our Approach</span>
            <h2 className="font-display text-headline-lg text-white uppercase mt-2 mb-6">No Compromise. Just Optimise.</h2>
            <p className="text-on-surface-variant font-body leading-relaxed">NS FITZONE offers a variety of health programmes through a holistic approach with an ambition to spread fitness with the attitude of <strong className="text-on-surface">"No compromise. Just optimise."</strong> Every programme is designed to deliver real, measurable results.</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {programmes.map((p, i) => (
            <div key={i} className="bg-surface-container-high border border-outline-variant/20 p-7 hover:border-electric-blue/30 transition-all hover:translate-x-1">
              <h3 className="font-display text-headline-md text-white uppercase tracking-tight flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-electric-blue text-3xl">{p.icon}</span>
                {p.title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm leading-relaxed ml-11">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
