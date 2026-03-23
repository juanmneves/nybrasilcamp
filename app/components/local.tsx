"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Car, Plane, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const locations = [
    {
        id: "curitiba",
        name: "Curitiba/PR",
        venue: "Campo de Futebol Capão Raso",
        address: "R. Francisco Ader, 806 - Novo Mundo, Curitiba - PR, 81050-140",
        description: "Estrutura de alto nível com campos oficiais, vestiários modernos e área de alimentação completa.",
        features: [
            "3 campos de grama natural",
            "Vestiários climatizados",
            "Área médica equipada",
            "Refeitório no local",
            "Estacionamento gratuito",
            "Arquibancada coberta"
        ],
        access: {
            car: "20 min do centro de Curitiba",
            airport: "25 min do Aeroporto"
        },
        images: [
            { src: "/images/rgm.jpeg", alt: "Campo Gravataí" },
            { src: "/images/rgm2.jpeg", alt: "Estrutura Gravataí" },
            { src: "/images/rgm3.jpeg", alt: "Vista aérea Gravataí" },
        ]
    },
    {
        id: "gravatai",
        name: "Gravataí/RS",
        venue: "RGM Academy",
        address: "R. Nissin Castiel, 883 - Distrito Industrial, Gravataí - RS, 94045-420",
        description: "Infraestrutura completa com campos de grama natural e sintética, vestiários de alto padrão.",
        features: [
            "1 campo sintético",
            "1 campo natural",
            "Estacionamento",
            "Vestiários premium",
            "Ambulância",
            "Cantina"
        ],
        access: {
            car: "10 min do centro",
            airport: "35 min do aeroporto"
        },
        images: [
            { src: "/images/rgm.jpeg", alt: "Campo Gravataí" },
            { src: "/images/rgm2.jpeg", alt: "Estrutura Gravataí" },
            { src: "/images/rgm3.jpeg", alt: "Vista aérea Gravataí" },
        ]
    }
]

export function Local() {
    const [activeLocation, setActiveLocation] = useState(0)
    const [activeImage, setActiveImage] = useState(0)

    const location = locations[activeLocation]
    const images = location.images

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <section className="py-20 bg-[#F5F5F5]" id="local">
            <div className="container mx-auto px-4">

                {/* TABS */}
                <div className="flex justify-center gap-4 mb-10">
                    {locations.map((loc, index) => (
                        <button
                            key={loc.id}
                            onClick={() => {
                                setActiveLocation(index)
                                setActiveImage(0)
                            }}
                            className={`px-6 py-3 rounded-full font-bold ${activeLocation === index
                                ? "bg-[#003087] text-white"
                                : "bg-white text-[#003087]"
                                }`}
                        >
                            <MapPin className="inline w-4 h-4 mr-2" />
                            {loc.name}
                        </button>
                    ))}
                </div>

                {/* GRID */}
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* CAROUSEL */}
                    <div>

                        {/* IMAGEM PRINCIPAL */}
                        <div className="relative aspect-video rounded-xl overflow-hidden">
                            <Image
                                src={images[activeImage].src}
                                alt={images[activeImage].alt}
                                fill
                                className="object-cover"
                            />

                            {/* BOTÕES */}
                            <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
                                <ChevronLeft />
                            </button>

                            <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full">
                                <ChevronRight />
                            </button>

                            {/* CONTADOR */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {activeImage + 1} / {images.length}
                            </div>
                        </div>

                        {/* THUMBNAILS */}
                        <div className="flex gap-2 mt-3">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative flex-1 aspect-video rounded-lg overflow-hidden ${activeImage === index ? "ring-2 ring-blue-500" : "opacity-60"
                                        }`}
                                >
                                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-[#003087]">
                            {location.venue}
                        </h3>

                        <p className="text-gray-600 flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {location.address}
                        </p>

                        <p>{location.description}</p>

                        {/* FEATURES */}
                        <div className="bg-white p-5 rounded-xl shadow">
                            <h4 className="font-bold mb-3">Estrutura</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {location.features.map((f, i) => (
                                    <div key={i} className="flex gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ACESSO */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-[#003087] text-white p-4 rounded-xl">
                                <Car className="mb-2" />
                                <p>{location.access.car}</p>
                            </div>
                            <div className="bg-[#003087] text-white p-4 rounded-xl">
                                <Plane className="mb-2" />
                                <p>{location.access.airport}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#00AEEF]/90 text-[#003087] px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
                            >
                                <MapPin className="w-5 h-5" />
                                Ver no Google Maps
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}