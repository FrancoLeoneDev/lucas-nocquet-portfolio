import type { Metadata } from "next";
import { Chakra_Petch, Outfit } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Nocquet | 3D Artist & Game Designer",
  description:
    "Portfolio of Lucas Nocquet — 3D Artist & Game Designer of Virtual Simulators. High quality 3D models, texturing & interactive gaming experiences.",
  keywords: [
    "3D Artist",
    "Game Designer",
    "Virtual Simulators",
    "Unity",
    "Maya",
    "Blender",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
