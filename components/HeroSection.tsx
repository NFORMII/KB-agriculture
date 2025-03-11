import React from "react";
export function HeroSection() {
  return (
    <section id="home" className="relative bg-green-700 w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Organic farm field"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          KB Modern Agriculture
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
          Pioneering sustainable organic farming practices for a healthier
          tomorrow. Specializing in premium organic food crops, agricultural
          mentoring, and innovative business partnerships.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#contact"
            className="rounded-md bg-white px-5 py-3 text-base font-semibold text-green-700 shadow-sm hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="rounded-md border border-white px-5 py-3 text-base font-semibold text-white hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
