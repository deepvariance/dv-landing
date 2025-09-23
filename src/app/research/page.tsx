import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore our cutting-edge research in artificial intelligence, machine learning, and computational intelligence.",
};

export default function ResearchPage() {
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
              Our{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            <p className="text-xl text-accent-300 leading-relaxed">
              Discover our groundbreaking research that's shaping the future of
              artificial intelligence and advancing the state of the art across
              multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Research{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Areas
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Our research spans across multiple cutting-edge areas of
              artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Deep Learning & Neural Networks",
                description:
                  "Advancing neural architecture design, optimization techniques, and understanding the theoretical foundations of deep learning.",
                highlights: [
                  "Novel attention mechanisms",
                  "Efficient neural architectures",
                  "Theoretical analysis of deep networks",
                  "Transfer learning methodologies",
                ],
                publications: 15,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Computer Vision",
                description:
                  "Developing state-of-the-art vision systems for object detection, image generation, and visual understanding.",
                highlights: [
                  "3D scene understanding",
                  "Generative visual models",
                  "Real-time object detection",
                  "Multi-modal vision systems",
                ],
                publications: 12,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Natural Language Processing",
                description:
                  "Creating intelligent language models that understand, generate, and reason with human language.",
                highlights: [
                  "Large language model optimization",
                  "Multilingual understanding",
                  "Knowledge reasoning",
                  "Conversational AI systems",
                ],
                publications: 10,
                color: "from-green-500 to-teal-500",
              },
              {
                title: "AI Safety & Ethics",
                description:
                  "Ensuring AI systems are safe, fair, and aligned with human values through rigorous research.",
                highlights: [
                  "Bias detection and mitigation",
                  "Interpretable AI systems",
                  "Robustness analysis",
                  "Ethical AI frameworks",
                ],
                publications: 8,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Reinforcement Learning",
                description:
                  "Developing intelligent agents that learn optimal behaviors through interaction with environments.",
                highlights: [
                  "Multi-agent systems",
                  "Safe exploration methods",
                  "Meta-learning approaches",
                  "Real-world applications",
                ],
                publications: 11,
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Quantum Machine Learning",
                description:
                  "Exploring the intersection of quantum computing and machine learning for next-generation algorithms.",
                highlights: [
                  "Quantum neural networks",
                  "Variational quantum algorithms",
                  "Quantum advantage analysis",
                  "Hybrid classical-quantum systems",
                ],
                publications: 6,
                color: "from-pink-500 to-rose-500",
              },
            ].map((area, index) => (
              <div
                key={area.title}
                className="card-premium transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${area.color} text-white p-6 -m-6 mb-6 rounded-t-2xl`}
                >
                  <h3 className="text-2xl mb-3">{area.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="glass px-4 py-2 rounded-full border border-white/20">
                      {area.publications} Publications
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-accent-300 leading-relaxed">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="text-white mb-4">
                      Key Research Highlights:
                    </h4>
                    <ul className="space-y-3">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-white to-accent-200 rounded-full flex-shrink-0"></div>
                          <span className="text-accent-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-glow">
                    <button
                      className="text-white font-semibold hover:text-accent-200 transition-colors duration-300 
                                     flex items-center space-x-2 group"
                    >
                      <span>Explore Research</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transform transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Current{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Explore our ongoing research projects that are pushing the
              boundaries of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project ATLAS",
                description:
                  "Developing next-generation attention mechanisms for efficient large-scale model training.",
                status: "Active",
                timeline: "2024-2025",
                team: "5 researchers",
                funding: "NSF Grant",
              },
              {
                title: "SafeAI Initiative",
                description:
                  "Building robust frameworks for AI safety and alignment in autonomous systems.",
                status: "Active",
                timeline: "2023-2025",
                team: "8 researchers",
                funding: "Industry Partnership",
              },
              {
                title: "Quantum-ML Bridge",
                description:
                  "Exploring quantum advantage in machine learning through variational algorithms.",
                status: "Planning",
                timeline: "2024-2026",
                team: "4 researchers",
                funding: "DoE Grant",
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className="card-premium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl text-white">{project.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        project.status === "Active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-accent-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-glow">
                    <div className="flex justify-between text-sm">
                      <span className="text-accent-400">Timeline:</span>
                      <span className="font-semibold text-white">
                        {project.timeline}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-accent-400">Team Size:</span>
                      <span className="font-semibold text-white">
                        {project.team}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-accent-400">Funding:</span>
                      <span className="font-semibold text-white">
                        {project.funding}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Research{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Our research contributes to both scientific advancement and
              real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "50+",
                label: "Publications",
                description: "In top-tier conferences and journals",
              },
              {
                metric: "10k+",
                label: "Citations",
                description: "Across all publications",
              },
              {
                metric: "25+",
                label: "Collaborations",
                description: "With leading institutions",
              },
              {
                metric: "15+",
                label: "Awards",
                description: "For research excellence",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center card-premium hover:scale-110 transform transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold text-white mb-3">
                  {stat.metric}
                </div>
                <div className="text-xl font-bold text-white mb-3">
                  {stat.label}
                </div>
                <div className="text-accent-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl text-white">
              Join Our Research{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Community
              </span>
            </h2>
            <p className="text-xl text-accent-300 leading-relaxed">
              Whether you're a researcher, student, or industry professional,
              there are many ways to engage with our research and contribute to
              the advancement of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary px-8 py-4 text-lg">
                Explore Collaborations
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
