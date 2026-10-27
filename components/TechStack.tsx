"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import SectionHeader from "./SectionHeader";

function TechStack() {
  const techLogos: LogoItem[] = [
    // --- LENGUAJES ---
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      alt: "JavaScript",
      title: "JavaScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      alt: "TypeScript",
      title: "TypeScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      title: "Python"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      alt: "PHP",
      title: "PHP"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      alt: "HTML5",
      title: "HTML5"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      alt: "CSS3",
      title: "CSS3"
    },
    // --- FRAMEWORKS & LIBS ---
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      title: "React"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      title: "Next.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      alt: "Laravel",
      title: "Laravel"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      title: "Tailwind CSS"
    },
    // --- BASES DE DATOS ---
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
      title: "MySQL"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      alt: "SQL Server",
      title: "SQL Server"
    },
    // --- HERRAMIENTAS & PLATAFORMAS ---
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
      title: "GitHub"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      alt: "Git",
      title: "Git"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker",
      title: "Docker"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      alt: "WordPress",
      title: "WordPress"
    },
    {
      src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      alt: "Postman",
      title: "Postman"
    },
    {
      src: "https://cdn-public.softwarereviews.com/production/logos/offerings/7351/original/microsoft_power_automate_logo.png?1710966766",
      alt: "Power Automate",
      title: "Power Automate"
    },
    {
      src: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
      alt: "n8n",
      title: "n8n"
    }
  ];

  return (
    <section id="stack" className="relative w-full py-24">
      <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <SectionHeader
          title="Stack Tecnológico"
          description="Ecosistema de lenguajes, frameworks, bases de datos y herramientas que empleo a diario para construir software robusto."
        />

        <div className="relative">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={65}
            gap={50}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="transparent"
            scaleOnHover={true}
            ariaLabel="Tecnologías y herramientas"
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default TechStack;