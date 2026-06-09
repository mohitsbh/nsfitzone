const images = ['/images/gallery/1.jpeg','/images/gallery/2.jpeg','/images/gallery/3.jpeg','/images/gallery/4.jpeg']
const videos = ['/images/gallery/1.mp4','/images/gallery/2.mp4','/images/gallery/3.mp4','/images/gallery/4.mp4']

export default function Gallery() {
  return (
    <>
      <section className="pt-40 pb-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop relative">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Gallery</span>
          <h1 className="font-display text-headline-lg text-white uppercase mt-2">Our Gallery</h1>
          <p className="text-on-surface-variant font-body mt-4">Take a visual tour of NS FITZONE</p>
        </div>
      </section>

      <section className="pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Photos</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Our Facility</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden group cursor-pointer">
              <img src={src} alt={`NS FITZONE Gym ${i + 1}`} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100" />
            </div>
          ))}
        </div>

        <div className="text-center mb-stack-md">
          <span className="font-body text-label-bold text-electric-blue uppercase tracking-widest">Videos</span>
          <h2 className="font-display text-headline-lg text-white uppercase mt-2">Gym in Action</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {videos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden bg-surface-container rounded-sm cursor-pointer">
              <div className="relative aspect-video">
                <video className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500" poster={images[i % images.length]} controls>
                  <source src={src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-electric-blue/90 text-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] font-body text-on-surface uppercase tracking-widest">Video {i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-on-surface-variant text-sm font-body mt-12">
          <span className="material-symbols-outlined text-sm align-middle mr-1">image</span> Visit us in person to experience the full NS FITZONE facility!
        </p>
      </section>
    </>
  )
}
