import { researchAreas } from '@/lib/constants';

export default function ResearchHighlights() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Research Focus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We explore cutting-edge areas of artificial intelligence, pushing the boundaries 
            of what's possible in machine learning and computational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div 
              key={area.title}
              className="card group hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="space-y-4">
                {/* Icon */}
                                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {area.icon.slice(0, 1)}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {area.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full
                               border border-primary-100 group-hover:bg-accent-50 
                               group-hover:text-accent group-hover:border-accent-100 
                               transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-4">
                  <button className="text-primary font-medium hover:text-accent transition-colors duration-200 
                                   flex items-center space-x-1 group-hover:translate-x-1 transform transition-transform">
                    <span>Learn more</span>
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
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for passionate researchers and industry partners 
              to collaborate on groundbreaking AI research projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Join Our Research
              </button>
              <button className="btn-secondary">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}