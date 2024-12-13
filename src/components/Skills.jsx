import React from 'react';
import { FaReact, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2: <FaReact className="w-6 h-6" />,
  Database: <FaDatabase className="w-6 h-6" />,
  Palette: <FaPalette className="w-6 h-6" />,
  Wrench: <FaTools className="w-6 h-6" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-white/35"
            >
              <h3 className="text-xl text-center font-bold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/50 text-center rounded-2xl px-4 py-2 text-sm hover:bg-blue-500/20 transition-colors cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}