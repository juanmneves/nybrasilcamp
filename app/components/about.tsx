import { Trophy, Target, Users, Earth } from "lucide-react"

const features = [
    {
        icon: Trophy,
        title: "Metodologia de Elite",
        description: "Mesma metodologia que forma talentos nos maiores clubes do mundo"
    },
    {
        icon: Target,
        title: "Desenvolvimento Completo",
        description: "Técnica, tática, físico e mentalidade em 3 dias intensos"
    },
    {
        icon: Users,
        title: "Experiência Real",
        description: "Treine como um profissional de verdade com coaches experientes"
    },
    {
        icon: Earth,
        title: "Oportunidade Internacional",
        description: "Os atletas terão a oportunidade de ser selecionados para estudar e jogar no exterior, nos EUA e na EUROPA."
    }
]

export function About() {
    return (
        <section id="sobre" className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span
                            className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Sobre o Camp
                        </span>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003087] mb-6"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            VIVA A EXPERIÊNCIA <span className="text-[#00AEEF]">NY BRASIL</span>
                        </h2>
                        <p className="text-lg text-[#4a6fa5] max-w-3xl mx-auto leading-relaxed">
                            Imagine vestir o uniforme do New York, treinar com a mesma metodologia que forma os maiores
                            talentos no mundo e voltar para casa mais técnico, tático e confiante.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#00AEEF]/20"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00AEEF]/10 to-[#003087]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-8 h-8 text-[#00AEEF]" />
                                </div>
                                <h3
                                    className="text-xl font-bold text-[#003087] mb-3"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-[#4a6fa5]">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center bg-gradient-to-r from-[#003087] to-[#002366] rounded-3xl p-10 md:p-14">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
                            No NY Brasil Camp, você vive o <strong className="text-[#00AEEF]">futebol moderno</strong>: jogo de posição,
                            decisões rápidas, mentalidade vencedora e diversão garantida.
                        </p>
                        <p
                            className="text-xl md:text-2xl text-white font-semibold"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Desenvolvido para revelar o seu melhor — em campo e fora dele.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
