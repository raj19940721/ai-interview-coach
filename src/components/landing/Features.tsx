import { FileText, Mic, Code2, BarChart3, ArrowUpRight } from "lucide-react";
import { FEATURES } from "@/constants/features";

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Features</h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to prepare for your dream job.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-blue-50 transition">
                  <Icon className={`h-7 w-7 ${feature.color}`} />
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{feature.title}</h3>

                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                </div>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
