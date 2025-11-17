export default function CTA() {
  return (
    <section id="booking" className="bg-[#0B1220] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/40 to-cyan-500/30 p-10">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(400px_200px_at_20%_10%,rgba(255,255,255,0.6),transparent_60%)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to visit LABIB Hospital?</h3>
            <p className="mt-2 text-white/80 max-w-2xl">Book an appointment in minutes. Our patient care team will confirm and guide you through the next steps.</p>
            <form className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="Full name" />
              <input type="tel" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50" placeholder="Phone" />
              <input type="date" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50" />
              <button className="rounded-xl bg-white text-gray-900 px-4 py-3 font-semibold hover:bg-gray-100">Request Slot</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
