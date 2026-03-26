"use client"

import { CalendarDays, Users, Shirt, ArrowDown } from "lucide-react"
import Image from "next/image"
export function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/02.png')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#003087]/85 via-[#003087]/70 to-[#003087]" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#00AEEF]/30 rounded-full px-5 py-2 mb-4">
                    <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
                    <span className="text-white/90 text-sm font-medium">Inscrições Abertas - Julho 2026</span>
                </div>

                {/* Logo placeholder */}
                <div className="mb-2 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images/logo.png"
                            alt="Logo NY Brasil Camp"

                            priority
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>

                <h1
                    className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight text-balance"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    <span className="block">NEW YORK</span>
                    <span className="text-[#00AEEF]">BRASIL CAMP 2026</span>
                </h1>

                <p
                    className="text-xl md:text-2xl text-white/90 font-medium mb-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    A metodologia do New York chega ao Brasil!
                </p>

                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
                    3 dias intensos de treinos de elite, palestras, jogos filmados e experiência profissional.
                    Para meninos e meninas <strong className="text-[#00AEEF]">Sub-7 a Sub-20</strong>.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300">
                        <CalendarDays className="w-7 h-7 text-[#00AEEF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                            Curitiba/PR
                        </h3>
                        <p className="text-white/60 text-sm">10, 11 e 12 de julho</p>
                    </div>
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300">
                        <CalendarDays className="w-7 h-7 text-[#00AEEF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                            Gravataí/RS
                        </h3>
                        <p className="text-white/60 text-sm">10 e 11 de julho</p>
                    </div>



                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300">
                        <Users className="w-7 h-7 text-[#00AEEF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                            Categorias
                        </h3>
                        <p className="text-white/60 text-sm">Sub-7 a Sub-20</p>
                    </div>

                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#00AEEF]/50 hover:bg-white/10 transition-all duration-300">
                        <Shirt className="w-7 h-7 text-[#00AEEF] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-base md:text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                            Kit Oficial
                        </h3>
                        <p className="text-white/60 text-sm">Incluso na inscrição</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col items-center gap-4">
                    <a
                        href={`https://wa.me/5541996966867?text=${encodeURIComponent("Olá, gostaria de me inscrever no NY Brasil Camp!")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-white text-[#003087] px-10 md:px-14 py-4 md:py-5 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl shadow-[#00AEEF]/30"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Garanta Sua Vaga Agora
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </a>
                    <p className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
                        Vagas limitadas
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />

                    </p>
                </div>
            </div>


        </section>
    )
}
