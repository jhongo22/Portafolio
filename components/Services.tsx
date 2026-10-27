import React from "react";
import {
    Code2,
    Cpu,
    Globe,
    Layers,
    Zap
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "./SectionHeader";

const services = [
    {
        title: "Desarrollo Web Full Stack",
        description: "Creación de aplicaciones web modernas, rápidas y escalables con arquitecturas limpias y seguras.",
        iconName: "Globe",
        color: "text-red-500",
        lottiePath: "/SVG/Desarrollo web.json"
    },
    {
        title: "Agentes de IA",
        description: "Creación de agentes de IA personalizados para automatizar tareas complejas y optimizar flujos de trabajo.",
        iconName: "Cpu",
        color: "text-red-500",
        lottiePath: "/SVG/Inteligencia artificial.json"
    },
    {
        title: "Automatización de procesos",
        description: "Automatización de procesos repetitivos y tareas operativas para reducir tiempos e impulsar la productividad.",
        iconName: "Zap",
        color: "text-red-500",
        lottiePath: "/SVG/Workflows.json"
    },
    {
        title: "Integraciones API & CRM",
        description: "Conexión y sincronización de servicios externos para unificar datos y automatizar operaciones multi-plataforma.",
        iconName: "Code2",
        color: "text-red-500",
        lottiePath: "/SVG/Integraciones.json"
    },
    {
        title: "Bases de datos & Analítica",
        description: "Diseño, optimización y gestión de bases de datos relacionales y no relacionales preparadas para escalar.",
        iconName: "Layers",
        color: "text-red-500",
        lottiePath: "/SVG/Base de datos.json"
    },
    {
        title: "Implementación de MCP",
        description: "Uso del Model Context Protocol para conectar herramientas, servidores y datos con LLMs en tiempo real.",
        iconName: "Layers",
        color: "text-red-500",
        lottiePath: "/SVG/MCP.json"
    }
] as const;

export default function Services() {
    return (
        <section id="habilidades" className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <SectionHeader
                    title="HABILIDADES"
                    description="Soluciones tecnológicas a medida, enfocadas en la calidad del código, la escalabilidad y la experiencia del usuario final."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            iconName={service.iconName}
                            color={service.color}
                            lottiePath={service.lottiePath}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
