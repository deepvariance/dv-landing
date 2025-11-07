// Removed generic HeroSection import, adding custom About hero instead
import TeamGrid from "@/components/TeamGrid";

export default function AboutPage() {
  const missionCards = [
    {
      icon: "🚀",
      title: "What We Do",
      description:
        "DeepVariance is an automated machine learning platform that transforms raw business data into production-ready models. We combine intelligent sampling with end-to-end AutoML to make enterprise-grade AI accessible and affordable—no specialized ML team required."
    },
    {
      icon: "🛠️",
      title: "How It Works",
      description:
        "DeepVariance automates the entire ML workflow: intelligent data sampling, preprocessing, feature engineering, model selection, hyperparameter tuning, and cloud deployment. Our research-backed approach delivers competitive accuracy at 25-30% lower compute cost and one-third of the resource usage compared to traditional methods."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden section-padding flex items-center">
        <div className="container-custom text-center space-y-4">
          <h1 className="text-5xl font-bold">About DeepVariance</h1>
          <p className="text-xl text-accent-200 mx-auto">
            Making machine learning work for everyone who builds and runs a business.
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
      {/* <TeamGrid /> */}
    </>
  );
}
