import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              DeepVariance
              <span className="block text-accent mt-2">Research Lab</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto animate-slide-up">
            Pioneering the future of artificial intelligence through groundbreaking research 
            in machine learning, deep learning, and computational intelligence. We bridge 
            the gap between theoretical advances and real-world applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up">
            <Link 
              href="/research"
              className="btn-primary bg-accent hover:bg-accent-600 px-8 py-4 text-lg font-semibold
                       transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Explore Our Research
            </Link>
            <Link 
              href="/publications"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary
                       px-8 py-4 text-lg font-semibold transform hover:scale-105 
                       transition-all duration-200"
            >
              View Publications
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-primary-700 mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
              <div className="text-gray-300">Research Papers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
              <div className="text-gray-300">Research Areas</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">25+</div>
              <div className="text-gray-300">Collaborations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-16 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}