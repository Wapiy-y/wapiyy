"use client";
import { Github, Linkedin, Twitter, Link } from "lucide-react";
import Image from "next/image";
import { Timeline } from "antd";
import { motion } from "framer-motion";
import { techStack } from "@/app/logoTechStack";

export default function Home() {
  return (
      <div className="flex flex-col items-center min-h-screen px-6 py-8 sm:px-0 bg-gray-950 text-white">
        <div className="flex flex-col gap-6 max-w-lg w-full">

          {/* Avatar Profile */}
          <div className="px-6 flex items-center justify-center">
            <Image
                src="/profile.jpg"
                alt="User profile picture"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full border-2 border-gray-400 object-cover"
            />
          </div>

          {/* Hero Section */}
          <div className="px-6 text-center">
            <p className="text-[16px] font-semibold">
              Hey there! I&apos;m <span className="underline decoration-sky-500">Wafiy.</span>
            </p>
            <p className="text-[16px] text-gray-400 mt-2">
              A full-stack developer based in Shah Alam, Malaysia. 🇲🇾
            </p>
            <p className="text-[16px] text-gray-400">
              I love turning ideas into cool web apps & making the internet a better place.
            </p>
          </div>

          {/* Social Media */}
          <div className="px-6 text-center">
            <p className="text-[16px] font-medium text-gray-400">Connect with me</p>
            <div className="flex justify-center gap-6 mt-2">
              <a className="hover:text-sky-500 transition" href="https://github.com/Wapiy-y" target="_blank">
                <Github className="w-5 h-5" />
              </a>
              <a className="hover:text-sky-500 transition" href="https://www.linkedin.com/in/abdullahwafiy/" target="_blank">
                <Linkedin className="w-5 h-5" />
              </a>
              <a className="hover:text-sky-500 transition" href="https://x.com/amadikatuu" target="_blank">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="px-6 pt-1">
            <p className="text-[16px] font-semibold text-gray-400 pb-2">Tech Stack</p>
            <div className="relative w-full overflow-hidden">
              <motion.div
                  className="flex gap-6 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                    <div key={index} className="flex items-center justify-center min-w-[100px]">
                      <img src={tech.logo} alt={tech.name} className="h-6 w-auto object-contain" />
                    </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="px-6 pt-4">
            <p className="text-[16px] font-semibold text-gray-400 pb-2">Experience</p>
            <Timeline
                items={[
                  {
                    children: (
                        <>
                          <p className="text-[16px] text-white">Fullstack Developer Intern - AGTIV Consulting</p>
                          <p className="text-[16px] text-white">Jan 2024 - Present</p>
                          <p className="text-[16px] text-gray-400">
                            Worked on the EPC software for AGTIV and MOC system for an oil and gas client.
                          </p>
                        </>
                    ),
                  },
                  {
                    children: (
                        <>
                          <p className="text-[16px] text-white">Full-time Student - Universiti Teknologi MARA</p>
                          <p className="text-[16px] text-white">Oct 2021 - March 2025</p>
                          <p className="text-[16px] text-gray-400">
                            Pursuing a degree in Computer Science (Netcentric Computing), gaining expertise in web technologies, networking, database design, and cybersecurity.
                          </p>
                        </>
                    ),
                  },
                ]}
            />
          </div>

          {/* Personal Project */}
          <div className="px-6">
            <p className="text-[16px] font-semibold text-gray-400 pb-2">Personal Project</p>

            <div className="grid grid-cols-1 gap-6">
              {/* First Project */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img src="/collabFamily.png" alt="CollabFamily" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <a className="flex items-center text-[16px] font-semibold text-white gap-1" href="https://collabfamily.onrender.com" target="_blank">CollabFamily <Link className="w-3 h-3"/></a>
                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Live</span>
                  </div>
                  <p className="mt-2 text-[16px] text-gray-400">
                    A short description of the project goes here.
                  </p>
                </div>
              </div>

              {/* Second Project */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img src="/Qrder.png" alt="CollabFamily" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[16px] font-semibold text-white">Qrder</h3>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Progress</span>
                  </div>
                  <p className="mt-2 text-[16px] text-gray-400">
                    A short description of the project goes here.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
}
