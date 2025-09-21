import Link from 'next/link';
import { socialLinks, footerLinks } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DV</span>
              </div>
              <span className="font-bold text-xl">DeepVariance</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Advancing the frontiers of artificial intelligence through innovative research
              in machine learning, deep learning, and computational intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:contact@deepvariance.org"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@deepvariance.org
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Location:</span> San Francisco, CA
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center 
                           hover:bg-accent transition-colors duration-200 group"
                  aria-label={`Visit our ${social.name}`}
                >
                  <span className="text-xs font-semibold text-gray-300 group-hover:text-white">
                    {social.icon.slice(0, 2).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} DeepVariance Research Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}