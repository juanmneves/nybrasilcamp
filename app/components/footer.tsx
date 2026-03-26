import { Instagram, MessageCircle, ArrowUp, Copyright } from "lucide-react"
import Image from "next/image"
export function Footer() {
    return (
        <footer id="inscricao" className="bg-gradient-to-b from-[#002366] to-[#001a4d] relative">
            {/* CTA Section */}
            <div className="py-20 border-b border-white/10">
                <div className="container mx-auto px-4 text-center">
                    {/* Logo */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            <Image src="/images/logo.png" alt="Logo NY Brasil Camp" width={200} height={200} />

                        </div>
                    </div>

                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        NÃO PERCA ESSA <span className="text-[#00AEEF]">CHANCE</span>
                    </h2>
                    <p className="text-white/70 text-lg mb-2 max-w-2xl mx-auto">
                        Uma oportunidade única de treinar como um profissional de verdade.
                    </p>
                    <p
                        className="text-[#00AEEF] text-xl font-bold mb-10 flex items-center justify-center gap-2"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
                        Vagas limitadas!
                        <span className="w-2 h-2 bg-[#00AEEF] rounded-full animate-pulse" />
                    </p>

                    {/* CTA Button */}
                    <a
                        href={`https://wa.me/5541996966867?text=${encodeURIComponent("Olá, gostaria de fazer minha inscrição no NY Brasil.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl shadow-[#25D366]/30"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <MessageCircle className="w-7 h-7" />
                        Fale com a gente agora
                    </a>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Social */}
                        <div className="flex items-center gap-4">
                            <a
                                href="https://instagram.com/iconsportslatam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-12 h-12 bg-white/5 hover:bg-[#00AEEF] rounded-full flex items-center justify-center transition-all duration-300"
                            >
                                <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                            </a>
                            <a href="https://instagram.com/iconsportslatam"
                                target="_blank" className="text-white/50 text-sm hover:text-[#00AEEF]">@iconsportslatam</a>
                        </div>

                        {/* Copyright */}
                        <div className="flex items-center justify-center gap-2">
                            <p>
                                <Copyright size={14} className="text-white/40" />
                            </p>
                            <p className="text-white/40 text-sm text-center">
                                {new Date().getFullYear()} NY Brasil Camp. Todos os direitos reservados.
                            </p>
                        </div>

                        {/* Back to Top */}
                        <a
                            href="#inicio"
                            className="group w-12 h-12 bg-white/5 hover:bg-[#00AEEF] rounded-full flex items-center justify-center transition-all duration-300"
                        >
                            <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
