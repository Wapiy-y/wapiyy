"use client";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SiJavascript, SiTypescript, SiHtml5, SiDotnet, SiNextdotjs, SiReact, SiExpress, SiMongodb, SiGit, SiCss3, SiBootstrap, SiTailwindcss } from "react-icons/si";

export default function Home() {
  const [emoji, setEmoji] = useState("👋");
  const emojis = ["👋", "💻", "🚀", "✨"];
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % emojis.length;
      setEmoji(emojis[index.current]);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-8 sm:px-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col gap-8 max-w-lg w-full">
        
        {/* Hero Section */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl transition-all hover:shadow-xl">
          <ul className="list-none text-base leading-relaxed">
            <li className="mb-2">
              <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-1 rounded font-semibold">
                Hi <span className="transition-all duration-500 ease-in-out">{emoji}</span>
              </code>
            </li>
            <li className="mb-1">
              Hi, my name is <span className="text-orange-500 font-semibold">Wafiy.</span>
            </li>
            <li className="mb-1">Based in Shah Alam, Malaysia.</li>
            <li className="mb-1">Software Developer focusing on Fullstack Web Development.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl transition-all hover:shadow-xl">
          <p className="text-base font-semibold mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {[SiJavascript, SiTypescript, SiHtml5, SiDotnet, SiNextdotjs, SiReact, SiExpress, SiMongodb, SiGit, SiCss3, SiBootstrap, SiTailwindcss].map((Icon, idx) => (
              <div key={idx} className="flex items-center justify-center group">
                <Icon size={24} className="hover:scale-110 transition-transform text-gray-700 dark:text-gray-300" />              
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl transition-all hover:shadow-xl">
          <p className="text-base font-semibold mb-4">Experience</p>
          <div className="relative border-l-2 border-gray-400 dark:border-gray-600 pl-6 space-y-6">
            
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

        {/* Footer */}
        <footer className="flex flex-col items-center gap-4 mt-auto pb-4 text-sm">
          <p className="text-gray-700 dark:text-gray-400">Let’s connect! 👇</p>
          <div className="flex gap-6">
            <a
              className="flex items-center gap-2 hover:text-orange-500 transition"
              href="https://github.com/Wapiy-y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              className="flex items-center gap-2 hover:text-orange-500 transition"
              href="https://www.linkedin.com/in/abdullahwafiy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
