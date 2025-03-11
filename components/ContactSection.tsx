import React from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Have questions or interested in our services? We'd love to hear from
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 gap-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      placeholder="What is this regarding?"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-900">
              Contact Information
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Reach out to us directly or visit our farm to learn more about our
              organic farming practices.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+1 (555) 123-4567</p>
                  <p className="mt-1">Mon-Fri 8am to 6pm</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>info@kbmodernagriculture.com</p>
                  <p className="mt-1">We'll respond as soon as possible</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>123 Farm Road</p>
                  <p>Greenville, CA 95000</p>
                </div>
              </div>
            </dl>
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="Farm location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
