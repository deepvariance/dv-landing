import { Metadata } from 'next';
import TeamGrid from '@/components/TeamGrid';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about DeepVariance Research Lab, our mission, vision, and the brilliant minds behind groundbreaking AI research.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About DeepVariance
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Founded with a vision to push the boundaries of artificial intelligence, 
              DeepVariance Research Lab is at the forefront of revolutionary AI research 
              that shapes the future of technology and society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To advance the frontiers of artificial intelligence through innovative research, 
                  bridging the gap between theoretical breakthroughs and practical applications 
                  that benefit humanity. We are committed to developing AI systems that are not 
                  only powerful but also ethical, transparent, and accessible.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's leading research institution for AI innovation, fostering 
                  a new generation of researchers and technologies that will define the next 
                  era of intelligent systems and human-AI collaboration.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">50+</span>
                    </div>
                    <div>
                      <div className="font-semibold">Research Publications</div>
                      <div className="text-sm text-gray-200">In top-tier conferences</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">25+</span>
                    </div>
                    <div>
                      <div className="font-semibold">Industry Partnerships</div>
                      <div className="text-sm text-gray-200">Global collaborations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold">15+</span>
                    </div>
                    <div>
                      <div className="font-semibold">Research Areas</div>
                      <div className="text-sm text-gray-200">Cutting-edge domains</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from research methodologies 
              to collaborative partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing the boundaries of what's possible in AI research through creative thinking and cutting-edge methodologies.",
                icon: "🚀"
              },
              {
                title: "Ethics",
                description: "Ensuring our research contributes positively to society while addressing potential risks and biases in AI systems.",
                icon: "⚖️"
              },
              {
                title: "Collaboration",
                description: "Fostering partnerships across academia, industry, and communities to accelerate scientific progress.",
                icon: "🤝"
              },
              {
                title: "Transparency",
                description: "Maintaining open research practices and clear communication about our methods, findings, and limitations.",
                icon: "🔍"
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in research quality, peer review, and scientific rigor.",
                icon: "⭐"
              },
              {
                title: "Impact",
                description: "Focusing on research that has meaningful applications and benefits for real-world problems.",
                icon: "🌍"
              }
            ].map((value, index) => (
              <div 
                key={value.title}
                className="card text-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamGrid />

      {/* History & Timeline */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading AI research institution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2020",
                title: "Foundation",
                description: "DeepVariance Research Lab was founded with a mission to advance AI research."
              },
              {
                year: "2021",
                title: "First Major Breakthrough",
                description: "Published groundbreaking research on neural architecture optimization."
              },
              {
                year: "2022",
                title: "Industry Partnerships",
                description: "Established collaborations with leading tech companies and academic institutions."
              },
              {
                year: "2023",
                title: "Global Recognition",
                description: "Received international awards for contributions to machine learning research."
              },
              {
                year: "2024",
                title: "Expansion",
                description: "Expanded research team and launched new initiatives in AI safety and ethics."
              }
            ].map((milestone, index) => (
              <div key={milestone.year} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index < 4 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-primary-200"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="bg-gray-50 rounded-lg p-6 ml-8">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-semibold text-primary">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}