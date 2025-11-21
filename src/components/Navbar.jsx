import { Menu, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">HR</div>
            <span className="font-semibold text-slate-800">TalentFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#features" className="hover:text-emerald-700 transition">Features</a>
            <a href="#process" className="hover:text-emerald-700 transition">Process</a>
            <a href="#testimonials" className="hover:text-emerald-700 transition">Testimonials</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50">
              <Phone size={16} /> Book a call
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
            <Menu size={18} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-slate-700">
              <a href="#features" className="rounded-md px-3 py-2 hover:bg-emerald-50">Features</a>
              <a href="#process" className="rounded-md px-3 py-2 hover:bg-emerald-50">Process</a>
              <a href="#testimonials" className="rounded-md px-3 py-2 hover:bg-emerald-50">Testimonials</a>
              <a href="#cta" className="rounded-md px-3 py-2 bg-emerald-600 text-white mt-2">Book a call</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
