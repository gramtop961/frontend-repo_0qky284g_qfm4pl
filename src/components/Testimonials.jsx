import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "They helped us hire a full product team in under a month. The process was transparent and the candidates were top-notch.",
    name: "Sofia Patel",
    role: "VP People, BrightWave",
  },
  {
    quote:
      "We reduced time-to-hire by 60% and improved candidate experience. Highly recommend their team.",
    name: "Marcus Lee",
    role: "Founder, BuildCraft",
  },
  {
    quote:
      "The best recruiting partners we've worked with — pragmatic, fast, and deeply human.",
    name: "Emily Chen",
    role: "COO, AtlasPay",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Trusted by growing companies</h2>
          <p className="mt-3 text-slate-600">Real results from real teams.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <div className="flex items-center gap-1 text-emerald-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#059669" className="text-emerald-600" />
                ))}
              </div>
              <p className="mt-4 text-slate-700">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-600">
                <span className="font-medium text-slate-900">{t.name}</span> • {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
