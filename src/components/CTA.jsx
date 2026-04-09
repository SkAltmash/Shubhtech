import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-linear-to-br from-[#0a0e14] to-slate-900 rounded-[40px] p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />

                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Start Saving on Your Energy Bills <span className="text-orange-500">Today.</span>
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl">
                            Join hundreds of satisfied customers who have made the switch. Get a free, no-obligation energy audit from our experts.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95"
                        >
                            Get Free Quote <ArrowRight size={24} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
