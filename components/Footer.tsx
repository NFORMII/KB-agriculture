import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-green-800 w-full">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-xl font-bold text-white">
              KB Modern Agriculture
            </h2>
            <p className="text-gray-300 text-base">
              Pioneering sustainable organic farming practices for a healthier
              tomorrow.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Services
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Organic Crops
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Sustainable Farming
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Agricultural Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Farm Management
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#contact"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#about"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-300 hover:text-white"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8">
          <p className="text-base text-gray-300 xl:text-center">
            &copy; {new Date().getFullYear()} KB Modern Agriculture. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
