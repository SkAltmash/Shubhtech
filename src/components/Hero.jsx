import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Zap, Shield, Cpu, ArrowRight } from 'lucide-react';

const SubhtechHero = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 25 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" }
        })
    };

    return (
        <section className="relative min-h-screen w-full flex items-center bg-[#05070a] overflow-hidden py-10">
            {/* Background Texture & Glows */}
            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, size: '40px 40px' }} />

            {/* Logo-Matched Glows */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">

                {/* Left Side: Content */}
                <div className="text-center lg:text-left">
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-400 font-medium text-xs uppercase tracking-widest mb-6"
                    >
                        <Cpu size={14} />
                        Engineering Excellence & Consulting
                    </motion.div>

                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Empowering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            The Future
                        </span> <br />
                        of <span className="text-orange-500">Solar Energy</span>
                    </motion.h1>

                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Shubhtech combines advanced engineering with strategic consulting to deliver
                        high-performance renewable solutions. We build the pillars of sustainable power.
                    </motion.p>

                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] active:scale-95 flex items-center justify-center gap-2 group">
                            Schedule Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-slate-700 text-white hover:bg-white/5 font-bold rounded-lg transition-all active:scale-95">
                            View Our Projects
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 border-t border-white/5 pt-8"
                    >
                        <div className="flex items-center gap-3">
                            <Shield className="text-cyan-500" size={20} />
                            <div>
                                <p className="text-white text-sm font-bold">ISO Certified</p>
                                <p className="text-slate-500 text-xs text-left">Quality Assured</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="text-orange-500" size={20} />
                            <div>
                                <p className="text-white text-sm font-bold">Expert Engineering</p>
                                <p className="text-slate-500 text-xs text-left">Precise Execution</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Professional Visual */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 flex justify-center"
                    >
                        {/* Glassmorphism Logo Container */}
                        <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] backdrop-blur-3xl border border-white/10 shadow-2xl">
                            <div className="bg-[#0a0e14] p-12 rounded-[1.8rem]">
                                <img
                                    src="/logo.png" // Path to your subhtech logo
                                    alt="Subhtech Engineers and Consultant"
                                    className="w-full max-w-[420px] h-auto"
                                />
                            </div>
                        </div>

                        {/* Floating Tech Metric Card */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-500/20 p-2 rounded-lg">
                                    <Sun className="text-orange-500" size={28} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-tighter">System Efficiency</p>
                                    <p className="text-xl font-black text-white">99.8%</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Orbitals */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-cyan-500/10 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/5 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default SubhtechHero;