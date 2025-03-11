import React from "react";
import { TrendingUpIcon, BuildingIcon } from "lucide-react";
export function BusinessSection() {
  return (
    <section id="business" className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Business Opportunities
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Partner with KB Modern Agriculture
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're open to various business partnerships and collaborations that
            promote sustainable agriculture.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <div className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Partnership Opportunities
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Distribution Partnerships
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Partner with us to distribute our premium organic products
                      to new markets and customers.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Co-Farming Ventures
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Collaborate on innovative farming projects that combine
                      our expertise with your resources.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Research Collaborations
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Work with us on agricultural research to develop new
                      sustainable farming techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <TrendingUpIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Investment Opportunities
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-6">
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Farm Expansion Projects
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Invest in our growth as we expand our organic farming
                      operations to meet increasing demand.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Technology Implementation
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Support initiatives to implement cutting-edge agricultural
                      technology for improved sustainability and yields.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-gray-900">
                      Value-Added Product Development
                    </h4>
                    <p className="mt-2 text-base text-gray-500">
                      Partner in developing new products that showcase our
                      premium organic ingredients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Discuss Business Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
