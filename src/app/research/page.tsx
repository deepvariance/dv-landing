import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Explore our cutting-edge research in artificial intelligence, machine learning, and computational intelligence.',
};

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Research
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Discover our groundbreaking research that's shaping the future of 
              artificial intelligence and advancing the state of the art across 
              multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research spans across multiple cutting-edge areas of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Deep Learning & Neural Networks",
                description: "Advancing neural architecture design, optimization techniques, and understanding the theoretical foundations of deep learning.",
                highlights: [
                  "Novel attention mechanisms",
                  "Efficient neural architectures",
                  "Theoretical analysis of deep networks",
                  "Transfer learning methodologies"
                ],
                publications: 15,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Computer Vision",
                description: "Developing state-of-the-art vision systems for object detection, image generation, and visual understanding.",
                highlights: [
                  "3D scene understanding",
                  "Generative visual models",
                  "Real-time object detection",
                  "Multi-modal vision systems"
                ],
                publications: 12,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Natural Language Processing",
                description: "Creating intelligent language models that understand, generate, and reason with human language.",
                highlights: [
                  "Large language model optimization",
                  "Multilingual understanding",
                  "Knowledge reasoning",
                  "Conversational AI systems"
                ],
                publications: 10,
                color: "from-green-500 to-teal-500"
              },
              {
                title: "AI Safety & Ethics",
                description: "Ensuring AI systems are safe, fair, and aligned with human values through rigorous research.",
                highlights: [
                  "Bias detection and mitigation",
                  "Interpretable AI systems",
                  "Robustness analysis",
                  "Ethical AI frameworks"
                ],
                publications: 8,
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Reinforcement Learning",
                description: "Developing intelligent agents that learn optimal behaviors through interaction with environments.",
                highlights: [
                  "Multi-agent systems",
                  "Safe exploration methods",
                  "Meta-learning approaches",
                  "Real-world applications"
                ],
                publications: 11,
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Quantum Machine Learning",
                description: "Exploring the intersection of quantum computing and machine learning for next-generation algorithms.",
                highlights: [
                  "Quantum neural networks",
                  "Variational quantum algorithms",
                  "Quantum advantage analysis",
                  "Hybrid classical-quantum systems"
                ],
                publications: 6,
                color: "from-pink-500 to-rose-500"
              }
            ].map((area, index) => (
              <div 
                key={area.title}
                className="card hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${area.color} text-white p-6 -m-6 mb-6`}>
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {area.publications} Publications
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Key Research Highlights:</h4>
                    <ul className="space-y-2">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button className="text-primary font-medium hover:text-accent transition-colors duration-200 
                                     flex items-center space-x-1 group">
                      <span>Explore Research</span>
                      <svg 
                        className="w-4 h-4 group-hover:translate-x-1 transform transition-transform" 
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
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Current Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our ongoing research projects that are pushing the boundaries 
              of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Project ATLAS",
                description: "Developing next-generation attention mechanisms for efficient large-scale model training.",
                status: "Active",
                timeline: "2024-2025",
                team: "5 researchers",
                funding: "NSF Grant"
              },
              {
                title: "SafeAI Initiative",
                description: "Building robust frameworks for AI safety and alignment in autonomous systems.",
                status: "Active",
                timeline: "2023-2025",
                team: "8 researchers",
                funding: "Industry Partnership"
              },
              {
                title: "Quantum-ML Bridge",
                description: "Exploring quantum advantage in machine learning through variational algorithms.",
                status: "Planning",
                timeline: "2024-2026",
                team: "4 researchers",
                funding: "DoE Grant"
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="card hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Timeline:</span>
                      <span className="font-medium">{project.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Team Size:</span>
                      <span className="font-medium">{project.team}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Funding:</span>
                      <span className="font-medium">{project.funding}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Research Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research contributes to both scientific advancement and real-world applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "50+",
                label: "Publications",
                description: "In top-tier conferences and journals"
              },
              {
                metric: "10k+",
                label: "Citations",
                description: "Across all publications"
              },
              {
                metric: "25+",
                label: "Collaborations",
                description: "With leading institutions"
              },
              {
                metric: "15+",
                label: "Awards",
                description: "For research excellence"
              }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-primary mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our Research Community
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Whether you're a researcher, student, or industry professional, 
              there are many ways to engage with our research and contribute 
              to the advancement of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-accent hover:bg-accent-600">
                Explore Collaborations
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}