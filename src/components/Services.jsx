import { Stethoscope, HeartPulse, FlaskConical, Radiation, Ambulance, Microscope } from 'lucide-react'

const services = [
  { icon: Stethoscope, title: 'Outpatient & Specialist Clinics', desc: 'Family medicine, cardiology, pediatrics, gynecology, surgery and more.' },
  { icon: HeartPulse, title: 'Emergency & Critical Care', desc: '24/7 ER, ICU, advanced life support and trauma response.' },
  { icon: FlaskConical, title: 'Laboratory & Diagnostics', desc: 'Full-service lab, blood work, pathology with rapid turnaround.' },
  { icon: Microscope, title: 'Imaging & Radiology', desc: 'Digital X-ray, CT, ultrasound and echocardiography.' },
  { icon: Ambulance, title: 'Ambulance & Outreach', desc: 'On-call ambulances and community health programs.' },
  { icon: Radiation, title: 'Pharmacy & Inpatient', desc: 'Round-the-clock pharmacy and comfortable wards.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0B1220] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_-10%,rgba(59,130,246,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Comprehensive Care, Seamless Experience</h2>
          <p className="mt-3 text-white/70">We offer a full range of medical services delivered by experienced professionals with modern technology.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white ring-1 ring-white/20">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
