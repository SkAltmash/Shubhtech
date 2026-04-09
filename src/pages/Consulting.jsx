import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, Sun, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consulting = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const benefits = [
        { icon: <Target size={32} className="text-emerald-500" />, title: "Feasibility Analysis", desc: "Detailed site assessment and energy potential modeling." },
        { icon: <TrendingUp size={32} className="text-orange-500" />, title: "Financial Modeling", desc: "ROI calculation, subsidies tracking, and payback period." },
        { icon: <ShieldCheck size={32} className="text-blue-500" />, title: "Regulatory Compliance", desc: "Assistance with net metering and local energy policies." },
        { icon: <Sun size={32} className="text-amber-500" />, title: "System Design", desc: "Customized technical blueprints for maximum efficiency." },
    ];

    return (
        <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    Expert Guidance
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
                >
                    Strategic Solar <span className="text-emerald-600">Consulting</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed"
                >
                    Transitioning to solar power requires careful planning. Our experts are here to guide you through feasibility, design, and financing to ensure optimal returns.
                </motion.p>
            </section>

            {/* Benefits Grid */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#0a0e14] rounded-[40px] p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Plan Your Transition?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Book a free consultation call with our energy experts and find out how much you can save.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-105 active:scale-95">
                            Book Free Audit <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Consulting;
