"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkle, ArrowUpRight } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
    project: Project;
    onImageClick: () => void;
    viewMode: "grid" | "list";
    index: number;
}

const ProjectCard = React.memo(({ project, onImageClick, viewMode, index }: ProjectCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardImageIndex, setCardImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isAutoplayDisabled, setIsAutoplayDisabled] = useState(false);

    // Memoize split description to avoid re-calculating on every render
    const descriptionLines = React.useMemo(() => project.description.split('\n'), [project.description]);
    const shortDescription = React.useMemo(() =>
        descriptionLines[0].replace(/🩺|🚀|📊|🏡|👕|📍|🌮|🧠|🍔|🏥|📝|☁️|📍|🧠|📝|☁️/g, "").trim()
        , [descriptionLines]);

    useEffect(() => {
        if (isFlipped || isAutoplayDisabled || project.images.length <= 1) {
            return;
        }

        const shouldRun = viewMode === "list" || isHovered;
        if (!shouldRun) {
            return;
        }

        const isDesktop = window.matchMedia("(min-width: 768px)").matches;
        if (!isDesktop) return;

        const timer = setTimeout(() => {
            setCardImageIndex((prev) => (prev + 1) % project.images.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [cardImageIndex, isHovered, viewMode, isFlipped, isAutoplayDisabled, project.images.length]);

    const nextCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAutoplayDisabled(true);
        setCardImageIndex((prev: number) => (prev + 1) % project.images.length);
    };

    const prevCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAutoplayDisabled(true);
        setCardImageIndex((prev: number) => (prev - 1 + project.images.length) % project.images.length);
    };

    const toggleFlip = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`relative w-full group ${viewMode === "list" ? "min-h-fit overflow-visible" : "transition-all duration-1000 [perspective:1500px] h-[460px]"}`}>
            <motion.div
                initial={false}
                animate={viewMode === "grid" ? { rotateY: isFlipped ? 180 : 0 } : { rotateY: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`w-full h-full ${viewMode === "grid" ? "[transform-style:preserve-3d]" : ""}`}
            >
                {/* FRONT SIDE */}
                <div
                    className={viewMode === "list"
                        ? `w-full flex flex-col lg:flex-row gap-12 lg:gap-16 transition-all items-center bg-transparent border-none ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`
                        : "absolute inset-0 w-full h-full [backface-visibility:hidden] bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"}
                >
                    {/* Image Container */}
                    <div
                        className={viewMode === "list"
                            ? `relative overflow-hidden cursor-zoom-in group/card-img w-full lg:w-[48%] aspect-video rounded-3xl border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.01] h-fit`
                            : "relative h-[220px] w-full overflow-hidden cursor-zoom-in"}
                        onClick={onImageClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Ver galería ampliada de ${project.title}`}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                onImageClick();
                            }
                        }}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={project.images[cardImageIndex]}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

                        {/* Tech Badges */}
                        <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                            {project.stack.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
                                <button
                                    onClick={prevCardImage}
                                    aria-label={`Imagen anterior de ${project.title}`}
                                    className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={nextCardImage}
                                    aria-label={`Siguiente imagen de ${project.title}`}
                                    className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Content Brief */}
                    <div className={viewMode === "list"
                        ? "flex flex-col flex-grow justify-center py-4 lg:w-[52%]"
                        : "flex flex-col flex-grow p-6 md:p-8 text-left"}>
                        {viewMode === "list" && (
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-red-500 font-black text-xl tracking-tighter">#{String(index + 1).padStart(2, '0')}</span>
                                <div className="h-px w-8 bg-red-500/30" />
                                <span className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-[10px]">{project.category}</span>
                            </div>
                        )}

                        <div className="flex flex-col mb-4">
                            <h3 className={`font-black text-white uppercase tracking-tighter ${viewMode === "list" ? "text-3xl md:text-4xl lg:text-5xl leading-tight" : "text-xl transition-colors group-hover:text-red-400"}`}>
                                {project.title}
                            </h3>
                        </div>

                        <div className={`space-y-4 ${viewMode === "list" ? "max-w-xl" : ""}`}>
                            <p className={`text-zinc-300 leading-relaxed ${viewMode === "list" ? "text-base md:text-lg" : "text-sm line-clamp-2"}`}>
                                {shortDescription}
                            </p>

                            {viewMode === "list" && (
                                <div className="space-y-2 py-4">
                                    {descriptionLines.slice(1).map((line, i) => {
                                        const trimmedLine = line.trim();
                                        if (!trimmedLine) return null;

                                        return (
                                            <div key={i} className="flex gap-3 items-start">
                                                {trimmedLine.startsWith('✅') ? (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                                ) : (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2 shrink-0 opacity-50" />
                                                )}
                                                <span className="text-zinc-300 text-sm md:text-base font-medium">
                                                    {trimmedLine.startsWith('✅') ? trimmedLine.replace('✅', '').trim() : trimmedLine}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {viewMode === "list" && (
                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-white/5 text-zinc-300 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-white/10">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-5 w-full mt-auto">
                            {viewMode === "list" && project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 bg-white text-black hover:bg-red-500 hover:text-white py-4 px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 group/btn-visit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                                >
                                    Visitar Sitio
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn-visit:translate-x-0.5 group-hover/btn-visit:-translate-y-0.5" />
                                </Link>
                            )}

                            {viewMode === "grid" && (
                                <button
                                    onClick={toggleFlip}
                                    className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    Ver Detalles
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* BACK SIDE (Only in Grid View) */}
                {viewMode === "grid" && (
                    <div
                        className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-zinc-900 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 flex flex-col shadow-2xl overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                                {project.title}
                            </h3>
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                <Sparkle className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex-grow space-y-4 overflow-y-auto custom-red-scrollbar pr-2 pb-4">
                            {descriptionLines.map((line, i) => {
                                if (line.trim().startsWith('✅')) {
                                    return (
                                        <div key={i} className="flex gap-3 items-start group/line">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 group-hover/line:scale-125 transition-transform shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                                            <span className="text-zinc-300 text-sm font-medium leading-relaxed">{line.replace('✅', '').trim()}</span>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5 flex gap-4">
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-all shadow-[0_10px_20px_rgba(239,68,68,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Sitio
                                </Link>
                            )}
                            <button
                                onClick={toggleFlip}
                                className="flex-grow flex items-center justify-center gap-2 bg-white/5 text-zinc-300 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>

            {/* Background Glow Effect (Only in Grid View) */}
            {viewMode === "grid" && (
                <div className="absolute -inset-4 bg-red-500/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-20 pointer-events-none" />
            )}
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
