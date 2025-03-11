import React from "react";
import { BookOpenIcon, UsersIcon, GraduationCapIcon } from "lucide-react";
export function MentoringSection() {
  return (
    <section id="mentoring" className="py-16 bg-green-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Mentoring
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Learn from Expert Agriculturalists
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're passionate about sharing knowledge and helping the next
            generation of farmers succeed with sustainable practices.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-5">
                  <BookOpenIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  One-on-One Mentoring
                </h3>
                <p className="text-gray-600">
                  Personalized guidance tailored to your specific agricultural
                  goals and challenges. Work directly with our experts to
                  develop your skills and knowledge.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-5">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Group Workshops
                </h3>
                <p className="text-gray-600">
                  Collaborative learning experiences where you can gain
                  practical knowledge about organic farming techniques while
                  connecting with like-minded individuals.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white mb-5">
                  <GraduationCapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Agricultural Training Programs
                </h3>
                <p className="text-gray-600">
                  Comprehensive training programs designed to equip you with the
                  knowledge and skills needed to succeed in modern organic
                  agriculture.
                </p>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Inquire About Mentoring
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
