import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    // Pro transitions: From transparent to a sleek "Glass" dark finish
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 14, 20, 0)", "rgba(10, 14, 20, 0.85)"]
    );
    const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);
    const borderBottom = useTransform(
        scrollY,
        [0, 100],
        ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.1)"]
    );
    const navPadding = useTransform(scrollY, [0, 100], ["28px", "16px"]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Consulting', path: '/consulting' },
        { name: 'Case Studies', path: '/projects' },
    ];

    // Subhtech Professional Styling
    const activeStyle = "text-cyan-400 font-bold relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-600 after:rounded-full";
    const inactiveStyle = "text-orange-500 font-medium hover:text-white transition-all duration-300";

    return (
        <motion.nav
            style={{
                backgroundColor,
                backdropFilter: backdropBlur,
                borderBottom,
                paddingBlock: navPadding
            }}
            className="fixed top-0 w-full z-[100] transition-all duration-300"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo Section */}
                <NavLink to="/" className="flex items-center group">
                    <motion.img
                        whileHover={{ scale: 1.02 }}
                        src="/logo.png"
                        alt="Subhtech Engineers"
                        className="h-10 lg:h-12  rounded-2xl w-auto transition-all"
                    />
                </NavLink>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            end
                            className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Action Button - Matches Hero Orange */}
                <div className="hidden lg:block">
                    <button className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(249,115,22,0.2)] active:scale-95 flex items-center gap-2">
                        <Zap size={16} /> Free Quote
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-white bg-white/5 rounded-lg border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#0a0e14]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden lg:hidden"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-xl tracking-tight ${isActive ? 'text-cyan-400 font-bold' : 'text-orange-500'}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <hr className="border-white/5" />
                            <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2">
                                <Zap size={18} /> Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;