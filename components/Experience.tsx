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
        >
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                {/* SECTION HEADER */}
                <SectionHeader
                    title="EXPERIENCIA"
                    subtitle="TRAYECTORIA PROFESIONAL"
                    description="Mi recorrido desarrollando soluciones de software, integrando inteligencia artificial y optimizando operaciones empresariales."
                />

                {/* TABS SWITCHER (Estilo Segmented Control idéntico a Sobre Mí y Proyectos) */}
                <div className="flex justify-center mb-12 md:mb-16">
                    <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl shadow-xl">
                        <button
                            onClick={() => setActiveTab("work")}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                activeTab === "work"
                                    ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Briefcase className="w-4 h-4" />
                            <span>Experiencia Laboral</span>
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                                    activeTab === "work"
                                        ? "bg-black/40 text-white border border-white/20"
                                        : "bg-white/5 text-zinc-500 border border-white/5"
                                }`}
                            >
                                {String(experiences.length).padStart(2, "0")}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab("education")}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                activeTab === "education"
                                    ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <GraduationCap className="w-4 h-4" />
                            <span>Educación & Cursos</span>
                            <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                                    activeTab === "education"
                                        ? "bg-black/40 text-white border border-white/20"
                                        : "bg-white/5 text-zinc-500 border border-white/5"
                                }`}
                            >
                                {String(educationList.length).padStart(2, "0")}
                            </span>
                        </button>
                    </div>
                </div>

                {/* TAB 1: EXPERIENCIA LABORAL */}
                {activeTab === "work" && (
                    <div className="w-full">
                        {/* Selector Rápido para Mobile (Chips horizontales scrolleables) */}
                        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 custom-red-scrollbar">
                            {experiences.map((exp, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={exp.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 ${
                                            isActive
                                                ? "bg-red-500 text-white border-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                                                : "bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        <span className="font-mono text-[10px] opacity-75">#{String(idx + 1).padStart(2, "0")}</span>
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
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" />
                                        </span>
                                        <span>Línea de Tiempo</span>
                                    </div>
                                    <span className="font-mono text-xs font-bold text-red-400">
                                        0{activeIndex + 1} / 0{experiences.length}
                                    </span>
                                </div>

                                {/* Timeline Vertical Cards con destello de fibra óptica */}
                                <div className="relative space-y-3 pt-2">
                                    {/* Riel base continuo */}
                                    <div className="absolute left-[23px] top-6 bottom-6 w-px bg-white/10 pointer-events-none" />

                                    {/* Riel láser activo con destello de luz */}
                                    <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-red-500 via-red-600/70 to-rose-400 shadow-[0_0_12px_rgba(239,68,68,0.9)] pointer-events-none" />

                                    {experiences.map((exp, idx) => {
                                        const isActive = activeIndex === idx;
                                        return (
                                            <button
                                                key={exp.id}
                                                onClick={() => setActiveIndex(idx)}
                                                className={`group flex items-center gap-4 text-left w-full transition-all duration-300 cursor-pointer p-2 rounded-2xl ${
                                                    isActive ? "translate-x-1" : "hover:translate-x-0.5"
                                                }`}
                                            >
                                                {/* Nodo del Timeline con destello */}
                                                <div className="w-[32px] h-[32px] shrink-0 flex items-center justify-center relative z-10">
                                                    <div
                                                        className={`w-[32px] h-[32px] rounded-xl flex items-center justify-center font-mono text-[11px] font-black transition-all duration-300 ${
                                                            isActive
                                                                ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.85)] scale-110 border-2 border-red-300"
                                                                : "bg-black/80 text-zinc-500 border border-white/10 group-hover:border-white/30 group-hover:text-zinc-300"
                                                        }`}
                                                    >
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </div>
                                                </div>

                                                {/* Micro-tarjeta de hito con destello sutil en activo */}
                                                <div
                                                    className={`flex-1 p-4 rounded-2xl transition-all duration-300 border ${
                                                        isActive
                                                            ? "bg-white/10 border-red-500/50 shadow-[0_0_25px_rgba(239,68,68,0.2)] backdrop-blur-xl"
                                                            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-md"
                                                    }`}
                                                >
                                                    <div className="flex items-center justify-between gap-2 mb-1">
                                                        <span
                                                            className={`text-[10px] font-mono uppercase tracking-widest font-bold ${
                                                                isActive ? "text-red-400" : "text-zinc-500"
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
                                                            isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
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

                                                    {/* Mini chips para escaneo instantáneo */}
                                                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                                                        {exp.technologies.slice(0, 3).map((t) => (
                                                            <span
                                                                key={t}
                                                                className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${
                                                                    isActive
                                                                        ? "bg-black/40 text-zinc-300 border-white/10"
                                                                        : "bg-black/20 text-zinc-400 border-white/5"
                                                                }`}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                        {exp.technologies.length > 3 && (
                                                            <span className="text-[9px] font-mono text-zinc-500 self-center">
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
                                                            <span className="text-red-600 font-black text-2xl tracking-tighter">
                                                                #{String(activeIndex + 1).padStart(2, "0")}
                                                            </span>
                                                            <div className="h-px w-8 bg-red-600/30" />
                                                            <span className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-1.5">
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
                                                            <Calendar className="w-3.5 h-3.5 text-red-400" />
                                                            <span className="font-mono text-zinc-300 font-bold">{currentExp.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 bg-black/40 px-3.5 py-1.5 rounded-xl border border-white/10 backdrop-blur-md text-xs">
                                                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                                            <span className="text-zinc-400">{currentExp.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Logros & Responsabilidades */}
                                                <div className="py-6">
                                                    <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                                        <Terminal className="w-3.5 h-3.5 text-red-500/80" />
                                                        <span>Hitos & Logros de Alto Impacto</span>
                                                    </div>

                                                    <div className="space-y-3">
                                                        {currentExp.achievements.map((item, itemIdx) => (
                                                            <div
                                                                key={itemIdx}
                                                                className="flex items-start gap-3 group/item"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover/item:scale-125 transition-transform" />
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
                                                    <Code2 className="w-3.5 h-3.5 text-red-500/80" />
                                                    <span>Stack & Herramientas Clave</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {currentExp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10 hover:border-white/20 transition-all shadow-sm"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Barra de Navegación Inferior */}
                                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                                    <div className="flex items-center gap-2">
                                                        {experiences.map((_, i) => (
                                                            <button
                                                                key={i}
                                                                onClick={() => setActiveIndex(i)}
                                                                aria-label={`Ver experiencia ${i + 1}`}
                                                                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                                                    activeIndex === i
                                                                        ? "w-8 bg-red-500"
                                                                        : "w-3 bg-white/20 hover:bg-white/40"
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={handlePrev}
                                                            aria-label="Experiencia anterior"
                                                            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer active:scale-95"
                                                        >
                                                            <ChevronLeft className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={handleNext}
                                                            aria-label="Siguiente experiencia"
                                                            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer active:scale-95"
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

                {/* TAB 2: EDUCACIÓN & CERTIFICACIONES (Estilo idéntico a Sobre Mí Bento Cards) */}
                {activeTab === "education" && (
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
                                className="group relative rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl overflow-hidden"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/40 border border-white/10 text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/20 transition-colors">
                                            {item.badgeText || (item.category === "educacion" ? "Educación" : "Certificación")}
                                        </span>
                                        {item.period && (
                                            <span className="text-xs font-mono text-zinc-500">
                                                {item.period}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                                        {item.institution}
                                    </p>
                                    {item.description && (
                                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                                    <div className="flex items-center gap-1.5">
                                        <Award className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                                        <span className="font-medium">Certificado / Completado</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
