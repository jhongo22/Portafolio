"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contacto" className="w-full pt-20 pb-10 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                {/* CTA Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 mb-20 gap-10">
                    <div className="max-w-2xl text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                            ¿Tienes un proyecto <br />
                            <span className="text-white/30">en mente?</span>
                        </h2>
                        <p className="text-zinc-300 text-base md:text-lg leading-snug">
                            Estoy disponible para nuevos proyectos y colaboraciones interesantes.
                            Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                        </p>
                    </div>
                    <Link
                        href="https://wa.me/573004435894"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center overflow-hidden transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg"
                    >
                        <span className="relative px-10 py-5 bg-white text-black font-black uppercase tracking-tighter text-xl rounded-sm hover:bg-zinc-200 transition-all flex items-center gap-3">
                            Hablemos hoy
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-black text-white tracking-tighter uppercase">
                            Jhon Gonzalez
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Desarrollo Full Stack y automatizaciones con IA orientadas a escalar operaciones digitales con excelencia técnica.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, link: "https://github.com/jhongo22/", label: "Perfil de GitHub de Jhon Gonzalez" },
                                { icon: Linkedin, link: "https://www.linkedin.com/in/jhon-gonzalez-3415b2263/", label: "Perfil de LinkedIn de Jhon Gonzalez" },
                                { icon: Mail, link: "mailto:jhonneider1234567@gmail.com", label: "Enviar correo a Jhon Gonzalez" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.link}
                                    target={social.link.startsWith("http") ? "_blank" : undefined}
                                    rel={social.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={social.label}
                                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Navegación</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Inicio", href: "#inicio" },
                                { name: "Stack", href: "#stack" },
                                { name: "Habilidades", href: "#habilidades" },
                                { name: "Sobre Mí", href: "#sobre-mi" },
                                { name: "Experiencia", href: "#experiencia" },
                                { name: "Proyectos", href: "#proyectos" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-400 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Especialidad</h3>
                        <ul className="space-y-3 text-xs text-zinc-400">
                            <li>Desarrollo Web Full Stack</li>
                            <li>Agentes de Inteligencia Artificial</li>
                            <li>Automatización de Procesos (n8n)</li>
                            <li>Bases de Datos & Analítica</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-black mb-6 uppercase text-xs tracking-widest">Ubicación</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Medellín, Antioquia <br />
                            Colombia <br />
                            <span className="text-red-400 font-bold text-xs uppercase tracking-wider mt-2 inline-block">Remoto / Híbrido</span>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-zinc-400 text-xs">
                        © {currentYear} Jhon Gonzalez. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-xs text-zinc-400">
                        <span className="text-zinc-400">Diseñado & Construido con Next.js y Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
