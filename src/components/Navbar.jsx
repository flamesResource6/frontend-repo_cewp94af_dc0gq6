import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-white/20 flex items-center justify-center text-white font-bold">L</div>
              <div className="text-white">
                <div className="text-lg font-semibold tracking-wide">LABIB Hospital</div>
                <div className="text-xs text-white/70">Eastleigh • Nairobi</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+254700000000" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ring-offset-gray-900/0">
                <Phone size={16} /> Call
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400/40 ring-offset-gray-900/0">
                <MapPin size={16} /> Visit
              </a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <div className="pt-2 flex items-center gap-3">
                  <a href="tel:+254700000000" className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-semibold"><Phone size={16} /> Call</a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 text-white px-4 py-2 text-sm font-semibold"><MapPin size={16} /> Visit</a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
