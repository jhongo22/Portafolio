"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    description?: string;
    subtitle?: string;
}

export default function SectionHeader({ title, description, subtitle }: SectionHeaderProps) {
    return (
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-300"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase will-change-transform"
            >
                {title.split('\n').map((line, i) => (
                    <span key={i}>
                        {line}
                        {i < title.split('\n').length - 1 && <br className="md:hidden" />}
                    </span>
                ))}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-24 h-1 bg-red-600 rounded-full mt-2 origin-center will-change-transform"
            />
            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-300 max-w-2xl text-base md:text-lg leading-relaxed pt-2"
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
