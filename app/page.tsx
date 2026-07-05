import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <>
        <Navbar />

        <Hero />

        <Features />

        <section id="pricing" className="py-24 text-center">
          <h2 className="text-4xl font-bold">Pricing</h2>
        </section>

        <section id="about" className="py-24 text-center bg-slate-50">
          <h2 className="text-4xl font-bold">About</h2>
        </section>

        <section id="contact" className="py-24 text-center">
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>

        <Footer />
      </>
    </>
  );
}
