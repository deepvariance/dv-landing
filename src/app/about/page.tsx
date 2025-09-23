import TeamGrid from "@/components/TeamGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DeepVariance Research Lab, our mission, vision, and the brilliant minds behind groundbreaking AI research.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl text-white">
              About{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                DeepVariance
              </span>
            </h1>
            <p className="text-xl text-accent-300 leading-relaxed">
              Founded with a vision to push the boundaries of artificial
              intelligence, DeepVariance Research Lab is at the forefront of
              revolutionary AI research that shapes the future of technology and
              society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl text-white mb-6">Our Mission</h2>
                <p className="text-lg text-accent-300 leading-relaxed">
                  To advance the frontiers of artificial intelligence through
                  innovative research, bridging the gap between theoretical
                  breakthroughs and practical applications that benefit
                  humanity. We are committed to developing AI systems that are
                  not only powerful but also ethical, transparent, and
                  accessible.
                </p>
              </div>

              <div>
                <h2 className="text-3xl text-white mb-6">Our Vision</h2>
                <p className="text-lg text-accent-300 leading-relaxed">
                  To be the world's leading research institution for AI
                  innovation, fostering a new generation of researchers and
                  technologies that will define the next era of intelligent
                  systems and human-AI collaboration.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="card-premium text-white">
                <h3 className="text-2xl mb-8">Our Impact</h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">50+</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-white">
                        Research Publications
                      </div>
                      <div className="text-accent-400">
                        In top-tier conferences
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">25+</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-white">
                        Industry Partnerships
                      </div>
                      <div className="text-accent-400">
                        Global collaborations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center shadow-glow">
                      <span className="text-2xl font-bold text-white">15+</span>
                    </div>
                    <div>
                      <div className="font-bold text-xl text-white">
                        Research Areas
                      </div>
                      <div className="text-accent-400">
                        Cutting-edge domains
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Our Core{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              These principles guide everything we do, from research
              methodologies to collaborative partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing the boundaries of what's possible in AI research through creative thinking and cutting-edge methodologies.",
                icon: "🚀",
              },
              {
                title: "Ethics",
                description:
                  "Ensuring our research contributes positively to society while addressing potential risks and biases in AI systems.",
                icon: "⚖️",
              },
              {
                title: "Collaboration",
                description:
                  "Fostering partnerships across academia, industry, and communities to accelerate scientific progress.",
                icon: "🤝",
              },
              {
                title: "Transparency",
                description:
                  "Maintaining open research practices and clear communication about our methods, findings, and limitations.",
                icon: "🔍",
              },
              {
                title: "Excellence",
                description:
                  "Striving for the highest standards in research quality, peer review, and scientific rigor.",
                icon: "⭐",
              },
              {
                title: "Impact",
                description:
                  "Focusing on research that has meaningful applications and benefits for real-world problems.",
                icon: "🌍",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="card-premium text-center transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl text-white mb-4">{value.title}</h3>
                <p className="text-accent-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamGrid />

      {/* History & Timeline */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a leading AI research
              institution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2020",
                title: "Foundation",
                description:
                  "DeepVariance Research Lab was founded with a mission to advance AI research.",
              },
              {
                year: "2021",
                title: "First Major Breakthrough",
                description:
                  "Published groundbreaking research on neural architecture optimization.",
              },
              {
                year: "2022",
                title: "Industry Partnerships",
                description:
                  "Established collaborations with leading tech companies and academic institutions.",
              },
              {
                year: "2023",
                title: "Global Recognition",
                description:
                  "Received international awards for contributions to machine learning research.",
              },
              {
                year: "2024",
                title: "Expansion",
                description:
                  "Expanded research team and launched new initiatives in AI safety and ethics.",
              },
            ].map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-12 pb-16 last:pb-0"
              >
                {/* Timeline line */}
                {index < 4 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-gradient-to-b from-white/30 to-white/10"></div>
                )}

                {/* Timeline dot */}
                <div className="absolute left-2 top-4 w-10 h-10 glass rounded-full flex items-center justify-center shadow-glow border border-glow">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="card-premium ml-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gradient-to-r from-white to-accent-200 text-primary px-4 py-2 rounded-full text-sm font-bold">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl text-white">{milestone.title}</h3>
                  </div>
                  <p className="text-accent-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
