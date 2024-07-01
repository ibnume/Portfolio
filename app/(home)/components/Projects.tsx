import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      tech: [SiReactquery, SiVite, SiJavascript],
      link: "https://ibnu-portofolio.vercel.app/",
      cover: "/Image1.png",
      background: "bg-neutral-800",
    },
    {
      title: "To-Do List App",
      tech: [SiReactquery, SiVite, SiJavascript],
      link: "https://to-do-list-azure-beta.vercel.app/",
      cover: "/Image2.png",
      background: "bg-slate-800",
    },
    {
      title: "Takanome Company Profile",
      tech: [SiReactquery, SiVite, SiJavascript],
      link: "https://com-profile.vercel.app/",
      cover: "/Image3.png",
      background: "bg-blue-900",
    },
    {
      title: "New Portfolio",
      tech: [SiNextdotjs, SiTailwindcss, SiTypescript],
      link: "https://portfolio-two-xi-92.vercel.app/",
      cover: "/Image4.png",
      background: "bg-indigo-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0 bg">
      <Title
        text="Projects 🎨
"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn("p-5 rounded-md ", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-5 h-5" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
