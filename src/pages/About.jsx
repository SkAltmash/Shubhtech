import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Users, Zap, ShieldCheck } from 'lucide-react';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const stats = [
        { label: 'Years Experience', value: '10+', icon: <Award className="text-orange-500" /> },
        { label: 'Happy Clients', value: '1200+', icon: <Users className="text-emerald-500" /> },
        { label: 'MW Installed', value: '15MW', icon: <Zap className="text-blue-500" /> },
        { label: 'Warranty Support', value: '25Yrs', icon: <ShieldCheck className="text-orange-500" /> },
    ];

    return (
        <div className="pt-24 pb-16 bg-white overflow-hidden">
            {/* 1. Hero Section */}
            <section className="container mx-auto px-6 mb-20 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
                >
                    Our Story
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6"
                >
                    Building a <span className="text-orange-500">Stronger</span>, <br />
                    Greener Tomorrow.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed"
                >
                    At **Stambh Solar**, we believe clean energy is the pillar of a modern society.
                    Based in the heart of Lucknow, we are committed to providing robust solar solutions
                    that empower homes and businesses.
                </motion.p>
            </section>

            {/* 2. The "Pillar" Concept (Values) */}
            <section className="bg-slate-50 py-20 mb-20">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative"
                    >
                        <div className="bg-white p-4 rounded-3xl shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/logo.png"
                                alt="About Stambh"
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                        {/* Decorative Green Leaf Blur */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200/50 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 text-emerald-700">The "Stambh" Philosophy</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            In Sanskrit, **Stambh** means "Pillar." It represents stability, reliability, and support.
                            Our solar structures are engineered to be the strongest pillars for your energy needs,
                            ensuring that your transition to green energy is permanent and worry-free.
                        </p>
                        <ul className="space-y-4">
                            {['Premium Tier-1 Solar Panels', 'Expert Civil Engineering', 'Customized Energy Audits'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 3. Stats Grid */}
            <section className="container mx-auto px-6 mb-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-center mb-4">{stat.icon}</div>
                            <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                            <p className="text-slate-500 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. Contact & Location Section */}
            <section className="container mx-auto px-6">
                <div className="bg-emerald-900 rounded-[40px] p-8 lg:p-16 text-white relative overflow-hidden">
                    {/* Background Decorative Sun */}
                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />

                    <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Visit Our Office</h2>
                            <p className="text-emerald-100 mb-10 text-lg">
                                Ready to make the switch? Come talk to our experts in Lucknow. We'll help you
                                calculate your savings and design your perfect system.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg"><MapPin className="text-orange-400" /></div>
                                    <div>
                                        <p className="font-bold">Our Address</p>
                                        <p className="text-emerald-100 opacity-80">Vibhuti Khand, Gomti Nagar, Lucknow, <br /> Uttar Pradesh 226010, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg"><Phone className="text-orange-400" /></div>
                                    <div>
                                        <p className="font-bold">Call Us</p>
                                        <a href="tel:9005105888" className="text-emerald-100 opacity-80 hover:text-white transition-colors">
                                            +91 9005105888
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/10 rounded-lg"><Mail className="text-orange-400" /></div>
                                    <div>
                                        <p className="font-bold">Email Us</p>
                                        <p className="text-emerald-100 opacity-80 underline">hello@stambhsolar.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Map Placeholder or Image */}
                        <div className="h-[300px] lg:h-full min-h-[300px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="text-center p-6">
                                <MapPin size={48} className="mx-auto mb-4 text-orange-400 opacity-50" />
                                <p className="text-emerald-100/50 italic">Google Map View of Gomti Nagar Office Coming Soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;