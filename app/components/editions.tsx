import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react"

const editions = [
    {
        city: "Curitiba",
        state: "PR",
        dates: "4, 5 e 6 de julho",
        location: "Campo de Futebol Capão Raso",
        address: "Curitiba, Paraná",
        featured: true,
        status: "Primeira Edição",
        duracao: "3 dias"
    },
    {
        city: "Gravataí",
        state: "RS",
        dates: "12 e 13 de julho",
        location: "RGM Academy",
        address: "Gravataí, Rio Grande do Sul",
        featured: true,
        status: "Primeira Edição",
        duracao: "2 dias"
    },

]

export function Editions() {
    return (
        <section id="edicoes" className="py-24 bg-[#003087] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00AEEF]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Datas e Locais
                    </span>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        ESCOLHA SUA <span className="text-[#00AEEF]">EDIÇÃO</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Selecione a data e local que melhor se encaixam na sua agenda
                    </p>
                </div>

                {/* Edition Cards */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {editions.map((edition, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${edition.featured
                                ? "bg-gradient-to-br from-[#00AEEF]/20 to-[#00AEEF]/5"
                                : "bg-white/5"
                                }`}
                        >
                            {/* Top Border Accent */}
                            <div className={`h-1.5 ${edition.featured ? "bg-[#00AEEF]" : "bg-white/20"}`} />

                            <div className="p-8 md:p-10">
                                {/* Status Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${edition.featured
                                            ? "bg-[#00AEEF] text-[#003087]"
                                            : "bg-white/10 text-white/70"
                                            }`}
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {edition.featured && <span className="w-1.5 h-1.5 bg-[#003087] rounded-full" />}
                                        {edition.status}
                                    </span>
                                </div>

                                {/* City */}
                                <h3
                                    className="text-4xl md:text-5xl font-bold text-white mb-1"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {edition.city}
                                </h3>
                                <p className="text-[#00AEEF] text-xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                                    {edition.state}
                                </p>

                                {/* Details */}
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center">
                                            <CalendarDays className="w-5 h-5 text-[#00AEEF]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{edition.dates}</p>
                                            <p className="text-white/50 text-sm">Julho 2026</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-[#00AEEF]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{edition.location}</p>
                                            <p className="text-white/50 text-sm">{edition.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-[#00AEEF]" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{edition.duracao} de imersão</p>
                                            <p className="text-white/50 text-sm">Formato day use</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/5541996966867?text=${encodeURIComponent(`Olá, gostaria de me inscrever no NY Brasil Camp - Edição ${edition.city}/${edition.state} (${edition.dates})!`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${edition.featured
                                        ? "bg-[#00AEEF] text-[#003087] hover:bg-white"
                                        : "bg-white/10 text-white hover:bg-[#00AEEF] hover:text-[#003087]"
                                        }`}
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Quero essa edição
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bonus Info */}
                <div className="text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/10">
                        <p className="text-white">
                            Todos recebem <strong className="text-[#00AEEF]">kit oficial NY Brasil</strong>
                        </p>
                        <span className="hidden md:block w-px h-6 bg-white/20" />
                        <p className="text-white/60 text-sm">
                            Camisa + Short + Meião + Certificado + Fotos e Vídeos
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
