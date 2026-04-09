import { motion } from "framer-motion";
import "./HomeLogosSection.css";

const LOGOS = [
    { src: "/logos/Adani.webp", alt: "Adani" },
    { src: "/logos/tata.png", alt: "Tata" },
    { src: "/logos/ult.jpeg", alt: "ULT" },
    { src: "/logos/waree.png", alt: "Waree" },
    { src: "/logos/vguard.webp", alt: "Vguard" },
    { src: "/logos/Polycab.png", alt: "Polycab" }
];

// Triple for seamless infinite loop on all screen sizes
const displayLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export default function HomeLogosSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center max-w-3xl mb-12">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    Our Partners
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-slate-900"
                >
                    Trusted by <span className="text-orange-500">Industry Leaders</span>
                </motion.h2>
            </div>

            {/* Full-width scrolling strip */}
            <div className="logos-wrapper relative">
                {/* Fade edges matching bg-white */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-linear-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-linear-to-l from-white to-transparent" />

                <div className="logos-track-container overflow-hidden">
                    <div className="logos-track py-4">
                        {displayLogos.map((logo, i) => (
                            <div key={i} className="logo-item shrink-0 flex items-center justify-center px-10 h-24">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-16 w-auto object-contain mix-blend-multiply opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}