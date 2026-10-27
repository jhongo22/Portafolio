"use client";

import { motion } from "framer-motion";
import {
    Play,
    Code,
    Terminal,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    User,
    Download
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function FeaturedWork() {
    return (
        <section id="sobre-mi" className="w-full bg-transparent text-zinc-300 py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <SectionHeader
                    title="Sobre Mí"
                    description="Apasionado por la tecnología y la innovación. Soy una persona autodidacta, proactiva y con gran capacidad de aprendizaje."
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column: Featured Image Card (Spans 5 cols on large) */}
                    <div className="hidden lg:block lg:col-span-5 relative rounded-2xl overflow-hidden h-[600px] lg:h-auto group border border-white/5">
                        {/* Background Image */}
                        <Image
                            src="/sobre-mi-futuristic-v2.png"
                            alt="Visionary Developer"
                            fill
                            className="object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />

                        {/* Red overlay tint to match style */}
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>


                    </div>

                    {/* Right Column: Bento Grid (Spans 7 cols on large) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Row 1: Profile Header */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
                            <div className="flex items-center gap-4 md:gap-5 relative z-10">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10 shrink-0 relative shadow-2xl">
                                    <Image
                                        src="/ai-avatar.png"
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 64px, 80px"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h1 className="text-2xl md:text-3xl text-white font-black uppercase tracking-tighter">Jhon Gonzalez</h1>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-500 font-mono uppercase tracking-widest text-[9px] md:text-[10px]">Desarrollador Full Stack & IA</p>
                                        <div className="flex items-center gap-1.5 text-red-500 font-bold uppercase tracking-widest text-[8px] md:text-[9px]">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                                            </span>
                                            Medellín, Colombia
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-5 w-full md:w-auto relative z-10">
                                <div className="flex gap-6 md:gap-8 text-sm">
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-500 text-[10px] mb-1 font-bold uppercase tracking-widest opacity-60">Proyectos</span>
                                        <span className="text-white font-black text-xl md:text-2xl">10+</span>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-500 text-[10px] mb-1 font-bold uppercase tracking-widest opacity-60">Años</span>
                                        <span className="text-white font-black text-xl md:text-2xl">2+</span>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-500 text-[10px] mb-1 font-bold uppercase tracking-widest opacity-60">STACK</span>
                                        <span className="text-white font-black text-xl md:text-2xl">8+</span>
                                    </div>
                                </div>
                                <Link
                                    href="https://github.com/jhongo22/"
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-lg transition-all w-full md:w-auto justify-center"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    Ver GitHub
                                </Link>
                            </div>

                            {/* Decorative background element like in image */}
                            <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/5 blur-[100px] -z-10" />
                        </div>

                        {/* Row 2: Bio & Socials (2 Columns on Mobile) */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            {/* Bio Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8 flex flex-col justify-between h-full min-h-[300px] md:min-h-[350px]">
                                <p className="text-sm md:text-lg text-zinc-400 leading-relaxed md:leading-snug">
                                    Desarrollador de software con 2+ de experiencia. Mi enfoque combina el desarrollo <span className="text-white font-bold">Full Stack</span> con la potencia de la <span className="text-white font-bold">Inteligencia Artificial</span> para automatizar operaciones y escalar negocios.
                                </p>
                                <div className="flex flex-col gap-3 mt-6">
                                    <div className="flex items-center gap-2.5 text-zinc-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                                        <Terminal className="w-3.5 h-3.5 text-white/40" />
                                        <span>PLANEACION</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-zinc-500 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                                        <Code className="w-3.5 h-3.5 text-white/40" />
                                        <span>AI Automatizacion</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 md:p-8 flex flex-col h-full min-h-[300px] md:min-h-[350px]">
                                <div className="space-y-2 md:space-y-3 mb-6">
                                    {/* Download CV */}
                                    <Link
                                        href="#"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/5 rounded-2xl px-4 py-3 md:px-5 md:py-4 transition-all"
                                    >
                                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-300">Hoja de Vida</span>
                                        <div className="flex items-center gap-2 text-zinc-600 group-hover:text-emerald-400 transition-colors">
                                            <span className="hidden md:block text-[8px] uppercase font-bold tracking-widest">Descargar CV</span>
                                            <Download className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* Github */}
                                    <Link
                                        href="https://github.com/jhongo22/"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/5 rounded-2xl px-4 py-3 md:px-5 md:py-4 transition-all"
                                    >
                                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-300">Github</span>
                                        <div className="flex items-center gap-2 text-zinc-600 group-hover:text-white transition-colors">
                                            <span className="hidden md:block text-[8px] uppercase font-bold tracking-widest">Explorar</span>
                                            <Github className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* LinkedIn */}
                                    <Link
                                        href="https://www.linkedin.com/in/jhon-gonzalez-3415b2263/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/5 rounded-2xl px-4 py-3 md:px-5 md:py-4 transition-all"
                                    >
                                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-300">LinkedIn</span>
                                        <div className="flex items-center gap-2 text-zinc-600 group-hover:text-[#0077b5] transition-colors">
                                            <span className="hidden md:block text-[8px] uppercase font-bold tracking-widest">Conectar</span>
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* Email */}
                                    <Link
                                        href="mailto:jhonneider1234567@gmail.com"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/5 rounded-2xl px-4 py-3 md:px-5 md:py-4 transition-all"
                                    >
                                        <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-zinc-300">Email</span>
                                        <div className="flex items-center gap-2 text-zinc-600 group-hover:text-white transition-colors">
                                            <span className="hidden md:block text-[8px] uppercase font-bold tracking-widest">Enviar mensaje</span>
                                            <Mail className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>

                                <Link
                                    href="https://wa.me/573004435894"
                                    className="mt-auto w-full bg-[#d9d9d9] hover:bg-white text-black font-black uppercase tracking-widest text-xs md:text-sm py-4 md:py-5 rounded-xl flex items-center justify-center gap-3 group transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    CONTACTO
                                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
