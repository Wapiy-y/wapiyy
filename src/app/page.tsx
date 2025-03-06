"use client";
import { Github, Linkedin, Twitter, File } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "antd";
import { motion } from "framer-motion";
import { techStack } from "@/app/logoTechStack";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 sm:px-0 bg-gray-950 text-white">
        <div className="flex flex-col gap-6 max-w-md w-full">

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
          <div className="px-6 text-center max-w-md mx-auto">
            <p className="text-[16px] text-gray-300 font-normal leading-relaxed mt-2">
              Im Wafiy – messing with tech, breaking stuff, and (mostly) fixing it.
              A 23-year-old fresh grad with some hands-on <Link href="/experience" className="underline">experience</Link> from studies and internship.
              In my free time? Probably building a side <Link href="/project" className="underline">project</Link>... or abandoning one halfway.
            </p>
          </div>

          {/* Social Media */}
          <div className="px-6 text-center">
            <p className="text-[16px] font-medium text-gray-400">Connect with me</p>
            <div className="flex justify-center gap-6 mt-2">
              <Tooltip title="Github">
                <a className="hover:text-sky-500 transition" href="https://github.com/Wapiy-y" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
              </Tooltip>
              <Tooltip title="Linkedin">
                <a className="hover:text-sky-500 transition" href="https://www.linkedin.com/in/abdullahwafiy/" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Tooltip>
              <Tooltip title="Twitter">
                <a className="hover:text-sky-500 transition" href="https://x.com/amadikatuu" target="_blank">
                  <Twitter className="w-5 h-5" />
                </a>
              </Tooltip>
              <Tooltip title="Resume">
                <a className="hover:text-sky-500 transition" href="/resume/Resume.pdf" target="_blank">
                  <File className="w-5 h-5"/>
                </a>
              </Tooltip>

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
                      <Image src={tech.logo} alt={tech.name} width={128} height={128} className="h-6 w-auto object-contain" />
                    </div>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
  );
}
