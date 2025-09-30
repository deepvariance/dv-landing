import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-glow rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px"
          }}
        ></div>
      </div>

      <div className="relative container-custom py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white text-shadow">
                  High-Scale AI,
                  <br />
                  Low-Cost Compute.
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-white to-accent-300 mx-auto lg:mx-0 rounded-full shadow-glow"></div>
              </div>
            </div>

            {/* Description */}
            <div className="animate-slide-up" style={{ animationDelay: "0s" }}>
              <p className="text-lg md:text-xl lg:text-2xl text-accent-200 leading-relaxed font-light">
                DeepVariance builds automated systems to make AI & deep learning
                faster, cheaper, and more sustainable — so innovation can happen
                without breaking the bank.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-slide-up"
              style={{ animationDelay: "0s" }}
            >
              <Link
                href="/contact#contact-form"
                className="btn-primary text-lg px-8 py-4 shadow-dark-lg"
              >
                Get Involved
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                How It Works
              </Link>
            </div>
          </div>

          {/* Right Column - Video Animation */}
          <div
            className="relative flex items-center justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              >
                <source src="/nodes.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Stats */}
        {/* <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 mt-12 animate-slide-up max-w-4xl mx-auto"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="glass p-6 text-center space-y-3 glow-on-hover">
            <div className="text-3xl md:text-4xl text-white">50+</div>
            <div className="text-accent-300 text-base">Research Papers</div>
          </div>
          <div className="glass p-6 text-center space-y-3 glow-on-hover">
            <div className="text-3xl md:text-4xl text-white">15+</div>
            <div className="text-accent-300 text-base">
              Active Research Areas
            </div>
          </div>
          <div className="glass p-6 text-center space-y-3 glow-on-hover">
            <div className="text-3xl md:text-4xl text-white">25+</div>
            <div className="text-accent-300 text-base">
              Global Collaborations
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-light to-transparent"></div>
    </section>
  );
}
