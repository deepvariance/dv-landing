"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[55vh] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 blur-sm"
        >
          <source src="/nodes.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-glow rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
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

      {/* Content Overlay */}
      <div className="relative container-custom py-12 md:py-20 text-center z-10">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold drop-shadow-2xl">
            Enterprise-grade ML without enterprise complexity
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-accent-100 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-lg">
            Deploy production-ready models in days, not months
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center pt-6 animate-slide-up">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 shadow-2xl hover:scale-105 transition-transform">
              Contact Us
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium border border-accent-300/30">
              25-30% Lower Costs
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium border border-accent-300/30">
              ⅓ Resources Needed
            </div>
            <div className="glass px-6 py-3 rounded-full text-sm font-medium border border-accent-300/30">
              Research-Backed
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-light to-transparent"></div>
    </section>
  );
}
