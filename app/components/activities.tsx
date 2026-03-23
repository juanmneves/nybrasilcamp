import {
    Mic,
    Target,
    Swords,
    Video,
    Camera,
    Sparkles
} from "lucide-react"

const activities = [
    {
        icon: Mic,
        title: "Palestras Exclusivas",
        description: "Metodologia do NEW YORK BRASIL com coaches experientes"
    },
    {
        icon: Target,
        title: "Treinos Técnicos",
        description: "Sessões intensivas de técnica individual e coletiva"
    },
    {
        icon: Swords,
        title: "Treinos Táticos",
        description: "Finalização, ataque x defesa e jogo de posição"
    },
    {
        icon: Video,
        title: "Jogos Filmados",
        description: "Partidas reais com filmagem e análise de desempenho"
    },
    {
        icon: Camera,
        title: "Media Day",
        description: "Fotos e vídeos profissionais para suas redes sociais"
    },
    {
        icon: Sparkles,
        title: "Experiência PRO",
        description: "Alto rendimento com muita diversão garantida"
    },
]

export function Activities() {
    return (
        <section id="atividades" className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Programação
                    </span>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003087] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        O QUE VOCÊ VAI VIVER NESSES <span className="text-[#00AEEF]">3 DIAS</span>
                    </h2>
                    <p className="text-[#4a6fa5] max-w-2xl mx-auto">
                        Uma programação completa para transformar seu jogo
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#00AEEF]/20 hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#00AEEF] to-[#003087] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-[#00AEEF]/20">
                                    <activity.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3
                                    className="text-lg font-bold text-[#003087] mb-2"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {activity.title}
                                </h3>
                                <p className="text-[#4a6fa5] text-sm">{activity.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-14">
                        <p
                            className="text-xl md:text-2xl font-bold text-[#003087]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Tudo isso com a energia de <span className="text-[#00AEEF]">Nova York</span> e a paixão <span className="text-[#00AEEF]">brasileira</span>!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
