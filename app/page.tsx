import Navbar from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jhon Gonzalez | Desarrollador Full Stack & IA",
  description: "Portafolio profesional de Jhon Gonzalez. Especialista en Arquitecturas Full Stack, Agentes de IA y Automatizaciones inteligentes que escalan operaciones sin límites.",
};

import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen overflow-x-clip">
      <Background />
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <FeaturedWork />
      <Experience />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
