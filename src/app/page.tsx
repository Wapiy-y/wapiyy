"use client";
import { Github, Linkedin, Twitter } from "lucide-react";

const techStack = [
  { name: 'JavaScript', color: 'bg-yellow-600' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'HTML5', color: 'bg-orange-600' },
  // Add more technologies here...
];

export default function Home() {

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 sm:px-0 bg-gray-950 text-white">
      <div className="flex flex-col gap-1 max-w-lg w-full">

        {/* Avatar profile */}
        <div className="ps-6 pe-6 flex items-center justify-center">
          <img
              src="/profile.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-2 border-gray-400 object-cover"
          />
        </div>

        {/* Hero Section */}
        <div className="ps-6 pe-6">
          <ul className="list-none">
            <li className="mb-1">
              Hey there! I'm <span className="underline decoration-sky-500 font-semibold">Wafiy.</span>
            </li>
            <li className="mb-2">A full-stack developer based in Shah Alam, Malaysia. 🇲🇾</li>
            <li className="mb-2">I love turning ideas into cool web apps & making the internet a better place</li>
          </ul>
        </div>

        {/* connect */}
        <div className="ps-6 pe-6 flex flex-col gap-2 pt-1">
          <p className="text-gray-700 dark:text-gray-400">Social media</p>
          <div className="flex gap-6">
            <a
                className="flex items-center gap-2 hover:text-sky-500 transition"
                href="https://github.com/Wapiy-y"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
                className="flex items-center gap-2 hover:text-sky-500 transition "
                href="https://www.linkedin.com/in/abdullahwafiy/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 "/>
            </a>
            <a
                className="flex items-center gap-2 hover:text-sky-500 transition"
                href="https://x.com/amadikatuu"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="ps-6 pe-6 pt-4">
          <p className="text-base font-semibold mb-4 text-gray-400">Experience</p>
          <div className="relative border-l-2 border-sky-500 pl-6 space-y-6">
            
            <div className="relative">
              <p className="text-sm font-medium">Fullstack Developer Intern - AGTIV Consulting</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2024 - Present</p>
              <p className="text-sm mt-1">Worked on the EPC software for AGTIV and MOC system for an oil and gas client.</p>
            </div>
            
            <div className="relative">
              <p className="text-sm font-medium">Full-time Student - Universiti Teknologi MARA</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2021 - March 2025</p>
              <p className="text-sm mt-1">Pursuing a degree in Computer Science (Netcentric Computing), gaining expertise in web technologies, networking, database design, and cybersecurity.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="ps-6 pe-6 pt-4">
          <p className="text-base font-semibold mb-4 text-gray-400">Tech Stack</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {techStack.map((tech, idx) => (
                <div
                    key={idx}
                    className={`flex items-center justify-center py-1 px-3 rounded-full ${tech.color} text-white text-sm`}
                >
                  {tech.name}
                </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
