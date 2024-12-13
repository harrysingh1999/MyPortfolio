import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";
import { PiPhone } from "react-icons/pi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex justify-center gap-8">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="w-8 h-8" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-8 h-8" />
              <span>LinkedIn</span>
            </a>
            <div className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors">
              <FaEnvelope className="w-8 h-8" />
              <span>hs541156@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-2 hover:text-blue-400 transition-colors">
              <PiPhone className="w-8 h-8" />
              <span>+91 88261 41160</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
