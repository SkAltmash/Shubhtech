import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Commercial Rooftop', capacity: '500 kW', location: 'Industrial Area, UP', image: 'https://images.unsplash.com/photo-1509391366360-1e97b524fda6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Commercial' },
        { id: 2, title: 'Residential Complex', capacity: '50 kW', location: 'Gomti Nagar, Lucknow', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Residential' },
        { id: 3, title: 'Warehouse Solar System', capacity: '1.2 MW', location: 'Kanpur, UP', image: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Industrial' },
        { id: 4, title: 'Agricultural Solar Pump', capacity: '10 kW', location: 'Barabanki, UP', image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Agriculture' },
        { id: 5, title: 'University Campus', capacity: '200 kW', location: 'Lucknow, UP', image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Institutional' },
        { id: 6, title: 'Cold Storage Facility', capacity: '350 kW', location: 'Agra, UP', image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tag: 'Industrial' },
    ];

    return (
        <div className="pt-24 pb-20 bg-white">
            <section className="container mx-auto px-6 mb-16 text-center">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    Case Studies
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
                >
                    Our <span className="text-orange-500">Impact</span> Highlights
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed"
                >
                    Explore a selection of our top solar installations across Uttar Pradesh. From residential homes to mega industrial plants.
                </motion.p>
            </section>

            <section className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-[32px] bg-slate-50 border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-widest">
                                    {project.tag}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-1 line-clamp-1">{project.title}</h3>
                                        <p className="text-slate-500 text-sm">{project.location}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg font-bold text-sm">
                                    Capacity: {project.capacity}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
