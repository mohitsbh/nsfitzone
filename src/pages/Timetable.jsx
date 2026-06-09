import { Link } from 'react-router-dom'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const timetable = [
  ['8:00 - 9:00', 'Bodybuilding', 'Fitness', '', 'Yoga', 'Bodybuilding', 'Bodybuilding', ''],
  ['9:00 - 10:00', '', 'Pilates', 'Bodybuilding', 'Fitness', '', 'Bodybuilding', 'Bodybuilding'],
  ['10:00 - 11:00', 'Bodybuilding', '', 'Bodybuilding', 'Fitness', 'Bodybuilding', '', 'Yoga'],
  ['11:00 - 12:00', 'Pilates', '', 'Bodybuilding', 'Pilates', '', 'Bodybuilding', 'Fitness'],
  ['12:00 - 13:00', 'Bodybuilding', 'Yoga', 'Bodybuilding', '', 'Fitness', 'Bodybuilding', 'Yoga'],
  ['13:00 - 14:00', 'Pilates', 'Yoga', '', 'Bodybuilding', 'Fitness', 'Pilates', 'Bodybuilding'],
  ['14:00 - 15:00', 'Bodybuilding', 'Fitness', '', 'Yoga', 'Bodybuilding', 'Fitness', ''],
  ['15:00 - 16:00', '', 'Bodybuilding', 'Pilates', 'Bodybuilding', 'Bodybuilding', 'Yoga', 'Fitness'],
  ['16:00 - 17:00', 'Bodybuilding', 'Fitness', 'Yoga', '', 'Fitness', 'Bodybuilding', ''],
  ['17:00 - 18:00', 'Bodybuilding', 'Fitness', 'Yoga', '', 'Fitness', 'Bodybuilding', ''],
  ['18:00 - 19:00', 'Bodybuilding', '', 'Fitness', 'Bodybuilding', '', 'Bodybuilding', ''],
  ['19:00 - 20:00', 'Bodybuilding', 'Fitness', '', 'Yoga', 'Fitness', 'Bodybuilding', ''],
  ['20:00 - 21:00', 'Fitness', 'Fitness', 'Yoga', '', 'Fitness', '', ''],
]

const colors = {
  Bodybuilding: 'bg-electric-blue/10 text-electric-blue border-electric-blue/30',
  Fitness: 'bg-success/10 text-success border-success/30',
  Yoga: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  Pilates: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
}

export default function Timetable() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Schedule</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Gym Timetable</h1>
          <p className="text-on-surface-variant font-body mt-4">Plan your week with our diverse range of fitness sessions</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Weekly Schedule</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Choose Your Session</h2>
          <p className="text-on-surface-variant font-body mt-3">Mon-Sat: 05:30 - 23:00 &nbsp;|&nbsp; Sun: 6:00 - 12:00</p>
        </div>

        <div className="overflow-x-auto border border-outline-variant/20">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-surface-container">
                <th className="p-4 text-left text-label-bold text-on-surface-variant uppercase tracking-wider text-xs sticky left-0 bg-surface-container z-10">Time</th>
                {days.map(d => (
                  <th key={d} className="p-4 text-center text-label-bold text-on-surface-variant uppercase tracking-wider text-xs">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, i) => (
                <tr key={i} className="border-t border-outline-variant/10 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-on-surface-variant text-xs sm:text-sm sticky left-0 bg-background z-10">{row[0]}</td>
                  {row.slice(1).map((cell, j) => (
                    <td key={j} className="p-2 text-center">
                      {cell ? (
                        <Link to="/class-single" className={`block px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium border transition-all hover:scale-105 ${colors[cell] || 'glass-card text-on-surface-variant'}`}>
                          {cell}
                        </Link>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
