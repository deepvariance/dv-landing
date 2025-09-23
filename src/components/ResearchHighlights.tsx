import { researchAreas } from "@/lib/constants";

export default function ResearchHighlights() {
  return (
    <section className="bg-surface-light section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-glow rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            Our Research Focus
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-accent-300 mx-auto rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl text-accent-200 max-w-4xl mx-auto leading-relaxed">
            We explore cutting-edge areas of artificial intelligence, pushing
            the boundaries of what's possible in machine learning and
            computational intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-premium group transition-all duration-500"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-white to-accent-200 rounded-2xl flex items-center justify-center mb-8 shadow-glow group-hover:shadow-glow-lg transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-primary">
                    {area.icon.slice(0, 1)}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl text-white group-hover:text-accent-100 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-accent-300 leading-relaxed text-lg">
                    {area.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-surface-light/50 text-accent-200 text-sm rounded-full
                               border border-glow backdrop-blur-sm
                               group-hover:bg-surface-light/70 group-hover:text-white
                               transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-6">
                  <button
                    className="text-white font-semibold hover:text-accent-100 
                                   flex items-center space-x-2 group-hover:translate-x-2 transform transition-all duration-300
                                   text-lg"
                  >
                    <span>Learn more</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <div className="glass p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl text-white mb-6">
              Interested in Collaboration?
            </h3>
            <p className="text-accent-200 mb-10 text-xl leading-relaxed">
              We're always looking for passionate researchers and industry
              partners to collaborate on groundbreaking AI research projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Join Our Research
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
