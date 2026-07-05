import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Crack Your Dream Job with AI
      </h1>

      <p className="mt-6 text-xl text-gray-500">
        Resume Analysis, Mock Interviews and Coding Practice powered by AI.
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <Button size="lg">Get Started</Button>

        <Button variant="outline" size="lg">
          Live Demo
        </Button>
      </div>
    </section>
  );
}
