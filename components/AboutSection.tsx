import React from "react";
import { LeafIcon, AwardIcon, UsersIcon } from "lucide-react";
export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Modern Agriculture with Traditional Values
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At KB Modern Agriculture, we combine innovative techniques with
            time-tested organic farming practices.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative">
              <img
                className="h-full w-full object-cover rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Farmer inspecting organic crops"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">Our Story</h3>
              <p className="mt-3 text-lg text-gray-500">
                Founded with a passion for sustainable agriculture, KB Modern
                Agriculture has grown from a small family farm into a leading
                organic food producer. Our commitment to quality,
                sustainability, and innovation drives everything we do.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <LeafIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      100% Organic
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      We are committed to organic farming practices that protect
                      the environment and produce the healthiest food possible.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <AwardIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Expert Knowledge
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      With years of experience in modern agricultural techniques
                      and organic farming, we offer unparalleled expertise.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <UsersIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Community Focus
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      We believe in sharing knowledge and building a community
                      of sustainable farmers through mentoring and partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
