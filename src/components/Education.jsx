import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 rounded-full p-3">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-blue-500 font-semibold">{edu.school}</p>
                  <p className="text-gray-600 mb-2">{edu.period}</p>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}