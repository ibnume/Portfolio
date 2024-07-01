import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      Link: "https://www.linkedin.com/in/mochammad-ibnu-abbas-basalamah-880595195/",
      Label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      Link: "https://github.com/ibnume?",
      Label: "Github",
      Icon: SiGithub,
    },
    {
      Link: "https://www.instagram.com/ibnume/",
      Label: "Instagram",
      Icon: SiInstagram,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center text-white animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        M.Ibnu Abbas 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;

          return (
            <Link
              href={social.Link}
              key={index}
              aria-label={social.Label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-150 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
