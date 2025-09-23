import { teamMembers } from "@/lib/constants";

export default function TeamGrid() {
  return (
    <section className="bg-primary section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
              Research Team
            </span>
          </h2>
          <p className="text-xl text-accent-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of world-class researchers, engineers, and thought
            leaders are pioneering the future of artificial intelligence through
            groundbreaking innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-in"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="card-premium transition-all duration-500 group">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="relative">
                    <div
                      className="w-36 h-36 mx-auto bg-gradient-to-br from-white to-accent-200 rounded-2xl 
                                  flex items-center justify-center overflow-hidden group-hover:shadow-glow-lg 
                                  transition-all duration-500 border border-glow relative"
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-4xl font-bold text-primary">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      )}
                    </div>

                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl border-4 border-primary 
                                  flex items-center justify-center shadow-glow"
                    >
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <h3
                    className="text-xl font-bold text-white group-hover:text-accent-200 
                               transition-colors duration-300"
                  >
                    {member.name}
                  </h3>
                  <p className="text-accent-300 font-semibold text-sm tracking-wide uppercase">
                    {member.role}
                  </p>
                  <p className="text-accent-400 text-sm leading-relaxed px-2">
                    {member.bio}
                  </p>
                </div>

                {/* Research Interests */}
                <div className="mt-6 pt-6 border-t border-glow">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.interests.slice(0, 3).map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 glass text-accent-300 text-xs rounded-full
                                 group-hover:bg-surface-light/80 group-hover:text-white group-hover:border-glow-light
                                 transition-all duration-300 border border-transparent"
                      >
                        {interest}
                      </span>
                    ))}
                    {member.interests.length > 3 && (
                      <span className="px-3 py-1 glass text-accent-400 text-xs rounded-full border border-glow">
                        +{member.interests.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-glow">
                  <div className="flex justify-center space-x-3">
                    {member.social.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center
                                 hover:bg-surface-light/80 hover:border-glow-light hover:text-white hover:scale-110
                                 transition-all duration-300 text-accent-300 text-sm shadow-glow hover:shadow-glow-lg"
                        aria-label={`${member.name} on ${link.platform}`}
                      >
                        <span className="text-xs font-bold">
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
        <div className="text-center mt-20">
          <div className="glass p-12 rounded-3xl max-w-3xl mx-auto border border-glow relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20"></div>

            <div className="relative">
              <h3 className="text-3xl text-white mb-6">
                Join Our{" "}
                <span className="bg-gradient-to-r from-white to-accent-200 bg-clip-text text-transparent">
                  Research Mission
                </span>
              </h3>
              <p className="text-accent-300 mb-8 leading-relaxed text-lg">
                We're actively seeking exceptional researchers and engineers to
                join our quest of pushing the boundaries of artificial
                intelligence research.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary px-8 py-4 text-lg">
                  Explore Open Positions
                </button>
                <button className="btn-secondary px-8 py-4 text-lg">
                  Submit Your Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
