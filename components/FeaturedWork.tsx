"use client";

import { motion } from "framer-motion";
import {
    Code,
    Terminal,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
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
                    description="Apasionado por la tecnología y la innovación. Desarrollador full-stack y creador de soluciones basadas en IA para escalar operaciones."
                />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column: Featured Image Card (Spans 5 cols on large) */}
                    <div className="hidden lg:block lg:col-span-5 relative rounded-3xl overflow-hidden h-[600px] lg:h-auto group border border-white/10 shadow-2xl">
                        {/* Background Image */}
                        <Image
                            src="/sobre-mi-futuristic-v2.png"
                            alt="Jhon Gonzalez - Desarrollador Full Stack & IA"
                            fill
                            className="object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                        />

                        {/* Red overlay tint to match style */}
                        <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right Column: Bento Grid (Spans 7 cols on large) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Row 1: Profile Header */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-4 md:gap-5 relative z-10">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-red-500/30 shrink-0 relative shadow-2xl">
                                    <Image
                                        src="/ai-avatar.png"
                                        alt="Avatar de Jhon Gonzalez"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 64px, 80px"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-2xl md:text-3xl text-white font-black uppercase tracking-tighter">Jhon Gonzalez</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-zinc-300 font-mono uppercase tracking-widest text-[10px] md:text-xs">Desarrollador Full Stack & IA</p>
                                        <div className="flex items-center gap-1.5 text-red-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px]">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                                            </span>
                                            Medellín, Colombia
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-start md:items-end gap-5 w-full md:w-auto relative z-10">
                                <div className="flex gap-6 md:gap-8 text-sm">
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-400 text-[10px] mb-1 font-bold uppercase tracking-widest">Proyectos</span>
                                        <span className="text-white font-black text-xl md:text-2xl">10+</span>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-400 text-[10px] mb-1 font-bold uppercase tracking-widest">Años</span>
                                        <span className="text-white font-black text-xl md:text-2xl">2+</span>
                                    </div>
                                    <div className="text-center md:text-right">
                                        <span className="block text-zinc-400 text-[10px] mb-1 font-bold uppercase tracking-widest">Stack</span>
                                        <span className="text-white font-black text-xl md:text-2xl">8+</span>
                                    </div>
                                </div>
                                <Link
                                    href="https://github.com/jhongo22/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-xl transition-all w-full md:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    <Github className="w-3.5 h-3.5" />
                                    Ver GitHub
                                </Link>
                            </div>

                            {/* Decorative background glow */}
                            <div className="absolute right-0 top-0 w-64 h-64 bg-red-500/5 blur-[100px] -z-10 pointer-events-none" />
                        </div>

                        {/* Row 2: Bio & Socials (2 Columns on Mobile) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Bio Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px] md:min-h-[350px]">
                                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                                    Desarrollador de software con más de 2 años de experiencia. Mi enfoque combina la arquitectura <span className="text-white font-bold">Full Stack</span> con la potencia de la <span className="text-white font-bold">Inteligencia Artificial</span> para automatizar operaciones y construir productos digitales escalables.
                                </p>
                                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2.5 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <Terminal className="w-3.5 h-3.5 text-red-400" />
                                        <span>ARQUITECTURA & CÓDIGO</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <Code className="w-3.5 h-3.5 text-red-400" />
                                        <span>AUTOMATIZACIÓN & IA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[300px] md:min-h-[350px]">
                                <div className="space-y-2 md:space-y-3 mb-6">
                                    {/* Contact WhatsApp */}
                                    <Link
                                        href="https://wa.me/573004435894"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">WhatsApp</span>
                                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                                            <span className="text-[9px] uppercase font-bold tracking-widest">Chatear</span>
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* Github */}
                                    <Link
                                        href="https://github.com/jhongo22/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">Github</span>
                                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                                            <span className="text-[9px] uppercase font-bold tracking-widest">Explorar</span>
                                            <Github className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* LinkedIn */}
                                    <Link
                                        href="https://www.linkedin.com/in/jhon-gonzalez-3415b2263/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">LinkedIn</span>
                                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-[#0077b5] transition-colors">
                                            <span className="text-[9px] uppercase font-bold tracking-widest">Conectar</span>
                                            <Linkedin className="w-4 h-4" />
                                        </div>
                                    </Link>
                                    {/* Email */}
                                    <Link
                                        href="mailto:jhonneider1234567@gmail.com"
                                        className="group flex items-center justify-between bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 rounded-2xl px-4 py-3 md:px-5 md:py-3.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                    >
                                        <span className="text-[11px] font-black uppercase tracking-widest text-zinc-200">Email</span>
                                        <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors">
                                            <span className="text-[9px] uppercase font-bold tracking-widest">Escribir</span>
                                            <Mail className="w-4 h-4" />
                                        </div>
                                    </Link>
                                </div>

                                <Link
                                    href="https://wa.me/573004435894"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-white hover:bg-zinc-200 text-black font-black uppercase tracking-widest text-xs py-4 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    Iniciar Conversación
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
