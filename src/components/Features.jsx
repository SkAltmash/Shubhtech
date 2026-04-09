import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Leaf } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <Leaf size={32} className="text-emerald-500" />, title: "Eco-Friendly Solutions", desc: "Reduce your carbon footprint with state-of-the-art clean energy solutions that protect our planet." },
        { icon: <Zap size={32} className="text-orange-500" />, title: "High Efficiency", desc: "Maximize your power generation with premium Tier-1 solar panels designed for all weather conditions." },
        { icon: <Shield size={32} className="text-blue-500" />, title: "25-Year Warranty", desc: "Rest easy knowing your investment is protected by our comprehensive long-term warranty and support." }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-slate-900 mb-6"
                    >
                        Powering the Future with <span className="text-orange-500">Confidence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-slate-600 text-lg"
                    >
                        At STAMBH Solar, we don't just build solar systems; we engineer reliable energy pillars for your home and business.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-[32px] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
