import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NY Brasil Camp | A metodologia do New York chega ao Brasil",
    description: "Participe do NY Brasil Camp e viva a metodologia internacional de futebol. Treinos de alto nível, estrutura profissional e experiência única no Brasil.",
    icons: {
        icon: "/favicon-v2.ico",
    },
    openGraph: {
        title: "NY Brasil Camp | A metodologia do New York chega ao Brasil",
        description: "Participe do NY Brasil Camp e viva a metodologia internacional de futebol. Treinos de alto nível, estrutura profissional e experiência única no Brasil.",
        url: "https://www.nybrasilcamp.com",
        images: [
            {
                url: "/images/escudo.png",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
