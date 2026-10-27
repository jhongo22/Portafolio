"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    Calendar,
    MapPin,
    Terminal,
    Code2,
    Building2,
    ChevronLeft,
    ChevronRight,
    Award
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experiences, educationList } from "@/data/experience";

export default function Experience() {
    const [activeTab, setActiveTab] = useState<"work" | "education">("work");
    const [activeIndex, setActiveIndex] = useState(0);

    const currentExp = experiences[activeIndex] || experiences[0];

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    };

    return (
        <section
            id="experiencia"
            className="w-full py-24 relative z-10 text-zinc-300"
            aria-label="Experiencia y Educación"
        >
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                {/* SECTION HEADER */}
                <SectionHeader
                    title="EXPERIENCIA"
                    description="Recorrido desarrollando soluciones de software, arquitecturas full-stack y agentes de IA para optimizar operaciones empresariales."
                />

                {/* TABS SWITCHER (Segmented Control accesible y consistente) */}
                <div className="flex justify-center mb-12 md:mb-16">
                    <div
                        role="tablist"
                        aria-label="Categorías de trayectoria"
                        className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl shadow-xl"
                    >
                        <button
                            id="tab-work"
                            role="tab"
                            aria-selected={activeTab === "work"}
                            aria-controls="panel-work"
                            tabIndex={activeTab === "work" ? 0 : -1}
                            onClick={() => setActiveTab("work")}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                                activeTab === "work"
                                    ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Briefcase className="w-4 h-4 shrink-0" />
                            <span>Experiencia Laboral</span>
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                                    activeTab === "work"
                                        ? "bg-black/40 text-white border border-white/20"
                                        : "bg-white/5 text-zinc-400 border border-white/5"
                                }`}
                            >
                                {String(experiences.length).padStart(2, "0")}
                            </span>
                        </button>
                        <button
                            id="tab-education"
                            role="tab"
                            aria-selected={activeTab === "education"}
                            aria-controls="panel-education"
                            tabIndex={activeTab === "education" ? 0 : -1}
                            onClick={() => setActiveTab("education")}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                                activeTab === "education"
                                    ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <GraduationCap className="w-4 h-4 shrink-0" />
                            <span>Educación & Cursos</span>
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                                    activeTab === "education"
                                        ? "bg-black/40 text-white border border-white/20"
                                        : "bg-white/5 text-zinc-400 border border-white/5"
                                }`}
                            >
                                {String(educationList.length).padStart(2, "0")}
                            </span>
                        </button>
                    </div>
                </div>

                {/* TAB 1: EXPERIENCIA LABORAL */}
                {activeTab === "work" && (
                    <div
                        id="panel-work"
                        role="tabpanel"
                        aria-labelledby="tab-work"
                        className="w-full"
                    >
                        {/* Selector para Mobile (Chips horizontales scrolleables con min touch target 44px) */}
                        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 custom-red-scrollbar">
                            {experiences.map((exp, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={exp.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                                            isActive
                                                ? "bg-red-500 text-white border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                                                : "bg-white/5 text-zinc-300 border-white/10 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        <span className="font-mono text-[10px] opacity-80">#{String(idx + 1).padStart(2, "0")}</span>
                                        <span>{exp.company}</span>
                                        {exp.isCurrent && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Layout Maestro Desktop: Columna Timeline + Columna Dossier */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* COLUMNA IZQUIERDA: Interactive Timeline Rail (5 columnas) */}
                            <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
                                {/* Encabezado del riel */}
                                <div className="flex items-center justify-between pb-3 border-b border-white/10 px-2">
                                    <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
                                        </span>
                                        <span>Línea de Tiempo</span>
                                    </div>
                                    <span className="font-mono text-xs font-bold text-red-400">
                                        0{activeIndex + 1} / 0{experiences.length}
                                    </span>
                                </div>

                                {/* Timeline Vertical Cards con eje central continuo */}
                                <div className="relative space-y-3 pt-2">
                                    {/* Riel base continuo (alineado al centro del nodo en 24px) */}
                                    <div className="absolute left-[24px] top-6 bottom-6 w-px bg-white/10 pointer-events-none" />

                                    {/* Riel de acento luminoso con paleta roja de la marca */}
                                    <div className="absolute left-[24px] top-6 bottom-6 w-px bg-gradient-to-b from-red-500 via-red-600/70 to-red-500/20 shadow-[0_0_12px_rgba(239,68,68,0.7)] pointer-events-none" />

                                    {experiences.map((exp, idx) => {
                                        const isActive = activeIndex === idx;
                                        return (
                                            <button
                                                key={exp.id}
                                                onClick={() => setActiveIndex(idx)}
                                                className="group flex items-center gap-4 text-left w-full transition-all duration-300 cursor-pointer p-2 rounded-2xl relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                            >
                                                {/* Nodo del Timeline perfectamente anclado a la columna */}
                                                <div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center relative z-10">
                                                    <div
                                                        className={`w-[32px] h-[32px] rounded-xl flex items-center justify-center font-mono text-[11px] font-black transition-all duration-300 ${
                                                            isActive
                                                                ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.85)] scale-110 border-2 border-red-300 ring-4 ring-red-500/20"
                                                                : "bg-black/90 text-zinc-400 border border-white/10 group-hover:border-white/30 group-hover:text-white"
                                                        }`}
                                                    >
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </div>
                                                </div>

                                                {/* Micro-tarjeta de hito: animación solo en el contenedor interno para no desfasar el nodo */}
                                                <div
                                                    className={`flex-1 p-4 rounded-2xl transition-all duration-300 border ${
                                                        isActive
                                                            ? "bg-white/10 border-red-500/40 shadow-[0_0_25px_rgba(239,68,68,0.15)] backdrop-blur-xl translate-x-1"
                                                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md group-hover:translate-x-0.5"
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between gap-2 mb-1">
                                                        <span
                                                            className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                                                                isActive ? "text-red-400" : "text-zinc-400"
                                                            }`}
                                                        >
                                                            {exp.period}
                                                        </span>
                                                        {exp.isCurrent && (
                                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/30">
                                                                <span className="relative flex h-1 w-1">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                                                    <span className="relative inline-flex rounded-full h-1 w-1 bg-red-500" />
                                                                </span>
                                                                Actual
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h4
                                                        className={`text-sm font-black uppercase tracking-tight transition-colors line-clamp-1 ${
                                                            isActive ? "text-white" : "text-zinc-200 group-hover:text-white"
                                                        }`}
                                                    >
                                                        {exp.company}
                                                    </h4>

                                                    <p
                                                        className={`text-xs transition-colors mt-0.5 font-medium line-clamp-1 ${
                                                            isActive ? "text-zinc-300" : "text-zinc-400"
                                                        }`}
                                                    >
                                                        {exp.role}
                                                    </p>

                                                    {/* Mini chips con alto contraste */}
                                                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                                                        {exp.technologies.slice(0, 3).map((t) => (
                                                            <span
                                                                key={t}
                                                                className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${
                                                                    isActive
                                                                        ? "bg-black/50 text-zinc-300 border-white/15"
                                                                        : "bg-black/30 text-zinc-400 border-white/5"
                                                                }`}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 3 && (
                                                            <span className="text-[9px] font-mono text-zinc-400 self-center">
                                                                +{exp.technologies.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* COLUMNA DERECHA: Executive Dossier Master Card (7 columnas) */}
                            <div className="lg:col-span-7 w-full">
                                <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[580px]">
                                    {/* Sutil halo ambiental rojo */}
                                    <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/5 blur-[100px] pointer-events-none -z-10" />

                                    {/* Morphing Card Content */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentExp.id}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -12 }}
                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                            className="flex flex-col justify-between h-full"
                                        >
                                            <div>
                                                {/* Header de la tarjeta */}
                                                <div className="pb-6 border-b border-white/10">
                                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-red-500 font-black text-2xl tracking-tighter">
                                                                #{String(activeIndex + 1).padStart(2, "0")}
                                                            </span>
                                                            <div className="h-px w-8 bg-red-500/30" />
                                                            <span className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-1.5">
                                                                <Building2 className="w-3.5 h-3.5 text-red-500" />
                                                                TRAYECTORIA PROFESIONAL
                                                            </span>
                                                        </div>

                                                        {currentExp.isCurrent && (
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-red-500/10 text-red-400 border border-red-500/30">
                                                                <span className="relative flex h-1.5 w-1.5">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                                                                </span>
                                                                Rol Actual
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-black uppercase tracking-tighter leading-tight">
                                                        {currentExp.company}
                                                    </h3>
                                                    <p className="text-red-400 font-bold text-base md:text-lg mt-1">
                                                        {currentExp.role}
                                                    </p>

                                                    {/* Metadata Pills */}
                                                    <div className="flex flex-wrap items-center gap-2.5 mt-4">
                                                        <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10 backdrop-blur-md text-xs">
                                                            <Calendar className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                                            <span className="font-mono text-zinc-300 font-bold">{currentExp.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10 backdrop-blur-md text-xs">
                                                            <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                                                            <span className="text-zinc-300 font-medium">{currentExp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Logros & Responsabilidades */}
                                                <div className="py-6">
                                                    <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                                        <Terminal className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                                        <span>Hitos & Logros de Alto Impacto</span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        {currentExp.achievements.map((item, itemIdx) => (
                                                            <div
                                                                key={itemIdx}
                                                                className="flex items-start gap-3 group/item"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.7)] group-hover/item:scale-125 transition-transform" />
                                                                <span className="text-zinc-300 text-sm md:text-[15px] font-normal leading-relaxed">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Stack Tecnológico y Controles de Navegación */}
                                            <div className="pt-6 border-t border-white/10">
                                                <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                                                    <Code2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                                                    <span>Stack & Herramientas Clave</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {currentExp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white rounded-lg text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-white/20 transition-all shadow-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Barra de Navegación Inferior */}
                                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                    <div className="flex items-center gap-2 min-h-[44px]">
                                                        {experiences.map((exp, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => setActiveIndex(i)}
                                                                aria-label={`Ver experiencia ${i + 1}: ${exp.company}`}
                                                                className={`h-2 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                                                                    activeIndex === i
                                                                        ? "w-8 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                                                                        : "w-3 bg-white/20 hover:bg-white/40"
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={handlePrev}
                                                            aria-label="Experiencia anterior"
                                                            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                                        >
                                                            <ChevronLeft className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            aria-label="Siguiente experiencia"
                                                            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                                        >
                                                            <ChevronRight className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: EDUCACIÓN & CERTIFICACIONES (Bento Grid nivelado al estándar visual) */}
                {activeTab === "education" && (
                    <div
                        id="panel-education"
                        role="tabpanel"
                        aria-labelledby="tab-education"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {educationList.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group relative rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden min-h-[280px]"
                                >
                                    {/* Ambient subtle glow */}
                                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-red-500/5 group-hover:bg-red-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-4">
                                            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/40 border border-white/10 text-zinc-300 group-hover:border-white/20 transition-colors">
                                                {item.badgeText || (item.category === "educacion" ? "Educación" : "Certificación")}
                                            </span>
                                            {item.period && (
                                                <span className="text-xs font-mono text-zinc-400 font-bold">
                                                    {item.period}
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs font-mono uppercase tracking-wider text-red-400 mb-3 font-bold">
                                            {item.institution}
                                        </p>
                                        {item.description && (
                                            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                                        <div className="flex items-center gap-1.5">
                                            <Award className="w-4 h-4 text-red-500/80 group-hover:text-red-400 transition-colors shrink-0" />
                                            <span className="font-medium text-zinc-300">Certificado / Completado</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    );
}
