import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse our latest research publications, papers, and contributions to the scientific community.",
};

export default function PublicationsPage() {
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
              Publications{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                & Research
              </span>
            </h1>
            <p className="text-xl text-accent-300 leading-relaxed">
              Explore our latest research contributions, published papers, and
              scientific discoveries that advance the field of artificial
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Publications
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Our most impactful and recent research publications.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title:
                  "Attention-Enhanced Neural Architecture Search for Efficient Deep Learning",
                authors: [
                  "Dr. Sarah Chen",
                  "Dr. Michael Rodriguez",
                  "Dr. Alex Kim",
                ],
                venue: "NeurIPS 2024",
                type: "Conference Paper",
                abstract:
                  "We propose a novel attention-enhanced neural architecture search method that discovers efficient deep learning architectures with improved performance and reduced computational cost.",
                citations: 45,
                year: 2024,
                tags: [
                  "Neural Architecture Search",
                  "Attention Mechanisms",
                  "Efficiency",
                ],
                link: "#",
                featured: true,
              },
              {
                title:
                  "Quantum-Classical Hybrid Learning for Large-Scale Optimization",
                authors: ["Dr. Emily Watson", "Dr. David Park"],
                venue: "Nature Machine Intelligence",
                type: "Journal Article",
                abstract:
                  "This work explores the synergy between quantum computing and classical machine learning for solving large-scale optimization problems with quantum advantage.",
                citations: 78,
                year: 2024,
                tags: ["Quantum Computing", "Optimization", "Hybrid Systems"],
                link: "#",
                featured: true,
              },
              {
                title:
                  "Safe Reinforcement Learning in Autonomous Systems: A Comprehensive Framework",
                authors: [
                  "Dr. James Wilson",
                  "Dr. Lisa Zhang",
                  "Dr. Robert Taylor",
                ],
                venue: "ICML 2024",
                type: "Conference Paper",
                abstract:
                  "We present a comprehensive framework for ensuring safety in reinforcement learning systems deployed in autonomous applications.",
                citations: 62,
                year: 2024,
                tags: [
                  "Reinforcement Learning",
                  "AI Safety",
                  "Autonomous Systems",
                ],
                link: "#",
                featured: true,
              },
            ].map((paper, index) => (
              <div
                key={paper.title}
                className={`card-premium transition-all duration-500 ${
                  paper.featured
                    ? "border-l-4 border-accent-400 shadow-glow"
                    : ""
                } animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl text-white mb-4 leading-tight">
                        {paper.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-accent-300">
                        <span className="font-semibold">
                          {paper.authors.join(", ")}
                        </span>
                        <span>•</span>
                        <span className="font-semibold text-accent-200">
                          {paper.venue}
                        </span>
                        <span>•</span>
                        <span>{paper.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 ml-6">
                      <span
                        className={`px-4 py-2 rounded-2xl text-sm font-semibold ${
                          paper.type === "Journal Article"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        }`}
                      >
                        {paper.type}
                      </span>
                      {paper.featured && (
                        <span className="px-4 py-2 bg-accent-500/20 text-accent-200 rounded-2xl text-sm font-semibold border border-accent-500/30">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Abstract */}
                  <p className="text-accent-300 leading-relaxed text-lg">
                    {paper.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 glass rounded-2xl text-sm text-white hover:bg-white/20 transition-all duration-200 border border-glow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-glow">
                    <div className="flex items-center space-x-6 text-accent-300">
                      <span className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="font-semibold">
                          {paper.citations} citations
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <a
                        href={paper.link}
                        className="btn-primary flex items-center space-x-2"
                      >
                        <span>Read Paper</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Publication{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Browse our publications by research area and type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Deep Learning",
                count: 18,
                description:
                  "Neural networks, architectures, and optimization techniques",
                icon: "🧠",
                color: "from-blue-500 to-cyan-500",
              },
              {
                category: "Computer Vision",
                count: 15,
                description:
                  "Image processing, object detection, and visual understanding",
                icon: "👁️",
                color: "from-purple-500 to-pink-500",
              },
              {
                category: "Natural Language Processing",
                count: 12,
                description:
                  "Language models, text understanding, and generation",
                icon: "💬",
                color: "from-green-500 to-teal-500",
              },
              {
                category: "AI Safety",
                count: 8,
                description: "Robustness, fairness, and ethical AI research",
                icon: "🛡️",
                color: "from-orange-500 to-red-500",
              },
              {
                category: "Reinforcement Learning",
                count: 11,
                description: "Agent learning, control, and decision making",
                icon: "🎮",
                color: "from-indigo-500 to-purple-500",
              },
              {
                category: "Quantum ML",
                count: 6,
                description:
                  "Quantum computing applications in machine learning",
                icon: "⚛️",
                color: "from-pink-500 to-rose-500",
              },
            ].map((category, index) => (
              <div
                key={category.category}
                className="card-premium transition-all duration-500 overflow-hidden cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${category.color} text-white p-6 -m-6 mb-6 rounded-t-3xl shadow-glow`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl">{category.category}</h3>
                    </div>
                    <span className="bg-white/20 px-4 py-2 rounded-2xl text-sm font-bold backdrop-blur-sm">
                      {category.count}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-accent-300 leading-relaxed text-lg">
                    {category.description}
                  </p>
                  <button
                    className="text-white font-semibold hover:text-accent-200 transition-colors duration-200 
                                   flex items-center space-x-2 group"
                  >
                    <span>Browse Papers</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-primary section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Publication{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Metrics
              </span>
            </h2>
            <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
              Our research impact by the numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "70+",
                label: "Total Publications",
                description: "Across all research areas",
              },
              {
                metric: "15k+",
                label: "Total Citations",
                description: "Impact across the community",
              },
              {
                metric: "25+",
                label: "Conference Papers",
                description: "At top-tier venues",
              },
              {
                metric: "15+",
                label: "Journal Articles",
                description: "In prestigious journals",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center card-premium transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent mb-4">
                  {stat.metric}
                </div>
                <div className="text-2xl text-white mb-3">{stat.label}</div>
                <div className="text-accent-300 text-lg">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white section-padding relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl text-white">
              Stay Updated with Our Latest{" "}
              <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                Research
              </span>
            </h2>
            <p className="text-xl text-accent-300 leading-relaxed">
              Subscribe to our newsletter or follow us on social media to get
              notified about our latest publications and research breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Subscribe to Updates
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Browse All Papers
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
