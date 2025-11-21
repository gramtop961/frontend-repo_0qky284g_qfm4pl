import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900"
            >
              HR consulting and staffing agency for modern teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-600"
            >
              We help you attract, hire, and onboard top talent faster with data-driven processes and a people-first approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
                Get a free consultation
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-emerald-200 bg-white px-5 py-3 text-emerald-700 hover:bg-emerald-50">
                Explore our services
              </a>
            </motion.div>

            <ul className="mt-6 grid gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Dedicated recruiters & HR partners</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Pre-vetted talent network</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Transparent pricing & timelines</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-600/5">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50">
                <div className="h-full w-full grid grid-cols-3 gap-3 p-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="rounded-lg bg-white/70 border border-emerald-100"></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white border border-emerald-100 p-3 shadow-md shadow-emerald-600/5">
              <p className="text-sm font-medium text-slate-700">Avg time-to-hire</p>
              <p className="text-2xl font-bold text-emerald-700">12 days</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
