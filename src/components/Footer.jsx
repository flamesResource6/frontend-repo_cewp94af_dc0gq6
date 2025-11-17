import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1220] pt-10 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
          <div>
            <h4 className="text-white font-semibold text-lg">LABIB Hospital</h4>
            <p className="mt-2 text-white/70 text-sm">Eastleigh, Nairobi, Kenya</p>
          </div>
          <div className="text-white/80 text-sm space-y-2">
            <div className="flex items-center gap-2"><MapPin size={16} /> 8th Street, Eastleigh, Nairobi</div>
            <div className="flex items-center gap-2"><Phone size={16} /> +254 700 000 000</div>
            <div className="flex items-center gap-2"><Mail size={16} /> info@labibhospital.ke</div>
          </div>
          <div className="text-white/70 text-sm">
            <p>© {new Date().getFullYear()} LABIB Hospital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
