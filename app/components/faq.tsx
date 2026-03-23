"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
    {
        question: "Qual a idade para participar?",
        answer: "O camp é destinado para atletas das categorias Sub-7, Sub-9, Sub-11, Sub-12, Sub-13, Sub-15, Sub-17 e Sub-20, meninos e meninas.",
    },
    {
        question: "Precisa de hospedagem?",
        answer: "O camp funciona no formato day use, ou seja, o participante comparece no local nos horários das atividades. Caso precise de hospedagem, entre em contato conosco para indicações de hotéis na região.",
    },
    {
        question: "Como faço para me inscrever?",
        answer: "Clique no botão de inscrição e fale diretamente com a nossa equipe via WhatsApp. Vamos te ajudar com todas as informações e reservar sua vaga!",
    },
    {
        question: "O que está incluso na inscrição?",
        answer: "Kit oficial completo (camisa, short e meião), participação em todas as atividades do camp, certificado de participação e fotos/vídeos profissionais do Media Day.",
    },
    {
        question: "Qual o valor da inscrição?",
        answer: "Entre em contato conosco pelo WhatsApp para saber os valores atualizados e condições especiais de pagamento.",
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span
                        className="inline-block text-[#00AEEF] text-sm font-bold uppercase tracking-widest mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Dúvidas
                    </span>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003087] mb-4"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        PERGUNTAS <span className="text-[#00AEEF]">FREQUENTES</span>
                    </h2>
                    <p className="text-[#4a6fa5] max-w-2xl mx-auto">
                        Tire suas dúvidas sobre o camp
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border-b border-[#e0e0e0] last:border-0 ${openIndex === index ? "bg-[#f8f9fa]" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 md:px-8 py-6 flex items-center gap-4 text-left group"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${openIndex === index
                                        ? "bg-[#00AEEF] text-white"
                                        : "bg-[#00AEEF]/10 text-[#00AEEF]"
                                        }`}>
                                        <HelpCircle className="w-5 h-5" />
                                    </div>
                                    <span
                                        className="flex-1 text-lg font-semibold text-[#003087] group-hover:text-[#00AEEF] transition-colors"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#00AEEF] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"
                                        }`}
                                >
                                    <p className="px-6 md:px-8 pb-6 pl-20 md:pl-24 text-[#4a6fa5] leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center mt-10">
                        <p className="text-[#4a6fa5] mb-4">Ainda tem dúvidas?</p>
                        <a
                            href={`https://wa.me/5541996966867?text=${encodeURIComponent("Olá, gostaria de fazer minha inscrição.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#00AEEF] font-bold hover:underline"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Fale conosco pelo WhatsApp
                            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
