import React from 'react';
import { motion } from 'framer-motion';
import {
    Settings,
    Sun,
    Lightbulb,
    ClipboardCheck,
    Wrench,
    BarChart3,
    ArrowRight,
    Zap,
    Activity
} from 'lucide-react';

const services = [
    {
        title: "Solar EPC Services",
        description: "End-to-end Engineering, Procurement, and Construction for industrial and residential solar plants.",
        icon: <Sun className="text-cyan-400" size={32} />,
        features: ["Rooftop Solar", "Ground Mounted", "Hybrid Systems"]
    },
    {
        title: "Engineering Consulting",
        description: "Expert structural analysis and electrical design to ensure maximum efficiency and safety compliance.",
        icon: <Settings className="text-orange-500" size={32} />,
        features: ["Load Calculation", "Feasibility Studies", "SLD Design"]
    },
    {
        title: "Energy Audits",
        description: "Detailed analysis of your current power consumption to identify wastage and optimize savings.",
        icon: <Activity className="text-cyan-400" size={32} />,
        features: ["Consumption Mapping", "Efficiency Reports", "ROI Projections"]
    },
    {
        title: "Operation & Maintenance",
        description: "Comprehensive AMC services including panel cleaning, health checks, and real-time monitoring.",
        icon: <Wrench className="text-orange-500" size={32} />,
        features: ["Panel Cleaning", "Inverter Health Check", "Performance Upgrades"]
    }
];

const ServicesPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#05070a] text-white min-h-screen pt-32 pb-20 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="max-w-3xl mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Engineering <span className="text-cyan-400">Better Power</span> Solutions.
                    </motion.h1>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        From initial site assessment to final grid synchronization, Subhtech provides
                        data-driven engineering solutions that bridge the gap between nature and technology.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8 mb-32"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="mb-6 p-4 bg-black/40 inline-block rounded-2xl border border-white/5 shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button className="flex items-center gap-2 text-cyan-400 font-bold group-hover:gap-4 transition-all">
                                Learn More <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* The Process Section */}
                <div className="bg-gradient-to-b from-white/5 to-transparent rounded-[3rem] p-12 border border-white/10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">The Subhtech Workflow</h2>
                        <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", label: "Consultation", desc: "Understanding energy goals." },
                            { step: "02", label: "Site Audit", desc: "Technical feasibility study." },
                            { step: "03", label: "Engineering", desc: "Custom system design." },
                            { step: "04", label: "Activation", desc: "Installation & Syncing." }
                        ].map((item, index) => (
                            <div key={index} className="relative text-center">
                                <div className="text-5xl font-black text-white/5 mb-[-25px] select-none">{item.step}</div>
                                <h4 className="text-lg font-bold text-cyan-400 mb-2">{item.label}</h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-32 p-12 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[2.5rem] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10"
                        style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
                    <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Ready to Engineer Your Energy Independence?</h2>
                    <p className="text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
                        Join 500+ businesses and homeowners who have slashed their electricity bills with Subhtech.
                    </p>
                    <button className="px-10 py-4 bg-white text-blue-900 font-black rounded-xl hover:bg-orange-500 hover:text-white transition-all shadow-2xl relative z-10 flex items-center gap-2 mx-auto">
                        <Zap size={20} /> Request Free Site Audit
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;