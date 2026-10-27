"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const NAV_ITEMS: MegaMenuItem[] = [
        { id: 1, label: "Inicio", link: "#inicio" },
        { id: 2, label: "Stack", link: "#stack" },
        { id: 3, label: "Habilidades", link: "#habilidades" },
        { id: 4, label: "Sobre Mí", link: "#sobre-mi" },
        { id: 5, label: "Experiencia", link: "#experiencia" },
        { id: 6, label: "Proyectos", link: "#proyectos" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between md:justify-center p-4 md:p-6 transition-all duration-300">
            {/* Mobile Logo/Brand (Optional, currently just for spacing/toggle) */}
            <div className="md:hidden flex items-center">
                <span className="text-white font-black text-xl tracking-tighter">PORTAFOLIO</span>
            </div>

            {/* Hamburger Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative"
                aria-label="Toggle Menu"
            >
                <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 bg-white rounded-full"
                />
                <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 bg-white rounded-full"
                />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <MegaMenu items={NAV_ITEMS} />
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {NAV_ITEMS.map((item, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    key={item.id}
                                    href={item.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-black text-white/70 hover:text-white transition-colors uppercase tracking-tighter"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default React.memo(Navbar);
