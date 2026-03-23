"use client"

import Image from "next/image"
import { Users, Trophy, Target, Heart } from "lucide-react"

const stats = [
    { number: "500+", label: "Atletas formados" },
    { number: "10+", label: "Anos de experiência" },
    { number: "15+", label: "Camps realizados" },
    { number: "98%", label: "Satisfação" },
]

const values = [
    {
        icon: Trophy,
        title: "Excelência",
        description: "Metodologia profissional do New York City FC aplicada em cada treino"
    },
    {
        icon: Users,
        title: "Trabalho em Equipe",
        description: "Desenvolvemos habilidades técnicas e valores de cooperação"
    },
    {
        icon: Target,
        title: "Foco no Desenvolvimento",
        description: "Cada atleta recebe atenção individualizada para evoluir"
    },
    {
        icon: Heart,
        title: "Paixão pelo Futebol",
        description: "Criamos memórias inesquecíveis e amor pelo esporte"
    },
]

export function SobreNos() {
    return (
        <section id="sobre-nos" className="py-20 md:py-28 bg-[#001a4d] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00AEEF]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Quem Somos
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Conheça o NY Brasil Camp
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Somos referência em camps de futebol no Brasil, trazendo a metodologia internacional
                        do New York City FC para formar atletas completos.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                            <Image
                                src="/images/03.png"
                                alt="Treino do NY Brasil Camp"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/60 to-transparent" />
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-6 md:right-8 bg-[#00AEEF] text-[#003087] p-6 rounded-xl shadow-xl">
                            <div
                                className="text-4xl font-bold"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                2026
                            </div>
                            <div className="text-sm font-medium uppercase tracking-wide">Edição Especial</div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <h3
                            className="text-2xl md:text-3xl font-bold text-white"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Uma experiência única para jovens atletas
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            O NY Brasil Camp nasceu da parceria entre profissionais do futebol brasileiro
                            e a metodologia do New York City FC. Nossa missão é proporcionar aos jovens atletas
                            uma experiência de formação completa, combinando técnica, tática e valores humanos.
                        </p>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Ao longo dos anos, já formamos centenas de atletas que hoje brilham em clubes
                            profissionais e nas categorias de base. Nosso diferencial está na atenção
                            individualizada e no ambiente de alta performance que criamos em cada camp.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div
                                        className="text-2xl md:text-3xl font-bold text-[#00AEEF]"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {stat.number}
                                    </div>
                                    <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-[#003087]/50 rounded-xl border border-white/10 hover:border-[#00AEEF]/50 transition-all hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-[#00AEEF] to-[#00AEEF]/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <value.icon className="w-7 h-7 text-[#003087]" />
                            </div>
                            <h4
                                className="text-lg font-bold text-white mb-2"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {value.title}
                            </h4>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
