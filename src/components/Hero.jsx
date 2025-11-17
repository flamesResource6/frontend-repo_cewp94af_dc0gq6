import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B1220]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_30%_10%,rgba(14,165,233,0.25),transparent_60%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-[#0B1220]/60 pointer-events-none"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open 24/7 • Emergency Care
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              LABIB Hospital
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              A modern multi-specialty hospital in Eastleigh, Nairobi. Advanced diagnostics, compassionate care, and trusted specialists—all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-semibold transition-colors">
                Book an Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold">
                Explore Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="text-2xl font-bold text-white">+40</div>
                <div className="text-xs">Specialists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs">Emergency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ISO</div>
                <div className="text-xs">Certified</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
