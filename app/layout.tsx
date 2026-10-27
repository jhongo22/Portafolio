import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jhongo22.github.io"), // Added metadataBase to resolve social image warning
  title: {
    default: "Jhon Gonzalez | Portafolio Full Stack & IA",
    template: "%s | Jhon Gonzalez",
  },
  description: "Portafolio de Jhon Gonzalez. Desarrollador Full Stack y Experto en Automatización con IA. Especializado en crear productos digitales escalables y de alto impacto.",
  keywords: ["Desarrollador Full Stack", "Inteligencia Artificial", "Next.js", "React", "Automatización", "n8n", "Desarrollo Web Colombia", "Medellín"],
  authors: [{ name: "Jhon Gonzalez", url: "https://jhongo22.github.io" }], // Adjust URL if known
  creator: "Jhon Gonzalez",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://tudominio.com", // Placeholder, user can update
    siteName: "Jhon Gonzalez Portafolio",
    title: "Jhon Gonzalez | Desarrollador Full Stack & IA",
    description: "Portafolio profesional. Proyectos de desarrollo web moderno y automatización de procesos con IA.",
    images: [
      {
        url: "/og-image.jpg", // Using a standard naming convention, might need to be created or mapped to avatar
        width: 1200,
        height: 630,
        alt: "Jhon Gonzalez Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhon Gonzalez | Portafolio",
    description: "Desarrollo Web & Automatización IA.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.raiolanetworks.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.raiolanetworks.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
