import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <CTA />

      <footer className="border-t border-emerald-100 bg-emerald-50/30">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} TalentFlow HR. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-slate-600 hover:text-emerald-700">Privacy</a>
              <a href="#" className="text-slate-600 hover:text-emerald-700">Terms</a>
              <a href="#" className="text-slate-600 hover:text-emerald-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
