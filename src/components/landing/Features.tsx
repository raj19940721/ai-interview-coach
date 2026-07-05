import { FileText, Mic, Code2, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Resume Analyzer",
    description: "Analyze your resume with AI and improve your ATS score.",
    icon: FileText,
  },
  {
    title: "Mock Interview",
    description: "Practice AI-powered mock interviews with instant feedback.",
    icon: Mic,
  },
  {
    title: "Coding Practice",
    description: "Solve coding problems and prepare for technical interviews.",
    icon: Code2,
  },
  {
    title: "Progress Tracking",
    description: "Track your interview preparation journey with analytics.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center">Features</h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to prepare for your dream job.
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <Icon className="h-10 w-10 text-blue-600 mb-4" />

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
