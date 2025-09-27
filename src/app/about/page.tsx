// Removed generic HeroSection import, adding custom About hero instead
import TeamGrid from "@/components/TeamGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "DeepVariance: mission, enterprise ML pipelines, and Arayci for scalable AI workflows."
};

export default function AboutPage() {
  const missionCards = [
    {
      icon: "🚀",
      title: "Our Mission",
      description:
        "At DeepVariance, our mission is to transform the way machine learning is built and deployed in enterprises. We aim to eliminate inefficiencies in today’s ML workflows by replacing the slow, services-heavy consulting model with productized, repeatable pipelines that scale. We believe in turning experimentation into automation, and research breakthroughs into tools that businesses of all sizes can actually use."
    },
    {
      icon: "🛠️",
      title: "Current Focus",
      description:
        "Our current focus is the Arayci Platform, the first commercial expression of our vision. Arayci is a no-code, guided solution that enables businesses to transform raw data into deployable ML and DL models at a fraction of the cost and time. It automates the end-to-end process—from profiling and cleaning data to feature engineering, hyperparameter tuning, and model deployment—delivering exportable, cloud-ready artifacts. Unlike BI dashboards or expensive consultants, Arayci provides predictive models that drive decision-making, not just reports."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden section-padding flex items-center">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-xl text-accent-200 mx-auto">
            DeepVariance is an incubating lab transforming ML research into
            enterprise-grade, repeatable pipelines. We build scalable AI
            solutions grounded in data variance analysis and ethical, open
            collaboration.
          </p>
        </div>
      </section>

      {/* Mission & Focus Rows */}
      <section className="bg-primary section-padding">
        <div className="container-custom space-y-12">
          {missionCards.map((card) => (
            <div key={card.title} className="space-y-6">
              <section className="mx-auto pt-2 transition-all duration-500 animate-fade-in">
                <h3 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
                  {card.title}
                </h3>

                <p className="text-accent-300 text-xl text-center leading-relaxed">
                  {card.description}
                </p>
              </section>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section (consolidated) */}
      <TeamGrid />
    </>
  );
}
