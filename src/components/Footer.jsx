import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="bg-[#0a0e14] text-slate-300 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-900/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={footerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                >
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <NavLink to="/" className="inline-block">
                            <img src="/logo.png" alt="STAMBH Logo" className="h-12 w-auto rounded-xl bg-white/5 p-1" />
                        </NavLink>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering a sustainable future with cutting-edge solar energy solutions. From robust infrastructure to smart energy management, we deliver excellence.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"><FaFacebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"><FaTwitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"><FaInstagram size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"><FaLinkedin size={18} /></a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-white text-lg font-bold">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Consulting', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors"></span>
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-white text-lg font-bold">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-orange-500 shrink-0 mt-1" />
                                <span className="text-slate-400">Vibhuti Khand, Gomti Nagar,<br />Lucknow, UP 226010, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-orange-500 shrink-0" />
                                <a href="tel:+919005105888" className="text-slate-400 hover:text-white transition-colors">+91 90051 05888</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-orange-500 shrink-0" />
                                <a href="mailto:hello@stambhsolar.com" className="text-slate-400 hover:text-white transition-colors">hello@stambhsolar.com</a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Newsletter / CTA */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-white text-lg font-bold">Stay Updated</h4>
                        <p className="text-slate-400">Subscribe to our newsletter for the latest updates on solar tech.</p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-slate-500 transition-colors"
                            />
                            <button type="submit" className="w-full py-3 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all flex items-center justify-center gap-2">
                                <Zap size={18} /> Subscribe
                            </button>
                        </form>
                    </motion.div>
                </motion.div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {currentYear} STAMBH Solar. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
