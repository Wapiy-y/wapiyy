"use client";
import { Github, Linkedin } from "lucide-react";
import react, { useEffect, useState } from "react";
import { SiJavascript, SiTypescript, SiHtml5, SiDotnet, SiNextdotjs, SiReact, SiExpress, SiMongodb, SiGit, SiCss3, SiBootstrap, SiTailwindcss } from 'react-icons/si';

export default function Home() {

  const [emoji, setEmoji] = useState('👋');
  const emojis = ['👋', '✌', '💩'];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % emojis.length;
      setEmoji(emojis[index]);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid items-start justify-items-center min-h-screen p-0 gap-20 sm:p-0 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="flex flex-col justify-between h-full p-14 max-w-3xl w-full">
        
        <main className="flex flex-col gap-8">
          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <ul className="list-inside list-none text-sm">
              <li className="mb-2">
                <code className="bg-black/[.05] dark:bg-white/[.06] py-1 rounded font-semibold">
                  Hi{emoji}
                </code>
              </li>
              <li className="mb-1">Hi, my name is <span className="text-orange-500 font-semibold">Wafiy.</span></li>
              <li className="mb-1">I&apos;m based in Shah Alam, Malaysia.</li>
              <li className="mb-1">I&apos;m a software developer with focus on fullstack web development.</li>
            </ul>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <p className="text-md font-semibold mb-4">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center justify-center">
                <SiJavascript title="JavaScript" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiTypescript title="TypeScript" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiHtml5 title="HTML5" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiDotnet title="ASP.Net" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiNextdotjs title="Next.Js" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiReact title="React" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiExpress title="Express JS" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiMongodb title="MongoDB" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiGit title="Git" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiCss3 title="CSS" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiBootstrap title="Bootstrap" size={20} />
              </div>
              <div className="flex items-center justify-center">
                <SiTailwindcss title="Tailwind CSS" size={20} />
              </div>
            </div>
          </div>

          <div className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <p className="text-md font-semibold mb-4">Experience</p>
            <div className="relative border-l-2  pl-6 space-y-6">
              
              <div className="relative">
                <p className="text-sm">Fullstack Developer Intern - AGTIV Consulting</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2024 - Present</p>
                <p className="text-[13px] mt-1">Been tasked during internship to be involved in 2 projects: one for the company's own software, EPC, and MOC software for a client.</p>
                
              </div>
              
              <div className="relative">   
                <p className="text-sm">Fulltime Student - Universiti Teknologi MARA</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Oct 2021 - March 2025</p>
                <p className="text-[13px] mt-1">Started my degree in Computer Science - Netcentric Computing, where I gained expertise in web technologies, networking, database design, mobile computing, and cybersecurity.</p>
              </div>
              
            </div>
          </div>
        </main>

        <footer className="flex gap-6 flex-wrap items-center justify-center pb-2 text-sm mt-auto">
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
        </footer>
      </div>
    </div>
  );
}
