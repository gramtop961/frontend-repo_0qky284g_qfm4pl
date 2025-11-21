export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 bg-white p-8 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Ready to build your team?</h3>
              <p className="mt-2 text-slate-600">Get a tailored hiring plan and a free 30-minute consultation.</p>
            </div>

            <form className="grid gap-3 sm:grid-cols-2">
              <input type="text" placeholder="Full name" className="w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Work email" className="w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="text" placeholder="Company" className="w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="text" placeholder="Hiring need (e.g., 3 engineers)" className="w-full rounded-lg border border-emerald-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
                Request consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
