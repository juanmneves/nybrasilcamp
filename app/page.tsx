import Image from "next/image";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { SobreNos } from "./components/sobre-nos";
import { Local } from "./components/local";
import { Editions } from "./components/editions";
import { Activities } from "./components/activities";
import { Kit } from "./components/kit";
import { FAQ } from "./components/faq";
import { Footer } from "./components/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <SobreNos />
                <Local />
                <Editions />
                <Activities />
                <Kit />
                <FAQ />
                <Footer />
            </main>
        </>
    );
}
