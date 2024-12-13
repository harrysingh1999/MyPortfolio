import React from 'react';
import { FaReact, FaDatabase, FaPalette, FaTools } from 'react-icons/fa';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code2: <FaReact className="w-8 h-8 text-blue-400" />, // Updated icon size and color
  Database: <FaDatabase className="w-8 h-8 text-green-400" />,
  Palette: <FaPalette className="w-8 h-8 text-pink-400" />,
  Wrench: <FaTools className="w-8 h-8 text-yellow-400" />
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-white/20"
            >
              <div className="flex justify-center mb-6">{iconMap[category.icon]}</div>
              <h3 className="text-2xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/70 text-center rounded-xl px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-blue-500/30 transition-all cursor-pointer"
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
