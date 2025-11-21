import { ArrowRight, Search, Handshake, FileCheck, UsersRound } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    desc: "We map roles, culture, and success criteria in a quick kickoff.",
  },
  { icon: Handshake, title: "Source", desc: "We tap our network and outbound channels for top talent." },
  { icon: FileCheck, title: "Assess", desc: "Structured interviews and assignments to ensure quality." },
  { icon: UsersRound, title: "Onboard", desc: "We help offers land and support smooth onboarding." },
];

export default function Process() {
  return (
    <section id="process" className="bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">A clear, collaborative process</h2>
          <p className="mt-3 text-slate-600">Stay in the loop from intake to offer — no black boxes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
