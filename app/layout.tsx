import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahd Mamdouh | Software Engineer & Creative Technologist",
  description: "Portfolio of Ahd Mamdouh - Software Engineering student from Egypt passionate about tech, fashion, and creativity.",
  keywords: ["Software Engineer", "Web Developer", "Creative Technologist", "Portfolio"],
  authors: [{ name: "Ahd Mamdouh" }],
  openGraph: {
    title: "Ahd Mamdouh | Software Engineer",
    description: "Software Engineering student from Egypt passionate about tech, fashion, and creativity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

