"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "O Camp", href: "#sobre" },
    { label: "Quem Somos", href: "#sobre-nos" },
    { label: "O Local", href: "#local" },
    { label: "Edições", href: "#edicoes" },
    { label: "Atividades", href: "#atividades" },
    { label: "FAQ", href: "#faq" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#003087]/95 backdrop-blur-md shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#inicio" className="flex items-center gap-3 group">

                        <Image
                            src="/images/logo.png"
                            alt="Logo NY Brasil Camp"

                            priority
                            className="object-cover"
                            width={60}
                            height={60}
                        />

                        <span
                            className={`text-lg font-bold uppercase  transition-colors ${isScrolled ? "text-white" : "text-white/90"
                                }`}
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            NY Brasil Camp
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors rounded-full ${isScrolled
                                    ? "text-white/80 hover:text-[#00AEEF] hover:bg-white/5"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                    }`}
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden xl:block">
                        <a
                            href="https://wa.me/5541996966867?text=Olá,%20gostaria%20de%20me%20inscrever%20no%20NY%20Brasil%20Camp!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-[#003087] px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-[#00AEEF]/20"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Inscreva-se
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center text-white"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-[400px]" : "max-h-0"
                }`}>
                <div className="bg-[#002366]/98 backdrop-blur-md border-t border-white/10">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-3 text-white/80 hover:text-[#00AEEF] hover:bg-white/5 rounded-lg text-sm font-medium uppercase tracking-wide transition-colors"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={`https://wa.me/5541996966867?text=${encodeURIComponent("Olá, gostaria de me inscrever no NY Brasil Camp!")}`} target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 text-center bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-[#003087] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Inscreva-se Agora
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
