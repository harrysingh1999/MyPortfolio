import React from 'react';
import { FaAward } from 'react-icons/fa';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img src={cert.image} alt={cert.title} className="w-full h-52 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <FaAward className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-gray-300">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}