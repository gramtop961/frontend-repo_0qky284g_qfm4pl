import { Users, BadgeCheck, Timer, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "End-to-end hiring",
    desc: "From sourcing to onboarding, we manage every step with clear milestones.",
  },
  {
    icon: BadgeCheck,
    title: "Quality-first",
    desc: "Rigorous vetting ensures every candidate is a strong technical and culture fit.",
  },
  {
    icon: Timer,
    title: "Faster placements",
    desc: "Optimized pipelines and a warm talent pool reduce time-to-hire drastically.",
  },
  {
    icon: BarChart3,
    title: "Data-driven insights",
    desc: "Get visibility into funnel health and hiring ROI with simple dashboards.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Built for lean teams</h2>
          <p className="mt-3 text-slate-600">Everything you need to scale headcount without scaling headaches.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 transition hover:shadow-lg hover:shadow-emerald-600/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
