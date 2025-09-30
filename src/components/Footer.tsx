import GitHubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import XIcon from "@/assets/x.svg";
import { footerLinks, socialLinks } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-glow relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-glow rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Lab Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-white to-accent-200 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-primary font-bold text-lg">DV</span>
              </div>
              <span className="font-bold text-2xl text-white">
                DeepVariance
              </span>
            </div>
            <p className="text-accent-300 leading-relaxed text-lg max-w-md">
              Advancing the frontiers of artificial intelligence through
              innovative research in machine learning, deep learning, and
              computational intelligence.
            </p>
            {/* <div className="flex space-x-6">
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-accent-400 text-sm">Papers</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-accent-400 text-sm">Areas</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-accent-400 text-sm">Partners</div>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl text-white">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-accent-300 hover:text-white transition-all duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-xl text-white">Connect With Us</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-accent-300">
                  <span className="font-semibold text-white">Email:</span>
                </p>
                <a
                  href="mailto:contact@deepvariance.com"
                  className="text-accent-300 hover:text-white transition-colors duration-300 block"
                >
                  contact@deepvariance.com
                </a>
              </div>
              <div className="space-y-2">
                <p className="text-accent-300">
                  <span className="font-semibold text-white">Location:</span>
                </p>
                <p className="text-accent-300">San Francisco, CA</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center 
                             hover:bg-surface-light/70 hover:border-glow-light transition-all duration-300 
                             groupshadow-glow hover:shadow-glow-lg"
                    aria-label={`Visit our ${social.name}`}
                  >
                    {social.icon === "x" && <XIcon />}
                    {social.icon === "linkedin" && <LinkedInIcon />}
                    {social.icon === "github" && <GitHubIcon />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glass p-8 rounded-2xl mb-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl text-white">Stay Updated</h3>
            <p className="text-accent-300">
              Get the latest research updates and breakthroughs delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-premium flex-1 text-center sm:text-left"
              />
              <button className="btn-primary px-6 py-3 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glow pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-accent-400 text-center md:text-left">
              © {currentYear} DeepVariance. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm">
              <Link
                href="/privacy"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-accent-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
