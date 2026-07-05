import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white -z-10" />

      <div className="mx-auto max-w-7xl px-6 py-28 text-center">
        <Badge
          variant="secondary"
          className="mb-6 rounded-full px-4 py-2 text-sm"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          AI Powered Interview Platform
        </Badge>

        <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Crack Your Dream Job
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            With AI
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Prepare smarter with AI-powered Resume Analysis, Mock Interviews,
          Coding Practice and Personalized Feedback.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>

        <div className="mt-12">
          <p className="text-lg">⭐⭐⭐⭐⭐</p>

          <p className="mt-2 text-muted-foreground">
            Trusted by 1000+ Developers
          </p>
        </div>
      </div>
    </section>
  );
}
