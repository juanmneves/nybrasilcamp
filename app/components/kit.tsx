import { Shirt, CheckCircle, Award, Camera } from "lucide-react"
import Image from "next/image"

const kitItems = [
    { icon: Shirt, text: "Camisa oficial NY Brasil Camp" },
    { icon: Shirt, text: "Short oficial" },
    { icon: Shirt, text: "Meião oficial" },
    { icon: Award, text: "Certificado de participação" },
    { icon: Camera, text: "Fotos e vídeos do Media Day" },
]

export function Kit() {
    return (
        <section id="kit" className="py-24 bg-[#003087] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Kit Visual */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative bg-gradient-to-br from-[#00AEEF]/20 to-transparent rounded-3xl p-10 md:p-14 flex items-center justify-center border border-[#00AEEF]/20">
                                {/* Main Icon */}
                                <div className="text-center">
                                    {/* Kit Visual */}
                                    <div className="relative order-2 lg:order-1">
                                        <div className="relative rounded-3xl overflow-hidden">
                                            <Image
                                                src="/images/kit.jpeg"
                                                alt="Kit Oficial NY Brasil Camp"
                                                width={600}
                                                height={600}
                                                className="object-contain w-full"
                                            />
                                        </div>
                                    </div>
                                    <p
                                        className="text-white text-lg font-semibold mt-8 uppercase tracking-wider"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        Kit Oficial
                                    </p>
                                    <p
                                        className="text-[#00AEEF] text-2xl md:text-3xl font-bold"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        NY BRASIL CAMP
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <span
                                className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Incluído na Inscrição
                            </span>
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                KIT OFICIAL <span className="text-[#00AEEF]">INCLUSO</span>
                            </h2>

                            <p className="text-white/70 text-lg mb-8">
                                Todo participante leva para casa itens exclusivos do camp:
                            </p>

                            <ul className="space-y-4 mb-10">
                                {kitItems.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#00AEEF]/20 transition-colors">
                                            <CheckCircle className="w-6 h-6 text-[#00AEEF]" />
                                        </div>
                                        <span className="text-white text-lg">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-white/5 rounded-2xl p-6 border border-[#00AEEF]/20">
                                <p
                                    className="text-[#00AEEF] font-bold text-lg"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    + Memórias inesquecíveis, novos amigos e o orgulho de treinar como um PRO de verdade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
