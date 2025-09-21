import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Browse our latest research publications, papers, and contributions to the scientific community.',
};

export default function PublicationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Publications
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Explore our latest research contributions, published papers, and 
              scientific discoveries that advance the field of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Featured Publications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful and recent research publications.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Attention-Enhanced Neural Architecture Search for Efficient Deep Learning",
                authors: ["Dr. Sarah Chen", "Dr. Michael Rodriguez", "Dr. Alex Kim"],
                venue: "NeurIPS 2024",
                type: "Conference Paper",
                abstract: "We propose a novel attention-enhanced neural architecture search method that discovers efficient deep learning architectures with improved performance and reduced computational cost.",
                citations: 45,
                year: 2024,
                tags: ["Neural Architecture Search", "Attention Mechanisms", "Efficiency"],
                link: "#",
                featured: true
              },
              {
                title: "Quantum-Classical Hybrid Learning for Large-Scale Optimization",
                authors: ["Dr. Emily Watson", "Dr. David Park"],
                venue: "Nature Machine Intelligence",
                type: "Journal Article",
                abstract: "This work explores the synergy between quantum computing and classical machine learning for solving large-scale optimization problems with quantum advantage.",
                citations: 78,
                year: 2024,
                tags: ["Quantum Computing", "Optimization", "Hybrid Systems"],
                link: "#",
                featured: true
              },
              {
                title: "Safe Reinforcement Learning in Autonomous Systems: A Comprehensive Framework",
                authors: ["Dr. James Wilson", "Dr. Lisa Zhang", "Dr. Robert Taylor"],
                venue: "ICML 2024",
                type: "Conference Paper",
                abstract: "We present a comprehensive framework for ensuring safety in reinforcement learning systems deployed in autonomous applications.",
                citations: 62,
                year: 2024,
                tags: ["Reinforcement Learning", "AI Safety", "Autonomous Systems"],
                link: "#",
                featured: true
              }
            ].map((paper, index) => (
              <div 
                key={paper.title}
                className={`card hover:shadow-xl transition-all duration-300 ${
                  paper.featured ? 'border-l-4 border-accent' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="font-medium">{paper.authors.join(", ")}</span>
                        <span>•</span>
                        <span className="font-medium text-accent">{paper.venue}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paper.type === 'Journal Article' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {paper.type}
                      </span>
                      {paper.featured && (
                        <span className="px-3 py-1 bg-accent-100 text-accent rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Abstract */}
                  <p className="text-gray-600 leading-relaxed">
                    {paper.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-50 hover:text-primary transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{paper.citations} citations</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href={paper.link}
                        className="text-primary hover:text-accent font-medium transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>Read Paper</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Publication Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our publications by research area and type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Deep Learning",
                count: 18,
                description: "Neural networks, architectures, and optimization techniques",
                icon: "🧠",
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Computer Vision",
                count: 15,
                description: "Image processing, object detection, and visual understanding",
                icon: "👁️",
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Natural Language Processing",
                count: 12,
                description: "Language models, text understanding, and generation",
                icon: "💬",
                color: "from-green-500 to-teal-500"
              },
              {
                category: "AI Safety",
                count: 8,
                description: "Robustness, fairness, and ethical AI research",
                icon: "🛡️",
                color: "from-orange-500 to-red-500"
              },
              {
                category: "Reinforcement Learning",
                count: 11,
                description: "Agent learning, control, and decision making",
                icon: "🎮",
                color: "from-indigo-500 to-purple-500"
              },
              {
                category: "Quantum ML",
                count: 6,
                description: "Quantum computing applications in machine learning",
                icon: "⚛️",
                color: "from-pink-500 to-rose-500"
              }
            ].map((category, index) => (
              <div 
                key={category.category}
                className="card hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${category.color} text-white p-4 -m-6 mb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {category.count}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  <button className="text-primary font-medium hover:text-accent transition-colors duration-200 
                                   flex items-center space-x-1 group">
                    <span>Browse Papers</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Publication Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our research impact by the numbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "70+",
                label: "Total Publications",
                description: "Across all research areas"
              },
              {
                metric: "15k+",
                label: "Total Citations",
                description: "Impact across the community"
              },
              {
                metric: "25+",
                label: "Conference Papers",
                description: "At top-tier venues"
              },
              {
                metric: "15+",
                label: "Journal Articles",
                description: "In prestigious journals"
              }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
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
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Subscribe to our newsletter or follow us on social media to get 
              notified about our latest publications and research breakthroughs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-accent hover:bg-accent-600">
                Subscribe to Updates
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Browse All Papers
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}