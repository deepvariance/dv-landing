import { teamMembers } from '@/lib/constants';

export default function TeamGrid() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of researchers, engineers, and thought leaders are 
            dedicated to advancing the field of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group text-center"
              style={{ 
                animationDelay: `${index * 100}ms` 
              }}
            >
              <div className="card hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full 
                                flex items-center justify-center overflow-hidden group-hover:scale-105 
                                transition-transform duration-300">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-white 
                                  flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent 
                               transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Research Interests */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.interests.slice(0, 3).map((interest) => (
                      <span 
                        key={interest}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full
                                 group-hover:bg-accent-50 group-hover:text-accent 
                                 transition-colors duration-200"
                      >
                        {interest}
                      </span>
                    ))}
                    {member.interests.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{member.interests.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-center space-x-3">
                    {member.social.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center
                                 hover:bg-accent hover:text-white transition-colors duration-200
                                 text-gray-600 text-sm"
                        aria-label={`${member.name} on ${link.platform}`}
                      >
                        <span className="text-xs font-semibold">
                          {link.icon.slice(0, 2).toUpperCase()}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join Our Research Team
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented researchers and engineers to join our mission 
              of advancing artificial intelligence research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                View Open Positions
              </button>
              <button className="btn-secondary">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}