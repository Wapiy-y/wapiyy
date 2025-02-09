import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="grid items-start justify-items-center min-h-screen p-0 gap-20 sm:p-0">
      <div className="flex flex-col justify-between h-full p-14">
        
        <main className="flex flex-col gap-8 items-center sm:items-start">
          <div className="border p-2">
            <ul className="list-inside list-none text-sm text-center sm:text-left">
              <li className="mb-1">
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  Hi👋
                </code>
              </li>
              <li className="mb-1">Hi, my name is Wafiy.</li>
              <li className="mb-1">I'm based in Shah Alam, Malaysia.</li>
              <li className="mb-1">I'm a software developer with focus on fullstack web development.</li>
            </ul>
          </div>
        </main>

        <footer className="flex gap-6 flex-wrap items-center justify-center pb-2 text-sm mt-auto">
          <a
            className="flex items-center gap-2"
            href="https://github.com/Wapiy-y"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4" />
            Github
          </a>
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/abdullahwafiy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4" />
            Linkedin
          </a>
        </footer>
      </div>
    </div>
  );
}
