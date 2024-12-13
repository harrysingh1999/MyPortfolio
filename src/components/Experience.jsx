import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12">
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform transition-transform hover:scale-110">
                <FaBriefcase className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 ml-4 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-500 font-semibold">{exp.company}</p>
                <p className="text-gray-600 mb-2">{exp.period}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
