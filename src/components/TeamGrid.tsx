import EmailIcon from "@/assets/email.svg";
import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import { teamMembers } from "@/lib/constants";
import Image from "next/image";

export default function TeamGrid() {
  return (
    <section className="bg-primary section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
      </div>
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Meet Our Research Team
          </h2>
          <p className="text-xl text-accent-300 mx-auto">
            A closer look at the minds shaping ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1280px] mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group text-center"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="card-premium h-full group">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="relative">
                    <div className="w-36 h-36 mx-auto bg-gradient-to-br from-white to-accent-200 rounded-2xl flex items-center justify-center overflow-hidden border border-glow relative">
                      {member.image ? (
                        // <img
                        //   src={`/avatars/${member.image}`}
                        //   alt={member.name}
                        //   className="w-full h-full object-cover"
                        // />
                        <Image
                          src={`/avatars/${member.image}`}
                          alt={member.name}
                          width={142}
                          height={142}
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

                    {/* Glow Ring removed */}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-accent-300 font-semibold text-sm tracking-wide uppercase">
                    {member.role}
                  </p>
                </div>

                {/* Research Interests removed */}

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-glow">
                  <div className="flex justify-center space-x-3">
                    {member.social.map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent-300 text-sm shadow-glow"
                        aria-label={`${member.name} on ${link.platform}`}
                      >
                        <span
                          className="text-xs font-bold"
                          title={link.platform}
                        >
                          {link.icon === "linkedin" && <LinkedInIcon />}
                          {link.icon === "github" && <GitHubIcon />}
                          {link.icon === "email" && <EmailIcon />}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
