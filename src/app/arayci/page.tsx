import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arayci — DeepVariance",
  description:
    "Arayci: Efficient, cost-aware automation for AI model development.",
};

export default function ArayciPage() {
  return (
    <section className="bg-primary section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl text-white">Arayci</h1>
            <p className="text-lg text-accent-300 max-w-xl leading-relaxed">
              Arayci is DeepVariance&#39;s tool for automating and optimizing
              the AI lifecycle. It focuses on efficient data handling,
              architecture search constrained by compute budgets, and training
              optimizations like quantization, pruning, and mixed precision to
              reduce cost.
            </p>

            <ul className="list-disc list-inside text-accent-300 space-y-2">
              <li>Profiles variance and compute to avoid wasted work.</li>
              <li>Supports distributed, cost-aware training workflows.</li>
              <li>Generates resource-aware models for cloud and edge.</li>
            </ul>

            <div className="pt-4">
              <a href="/contact#contact-form" className="btn-primary px-6 py-3">
                Learn More
              </a>
            </div>
          </div>

          <div>
            <img
              src="https://placehold.co/700x500?text=Arayci+Illustration&bg=0f172a&fg=ffffff"
              alt="Arayci illustration placeholder"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
