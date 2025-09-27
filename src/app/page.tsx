import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl text-white">
              Arayci — Efficient AI Workflows
            </h2>
            <p className="text-accent-300">
              Arayci automates model development with cost-aware training,
              variance-driven profiling, and resource-efficient deployment.
            </p>
            <Link href="/arayci" className="btn-secondary px-6 py-3">
              Learn about Arayci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
