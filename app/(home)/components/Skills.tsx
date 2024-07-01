"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "Git",
      Icon: SiGit,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🎯
"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
