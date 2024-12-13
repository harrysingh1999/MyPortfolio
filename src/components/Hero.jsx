import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import profile from "../Images/profile.jpeg";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={profile}
              alt="Harvinder Singh"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl hover:border-purple-500 transition-colors duration-300"
            />
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-gray-300 mb-6">
              {personalInfo.title}
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {personalInfo.summary}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href={personalInfo.social.email}
              className="text-gray-300 hover:text-blue-400"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
