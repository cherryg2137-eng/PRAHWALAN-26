import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import aboutBg from '../assets/about-bg.png';
import faqBg from '../assets/faq_bg.png';
import modulesBg from '../assets/modules_bg.png';
import modulesNewBg from '../assets/modules_new_bg.png';
import modulesBgFinal from '../assets/modules_bg_final.jpg';
import modulesAlienBg from '../assets/modules_alien_bg.jpg';
import modules4kBg from '../assets/modules_4k_bg.jpg';
import modulesFinalV2 from '../assets/modules_final_v2.png';

// Import Module Detail Images
import imgWebDev from '../assets/generated/module_web_dev_1767207732136.png';
import imgCyberSec from '../assets/generated/module_cyber_security_1767207752536.png';
import imgML from '../assets/generated/module_machine_learning_1767207769069.png';
import imgIoT from '../assets/generated/module_iot_1767207786926.png';
import imgWeb3 from '../assets/generated/module_web3_1767207806213.png';
import imgAppDev from '../assets/generated/module_app_dev_1767207823039.png';

// --- Shared Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// --- Components ---

const Section = ({ id, title, children, className = "", ...props }) => (
    <section id={id} className={`min-h-screen py-24 relative z-10 flex flex-col justify-center ${className} bg-bg-dark`} {...props}>
        <div className="container mx-auto px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent blur-sm"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                        {title}
                    </h2>
                </motion.div>
                {children}
            </motion.div>
        </div>
    </section>
);

export const About = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = React.useState(false);

    const mouseX = useTransform(x, [0, window.innerWidth], [-40, 40]);
    const mouseY = useTransform(y, [0, window.innerHeight], [-40, 40]);

    const handleMouseMove = (event) => {
        x.set(event.clientX);
        y.set(event.clientY);
    };

    return (
        <div
            id="about"
            className="min-h-screen py-24 relative z-10 flex flex-col justify-center items-center bg-bg-dark overflow-hidden group/section"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image with Floating Effect and 360 Rotation */}
            <motion.div
                style={{ x: mouseX, y: mouseY }}
                className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%] z-0"
                animate={{
                    filter: isHovered ? "brightness(1.4) contrast(1.1)" : "brightness(0.6) contrast(1)",
                    scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Rotating Lighting Overlay - 360 Animation */}
                <div className="absolute inset-0 z-10 opacity-30 mix-blend-overlay">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[200%] h-[200%] -left-[50%] -top-[50%] bg-gradient-to-tr from-transparent via-violet-500/20 to-transparent"
                    />
                </div>

                {/* Additional Light Burst on Hover */}
                <motion.div
                    className="absolute inset-0 z-20 bg-gradient-to-b from-violet-500/20 via-transparent to-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                ></motion.div>

                <motion.div
                    className="w-full h-full"
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <img
                        src={aboutBg}
                        alt="About Background"
                        className="w-full h-full object-cover opacity-50 blur-[1px] transition-all duration-700 group-hover/section:opacity-70 group-hover/section:blur-0"
                    />
                </motion.div>

                {/* Ambient Darken/Lighten Pulse on Hover */}
                <div className="absolute inset-0 bg-black/60 group-hover/section:bg-black/40 transition-colors duration-700"></div>

                {/* Dynamic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-16"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 font-orbitron font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                            &lt;
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-gray-400 uppercase tracking-[0.2em] font-orbitron drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                            ABOUT
                        </h2>
                        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400 font-orbitron font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                            &gt;
                        </span>
                    </div>
                </motion.div>

                {/* Main Content Card */}
                <div className="flex justify-center">
                    <motion.div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full max-w-4xl glass-panel p-10 md:p-16 relative overflow-hidden group border border-violet-500/20 backdrop-blur-md bg-violet-900/5 transition-all duration-500"
                    >
                        {/* Inner circular glow - subtle constant pulse */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px] animate-pulse"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h3 className="text-4xl md:text-6xl font-black mb-8 font-orbitron tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-violet-100 to-violet-900 drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                                PRAJWALAN
                            </h3>

                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-rajdhani max-w-3xl mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                Prajwalan is a technology-focused innovation marathon that brings together students and developers to solve real-world problems using modern engineering and artificial intelligence. Participants collaborate in teams to design, build, and prototype impactful solutions across domains such as AI, web development, data science, and emerging technologies. Guided by mentors and evaluated by experts, teams focus on practical, scalable, and user-centric systems rather than theoretical ideas.
                            </p>

                            <button className="relative px-10 py-3 bg-[#1a1033] border border-violet-500/50 hover:border-violet-400 text-violet-400 hover:text-white transition-all duration-300 font-orbitron tracking-widest text-sm uppercase group/btn overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                                <span className="relative z-10">Know More</span>
                                <div className="absolute inset-0 bg-violet-600/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

// --- ACCORDION DOMAINS COMPONENT ---
export const Domains = () => (
    /* 
    <Section id="domains" className="relative py-32 bg-[#05010d] overflow-hidden">
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        
        <motion.div variants={itemVariants} className="text-center mb-16 relative z-10">
            <h2 className="text-6xl md:text-8xl font-black text-white font-orbitron tracking-tighter uppercase drop-shadow-[0_0_25px_rgba(45,212,191,0.3)]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">WAR</span> ZONES
            </h2>
            <p className="text-teal-400/80 font-orbitron tracking-[0.5em] text-sm uppercase mt-4">Select Deployment Vector</p>
        </motion.div>

        
        <div className="flex flex-col md:flex-row h-[80vh] w-full max-w-[90vw] mx-auto gap-2 md:gap-4 px-4 overflow-hidden">
            {[
                {
                    id: "01",
                    name: "WEB OPS",
                    role: "Development",
                    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "02",
                    name: "NEURAL NETS",
                    role: "Intelligence",
                    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                },
                {
                    id: "03",
                    name: "CYBER SEC",
                    role: "Defense",
                    img: "https://images.unsplash.com/photo-1563206767-5b1d972b9fb9?q=80&w=1974&auto=format&fit=crop"
                },
                {
                    id: "04",
                    name: "IOT CORE",
                    role: "Hardware",
                    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                },
                {
                    id: "05",
                    name: "BLOCKCHAIN",
                    role: "Decentralized",
                    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2632&auto=format&fit=crop"
                },
            ].map((domain, idx) => (
                <motion.div
                    key={idx}
                    className="relative flex-1 min-w-[60px] md:min-w-[80px] h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
                    whileHover={{ flexGrow: 10 }} // Framer motion or just CSS
                    style={{ flexGrow: 1 }}
                >
                    
                    <div className="absolute inset-0">
                        <img
                            src={domain.img}
                            alt={domain.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter-none filter grayscale-[0.8] brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>

                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">

                        
                        <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                            <span className="text-teal-400 font-orbitron font-bold text-xl md:text-2xl">0{idx + 1}</span>
                            <i className="bi bi-crosshair text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                        </div>

                        
                        <div className="relative h-full flex flex-col justify-end">

                            
                            

                            <h3 className="text-3xl md:text-5xl font-black text-white font-orbitron tracking-tighter uppercase mb-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-100">
                                {domain.name}
                            </h3>
                            <p className="text-teal-300 font-orbitron uppercase tracking-widest text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-200">
                                // {domain.role}
                            </p>

                            
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -rotate-90 origin-center whitespace-nowrap group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                <span className="text-gray-500 font-bold font-orbitron tracking-widest text-lg uppercase">{domain.name}</span>
                            </div>
                        </div>
                    </div>

                    
                    <div className="absolute inset-0 border border-white/10 group-hover:border-teal-400/50 rounded-2xl transition-colors duration-500"></div>
                </motion.div>
            ))}
        </div>
    </Section>
    */
    null
);

export const Gallery = () => {
    const [selectedId, setSelectedId] = React.useState(null);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    // Parallax Transforms (Different depths for different layers)
    const xHero = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
    const yHero = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

    const xBack = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
    const yBack = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);

    const xFore = useTransform(mouseX, [-0.5, 0.5], [60, -60]);
    // Luxury Gallery Data (Hackathon Masonry)
    const items = [
        // 1. Main Feature - The Arena (Large)
        { id: '1', title: 'The Arena', category: 'Main Stage', img: "/assets/gallery/stage.png", colSpan: 'md:col-span-8', rowSpan: 'md:row-span-2', height: 'h-[500px] md:h-[600px]' },

        // 2. Side Detail - Innovators (Small)
        { id: '2', title: 'Innovators', category: 'Teams', img: "/assets/gallery/team.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[240px] md:h-[290px]' },

        // 3. Side Detail - The Summit (Small)
        { id: '3', title: 'The Summit', category: 'Finale', img: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949892/IMG_4351_imryqr.jpg", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[240px] md:h-[290px]' },

        // 4. Bottom Row - Deep Focus (Medium)
        { id: '4', title: 'Deep Focus', category: 'Hackathon', img: "/assets/gallery/neural.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },

        // 5. Bottom Row - Victory (Medium)
        { id: '5', title: 'Victory', category: 'Awards', img: "/assets/gallery/trophy.png", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },

        // 6. Bottom Row - Network (Medium)
        { id: '6', title: 'Network', category: 'Community', img: "https://images.unsplash.com/photo-1517433456452-f96cb9365b99?auto=format&fit=crop&q=80&w=400", colSpan: 'md:col-span-4', rowSpan: 'md:row-span-1', height: 'h-[300px]' },
    ];

    return (
        <section id="gallery" className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center py-24 px-4 md:px-12">

            {/* Header - FAQ Style Match */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16 relative z-10 px-4 mt-12"
            >
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    GALLERY
                </h2>
                <p className="text-violet-200 font-rajdhani tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto opacity-80 leading-relaxed">
                    A visual archive of innovation, competition, and triumph.
                </p>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            {/* Masonry Grid - Structured & Luxury */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-[1600px] mx-auto">
                {items.map((item) => (
                    <motion.div
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`relative group cursor-pointer overflow-hidden rounded-sm bg-[#111] shadow-lg ${item.colSpan} ${item.rowSpan} ${item.height}`}
                    >
                        <motion.div className="w-full h-full relative overflow-hidden">
                            {/* Image */}
                            <motion.img
                                layoutId={`card-image-${item.id}`}
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                            />

                            {/* Professional Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

                            {/* Minimal Label - Bottom Left */}
                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 delay-75">
                                    <div className="w-6 h-[1px] bg-[#d4af37]"></div>
                                    <p className="text-[#d4af37] text-[10px] font-orbitron tracking-[0.2em] uppercase">{item.category}</p>
                                </div>
                                <h3 className="text-[#f5f5f7] font-orbitron text-2xl font-light tracking-wider drop-shadow-md">{item.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Cinematic Full Screen Lightbox */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        layoutId={`card-container-${selectedId}`}
                        className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/40 hover:text-white text-xs font-orbitron tracking-[0.2em] uppercase transition-colors duration-300 z-50 pointer-events-auto border border-white/10 px-4 py-2 rounded-full hover:bg-white/5"
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        >
                            Close
                        </button>

                        <div
                            className="relative w-full h-full flex flex-col md:flex-row max-w-[1920px] mx-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Expanded Image - Focused */}
                            <motion.div
                                className="relative w-full md:w-3/4 h-2/3 md:h-full overflow-hidden"
                                layoutId={`card-image-${selectedId}`}
                            >
                                <motion.img
                                    src={items.find(i => i.id === selectedId).img}
                                    className="w-full h-full object-contain md:object-cover bg-[#050505]"
                                />
                            </motion.div>

                            {/* Details Panel - Professional Sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="w-full md:w-1/4 h-1/3 md:h-full bg-[#080808] p-10 md:p-16 flex flex-col justify-center text-left border-l border-white/5"
                            >
                                <span className="text-[#d4af37] font-orbitron tracking-[0.3em] text-xs uppercase mb-8 flex items-center gap-4">
                                    <span className="w-12 h-[1px] bg-[#d4af37]"></span>
                                    {items.find(i => i.id === selectedId).category}
                                </span>
                                <h2 className="text-4xl md:text-5xl text-[#f5f5f7] font-orbitron font-light mb-8 leading-tight">{items.find(i => i.id === selectedId).title}</h2>
                                <p className="text-gray-500 font-rajdhani leading-relaxed text-sm md:text-base font-light mb-12">
                                    A defining moment from the event. This visual output represents the dedication, innovation, and spirit of competition that drives our community forward.
                                </p>

                                <div className="mt-auto opacity-30">
                                    <p className="text-[10px] font-mono text-gray-400">IMG_ID: {items.find(i => i.id === selectedId).id}_RAW</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export const PastWinners = () => (
    <Section id="past-winners" title="Past Champions">
        <div className="max-w-6xl mx-auto">
            <motion.p variants={itemVariants} className="text-center text-gray-400 mb-12 font-orbitron text-lg tracking-[0.2em] uppercase">Honoring the victors of the wasteland.</motion.p>
            <div className="mb-0">
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center mb-16 text-violet-500 font-orbitron tracking-widest drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">LEGENDS OF 2K25</motion.h3>

                {/* PODIUM LAYOUT - REFINED STRUCTURE */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mt-20 min-h-[550px] px-4">

                    {/* 2nd Place (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="order-2 md:order-1 relative w-full md:w-[30%] bg-[#110a1f]/90 backdrop-blur-md border border-gray-600 rounded-2xl p-6 flex flex-col items-center h-[380px] justify-end pb-8 shadow-[0_0_30px_rgba(75,85,99,0.2)] group hover:-translate-y-2 transition-transform duration-500"
                    >
                        {/* Avatar Ring */}
                        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-4 border-gray-400 p-1 bg-[#110a1f] shadow-lg z-20">
                            <img src={imgAppDev} alt="Avatar" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="text-gray-400 font-orbitron tracking-widest text-sm font-bold mb-1">2ND PLACE</div>
                        <h4 className="text-2xl font-black text-white font-orbitron mb-2">Trendsetters</h4>
                        <div className="h-[1px] w-12 bg-gray-500 mb-4"></div>
                        <div className="text-4xl text-gray-500/20 font-black font-orbitron absolute bottom-4">SILVER</div>
                    </motion.div>

                    {/* 1st Place (Center - DOMINANT) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2 relative w-full md:w-[38%] bg-gradient-to-b from-[#1a1033] to-[#0f0a1f] border-2 border-yellow-500 rounded-t-3xl rounded-b-xl p-8 flex flex-col items-center h-[480px] justify-end pb-12 z-30 shadow-[0_0_80px_rgba(234,179,8,0.3)] hover:scale-105 transition-transform duration-500"
                    >
                        {/* Crown */}
                        <div className="absolute -top-16 animate-bounce drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V17H19V19Z" fill="#FACC15" />
                            </svg>
                        </div>

                        {/* Avatar Ring */}
                        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border-[6px] border-yellow-500 p-1 bg-[#1a1033] shadow-[0_0_40px_rgba(234,179,8,0.4)] z-30">
                            <img src={imgML} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                        </div>

                        <div className="mt-12 text-yellow-400 font-orbitron tracking-[0.3em] text-lg font-bold mb-2 drop-shadow-md">CHAMPIONS</div>
                        <h4 className="text-5xl font-black text-white font-orbitron mb-2 text-center">Innovators X</h4>
                        <div className="h-[2px] w-24 bg-yellow-500 mb-6 shadow-[0_0_10px_#eab308]"></div>
                        <p className="text-violet-200 font-orbitron text-lg bg-violet-500/10 px-6 py-2 rounded-full border border-violet-500/30 backdrop-blur-sm">DeepLearn Platform</p>
                        <div className="text-6xl text-yellow-500/10 font-black font-orbitron absolute bottom-4">GOLD</div>
                    </motion.div>

                    {/* 3rd Place (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="order-3 md:order-3 relative w-full md:w-[30%] bg-[#110a1f]/90 backdrop-blur-md border border-orange-600 rounded-2xl p-6 flex flex-col items-center h-[340px] justify-end pb-8 shadow-[0_0_30px_rgba(234,88,12,0.2)] group hover:-translate-y-2 transition-transform duration-500"
                    >
                        {/* Avatar Ring */}
                        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full border-4 border-orange-600 p-1 bg-[#110a1f] shadow-lg z-20">
                            <img src={imgIoT} alt="Avatar" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="text-orange-500 font-orbitron tracking-widest text-sm font-bold mb-1">3RD PLACE</div>
                        <h4 className="text-2xl font-black text-white font-orbitron mb-2">Dream Coders</h4>
                        <div className="h-[1px] w-12 bg-orange-600 mb-4"></div>
                        <div className="text-4xl text-orange-600/20 font-black font-orbitron absolute bottom-4">BRONZE</div>
                    </motion.div>

                </div>
            </div>
        </div>
    </Section>
);


export const Timeline = () => {
    const events = [
        {
            date: "25",
            month: "DEC",
            title: "REGISTRATION",
            subtitle: "INITIATION",
            details: ["Portal Opens", "Team Formation"],
            icon: "bi-person-plus-fill"
        },
        {
            date: "20",
            month: "JAN",
            title: "ROUND 1",
            subtitle: "QUALIFIERS",
            details: ["MVP Submission", "Code Validation"],
            icon: "bi-laptop"
        },
        {
            date: "15",
            month: "FEB",
            title: "ROUND 2",
            subtitle: "ELIMINATION",
            details: ["Live Demo", "Deep Tech Review"],
            icon: "bi-broadcast"
        },
        {
            date: "12",
            month: "MAR",
            title: "HAVOC",
            subtitle: "FINALE",
            details: ["24H Marathon", "Grand Finale"],
            icon: "bi-trophy-fill"
        }
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" ref={containerRef} className="py-32 relative z-10 overflow-hidden flex flex-col items-center bg-[#05010d]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>

            {/* Header */}
            <div className="flex flex-col items-center mb-32 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 font-orbitron tracking-widest uppercase mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]"
                >
                    TIMELINE
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 160 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1.5 bg-violet-600 skew-x-[-20deg] shadow-[0_0_15px_#7c3aed]"
                ></motion.div>
            </div>

            {/* Vertical Rhombus Stack Layout */}
            <div className="w-full max-w-5xl px-4 relative flex flex-col items-center gap-24">

                {/* Scroll-Linked Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-violet-900/30 -translate-x-1/2 z-0">
                    <motion.div
                        className="w-full bg-violet-500 origin-top shadow-[0_0_20px_#8b5cf6]"
                        style={{ scaleY, height: "100%" }}
                    />
                </div>

                {events.map((event, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.4
                        }}
                        className={`relative z-10 flex items-center justify-center w-full gap-8 md:gap-20 ${idx % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
                    >
                        {/* Central Rhombus Node (Date) */}
                        <motion.div
                            className="relative group flex-shrink-0 z-20"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 bg-violet-500 blur-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>

                            {/* Rhombus Container */}
                            <div className="w-32 h-32 bg-black/80 backdrop-blur-sm border-2 border-violet-500 rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] group-hover:border-white/50 transition-colors duration-300">
                                {/* Inner Content (Un-rotated) */}
                                <div className="-rotate-45 text-center">
                                    <span className="block text-3xl font-black text-white font-orbitron leading-none drop-shadow-md">{event.date}</span>
                                    <span className="block text-sm font-bold text-violet-400 font-orbitron tracking-widest mt-1">{event.month}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Connection Line (Hoz) */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={`hidden md:block absolute top-1/2 ${idx % 2 === 0 ? 'left-1/2 origin-left' : 'right-1/2 origin-right'} w-[calc(50%-5rem)] h-[1px] bg-gradient-to-r from-violet-500 to-transparent z-0`}
                        ></motion.div>

                        {/* Content Card */}
                        <motion.div
                            className={`w-full md:w-[40%] flex flex-col ${idx % 2 === 0 ? 'md:text-left items-center md:items-start' : 'md:text-right items-center md:items-end'}`}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div
                                className="group/card relative p-8 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-violet-900/20 hover:border-violet-400/50 clip-path-polygon w-full shadow-lg"
                                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 90% 100%, 0 100%)" }}
                            >
                                <h3 className="text-3xl font-black font-orbitron text-white mb-2 uppercase tracking-wider group-hover/card:text-violet-300 transition-colors">
                                    {event.title}
                                </h3>
                                <p className="text-violet-500 font-bold font-orbitron tracking-[0.2em] mb-6 uppercase text-sm">
                                    {event.subtitle}
                                </p>

                                <ul className={`flex flex-col gap-2 text-gray-300 font-orbitron ${idx % 2 === 0 ? 'items-center md:items-start' : 'items-center md:items-end'}`}>
                                    {event.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            {idx % 2 !== 0 && <i className="bi bi-caret-left-fill text-violet-500 text-xs"></i>}
                                            {detail}
                                            {idx % 2 === 0 && <i className="bi bi-caret-right-fill text-violet-500 text-xs"></i>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

// --- PRIZES COMPONENT ---
export const Prizes = () => {
    // Cyberpunk HUD Shape:
    // Asymmetric cuts:
    // TL: small angle, TR: angle, BR: large cut, BL: angle
    const cardClipPath = "polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 40px), calc(100% - 40px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px)";

    // Sparkle Component
    const Sparkles = () => (
        <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-6 -right-6 pointer-events-none z-30"
        >
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-0 right-0 text-[#FFD700] text-2xl drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]"
            >
                ✦
            </motion.div>
            <motion.div
                animate={{ scale: [0, 1, 0], rotate: [45, 0, 45] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                className="absolute top-4 -left-4 text-[#FFC107] text-sm drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]"
            >
                ✨
            </motion.div>
        </motion.div>
    );

    return (
        <Section id="prizes" title="" className="bg-bg-dark relative overflow-hidden py-32">
            {/* Cinematic Dark Background */}
            <div className="absolute inset-0 bg-black pointer-events-none"></div>

            {/* Golden Eclipse CSS */}
            <style>{`
                @keyframes rotateBorder {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .golden-border-wrapper {
                    position: relative;
                    background: transparent;
                    z-index: 1;
                    /* Clean border base if animation is off/loading */
                    border: 0px solid transparent;
                }
                /* Effect A: Infinity Gold Moving Border */
                .golden-border-wrapper::before {
                    content: "";
                    position: absolute;
                    inset: -150%;
                    width: 400%;
                    height: 400%;
                    background: conic-gradient(transparent 20%, #FFD700, transparent 90%);
                    top: -150%;
                    left: -150%;
                    z-index: -1;
                    opacity: 0;
                    transition: opacity 0.5s ease;
                    pointer-events: none;
                }
                .group:hover .golden-border-wrapper::before {
                    animation: rotateBorder 4s linear infinite;
                    opacity: 1;
                }
                /* Static gold border when not hovering (optional, but requested 'Change borders to Electric Gold') */
                .golden-border-wrapper::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: #FFD700;
                    z-index: -2;
                    opacity: 0.3; /* Subtle static border */
                }
                .group:hover .golden-border-wrapper::after {
                    opacity: 0; /* Hide static when spinning starts, or keep it as base */
                }

                /* Effect B: Nebula Glow */
                .nebula-glow {
                    transition: box-shadow 0.5s ease;
                }
                .group:hover .nebula-glow {
                    box-shadow: 0px 0px 30px rgba(138, 43, 226, 0.4), 0px 0px 15px rgba(255, 215, 0, 0.2);
                }

                /* Gradient Text Class */
                .text-gold-gradient {
                    background: linear-gradient(to bottom, #FFF8DC, #FFC107);
                    -webkit-background-clip: text;
                    background-clip: text;
                    color: transparent;
                }
            `}</style>

            <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex items-center justify-center mb-20 relative"
                >
                    <div className="hidden md:block text-[#FFD700] text-6xl md:text-8xl font-black font-orbitron mr-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">&lt;</div>
                    <div className="relative px-12 py-4 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent border-y border-[#FFD700]/30 transform skew-x-[-10deg]">
                        <h2 className="relative text-5xl md:text-7xl font-black font-orbitron tracking-[0.1em] text-[#FFD700] uppercase drop-shadow-[0_0_25px_rgba(255,215,0,0.5)] z-10 skew-x-[10deg]">
                            PRIZES
                        </h2>
                    </div>
                    <div className="hidden md:block text-[#FFD700] text-6xl md:text-8xl font-black font-orbitron ml-6 drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]">&gt;</div>
                </motion.div>


                {/* 3-Card Podium Container */}
                <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12 relative">

                    {/* --- LEFT CARD: 2nd Prize --- */}
                    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[30%] relative group order-2 md:order-1 nebula-glow">
                        {/* Note: clip-path on container cuts shadow. Shadow must be on an wrapper or we accept the internal glow.
                             User rule: "Implement Effect B ... box-shadow".
                             If clip-path is here, box-shadow won't show outside.
                             Let's apply nebula-glow to a div BEHIND?
                             Or rely on the fact that existing code had clipPath on the inner divs.
                             I will keep the shadow on the *motion.div* and REMOVE clipPath from motion.div if it wasn't there.
                             Original did NOT have clipPath on motion.div. I will revert that specific add if I did it.
                             Wait, original: <motion.div ... className="... group ...">
                             No clipPath on parent.
                         */}

                        {/* Top-Left Arrow Tab - Color: Electric Gold #FFD700 */}
                        <div className="absolute -top-3 -left-1 bg-[#FFD700] text-[#160826] font-black font-orbitron text-[10px] px-4 py-1 skew-x-[-15deg] z-20 shadow-[0_0_15px_rgba(255,215,0,0.5)] tracking-widest uppercase rounded-sm border-none">
                            2ND PRIZE
                        </div>

                        {/* Bottom Right "Italic Rectangle" - Color: Glassy Gold */}
                        <div className="absolute -bottom-2 -right-1 w-8 h-2 bg-[rgba(255,215,0,0.4)] skew-x-[-20deg] z-20 shadow-[0_0_10px_rgba(255,215,0,0.8)] border border-[#FFD700]/50"></div>

                        {/* Gold Border Wrapper with Animation */}
                        <div className="p-[2px] golden-border-wrapper relative transition-all duration-300" style={{ clipPath: cardClipPath }}>

                            <div
                                className="relative h-[240px] w-full bg-[#160826] transition-all duration-500"
                                style={{ clipPath: cardClipPath }}
                            >
                                {/* Default: Deep Royal Violet Background */}
                                <div className="absolute inset-0 bg-[#160826]"></div>

                                {/* Hover Only: Nice Soft Glow Bloom (Gold) */}
                                <div className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500"></div>

                                {/* Inner Content - Top Padded & Centered */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-20 px-6 pb-6 z-20 relative">
                                    <h3 className="text-5xl font-black font-orbitron drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-1 text-gold-gradient transition-colors duration-300 relative inline-block">
                                        <span className="text-[#FFD700] mr-1">₹</span>15,000
                                        <Sparkles />
                                    </h3>
                                    <div className="h-[1px] w-12 bg-white/30 group-hover:bg-[#FFD700]/80 mb-2 transition-colors duration-300"></div>
                                    <p className="text-[#E0D4FC] font-orbitron tracking-[0.2em] text-[10px] uppercase font-bold transition-colors duration-300">
                                        RUNNER UP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* --- CENTER CARD: Grand Prize (Largest) --- */}
                    <motion.div whileHover={{ y: -12, scale: 1.05 }} className="w-full md:w-[38%] relative group order-1 md:order-2 z-10 -mt-6 md:-mt-0 md:mb-6 nebula-glow">
                        {/* Top-Left Arrow Tab */}
                        <div className="absolute -top-4 -left-2 bg-[#FFD700] text-[#160826] font-black font-orbitron text-xs px-6 py-1.5 skew-x-[-15deg] z-30 shadow-[0_0_20px_rgba(255,215,0,0.6)] tracking-widest uppercase rounded-sm border-none">
                            WINNER
                        </div>

                        {/* Bottom Right "Italic Rectangle" */}
                        <div className="absolute -bottom-3 -right-2 w-12 h-3 bg-[rgba(255,215,0,0.4)] skew-x-[-20deg] z-20 shadow-[0_0_15px_rgba(255,215,0,0.8)] border border-[#FFD700]/50"></div>

                        {/* Gold Border Wrapper with Animation */}
                        <div className="p-[2px] golden-border-wrapper relative transition-all duration-300" style={{ clipPath: cardClipPath }}>

                            <div
                                className="relative h-[300px] w-full bg-[#160826] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
                                style={{ clipPath: cardClipPath }}
                            >
                                {/* Default: Deep Royal Violet Background */}
                                <div className="absolute inset-0 bg-[#160826]"></div>

                                {/* Hover Only: Nice Soft Glow Bloom */}
                                <div className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-15 blur-[80px] transition-opacity duration-500"></div>

                                {/* Inner Vignette */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.5)_100%)] group-hover:opacity-50 transition-opacity duration-300"></div>

                                {/* Content - Top Padded & Centered */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-14 px-6 pb-6 z-20 relative">
                                    <h3 className="text-7xl md:text-8xl font-black font-orbitron drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] mb-2 text-gold-gradient transition-colors duration-300 relative inline-block">
                                        <span className="text-[#FFD700] mr-2">₹</span>20,000
                                        <Sparkles />
                                    </h3>
                                    <div className="h-[2px] w-24 bg-white/50 group-hover:bg-[#FFD700] mb-3 shadow-[0_0_10px_white] transition-colors duration-300"></div>
                                    <p className="text-[#E0D4FC] font-orbitron tracking-[0.2em] text-xs md:text-sm uppercase font-bold text-shadow-sm transition-colors duration-300">
                                        GRAND PRIZE WINNER
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* --- RIGHT CARD: 3rd Prize --- */}
                    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="w-full md:w-[30%] relative group order-3 nebula-glow">
                        {/* Top-Left Arrow Tab */}
                        <div className="absolute -top-3 -left-1 bg-[#FFD700] text-[#160826] font-black font-orbitron text-[10px] px-4 py-1 skew-x-[-15deg] z-20 shadow-[0_0_15px_rgba(255,215,0,0.5)] tracking-widest uppercase rounded-sm border-none">
                            3RD PRIZE
                        </div>

                        {/* Bottom Right "Italic Rectangle" */}
                        <div className="absolute -bottom-2 -right-1 w-8 h-2 bg-[rgba(255,215,0,0.4)] skew-x-[-20deg] z-20 shadow-[0_0_10px_rgba(255,215,0,0.8)] border border-[#FFD700]/50"></div>

                        {/* Gold Border Wrapper with Animation */}
                        <div className="p-[2px] golden-border-wrapper relative transition-all duration-300" style={{ clipPath: cardClipPath }}>

                            <div
                                className="relative h-[240px] w-full bg-[#160826] transition-all duration-500"
                                style={{ clipPath: cardClipPath }}
                            >
                                {/* Default: Deep Royal Violet Background */}
                                <div className="absolute inset-0 bg-[#160826]"></div>

                                {/* Hover Only: Nice Soft Glow Bloom */}
                                <div className="absolute inset-0 bg-[#FFD700] opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500"></div>

                                {/* Content - Top Padded & Centered */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center pt-20 px-6 pb-6 z-20 relative">
                                    <h3 className="text-5xl font-black font-orbitron drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-1 text-gold-gradient transition-colors duration-300 relative inline-block">
                                        <span className="text-[#FFD700] mr-1">₹</span>10,000
                                        <Sparkles />
                                    </h3>
                                    <div className="h-[1px] w-12 bg-white/30 group-hover:bg-[#FFD700]/80 mb-2 transition-colors duration-300"></div>
                                    <p className="text-[#E0D4FC] font-orbitron tracking-[0.2em] text-[10px] uppercase font-bold transition-colors duration-300">
                                        2ND RUNNER UP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

            </div>
        </Section>
    );
};

// --- PURPLE MARQUEE SPONSORS ---
export const Sponsors = () => {
    // Row 1: Tech Giants
    const row1Sponsors = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" }
    ];

    // Row 2: Dev & Cloud
    const row2Sponsors = [
        { name: "Facebook", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "PayPal", url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" }
    ];

    // Duplicate for marquee loop
    const marqueeRow1 = [...row1Sponsors, ...row1Sponsors, ...row1Sponsors, ...row1Sponsors];
    const marqueeRow2 = [...row2Sponsors, ...row2Sponsors, ...row2Sponsors, ...row2Sponsors];

    return (
        <Section id="sponsors" className="py-24 bg-black relative overflow-hidden" title="">
            {/* Header */}
            <div className="flex items-center justify-center mb-16 relative z-10 w-full">
                {/* Left Bracket */}
                <div className="hidden md:flex items-center justify-center mr-8">
                    <div className="w-4 h-12 bg-transparent border-l-4 border-t-4 border-b-4 border-violet-500 skew-x-[-15deg] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                    <div className="w-3 h-3 bg-violet-500 ml-2 rotate-45 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                </div>

                {/* Main Title Container */}
                <div className="relative px-12 py-4 bg-gradient-to-r from-transparent via-violet-900/10 to-transparent border-y border-violet-500/30">
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron tracking-[0.1em] text-violet-400 uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] whitespace-nowrap">
                        SPONSORS
                    </h2>
                    {/* Glow lines */}
                    <span className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></span>
                </div>

                {/* Right Bracket */}
                <div className="hidden md:flex items-center justify-center ml-8">
                    <div className="w-3 h-3 bg-violet-500 mr-2 rotate-45 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                    <div className="w-4 h-12 bg-transparent border-r-4 border-t-4 border-b-4 border-violet-500 skew-x-[15deg] shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="flex flex-col gap-16 relative z-10 overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-500 group">

                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden relative w-full">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee-reverse group-hover:paused will-change-transform">
                        {marqueeRow1.map((brand, idx) => (
                            <div key={`row1-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain"
                                    style={{
                                        filter: brand.name === "GitHub"
                                            ? "brightness(2.5) sepia(1) hue-rotate(240deg) saturate(2) contrast(1.1) drop-shadow(0 0 8px rgba(139, 92, 246, 0.5))"
                                            : "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1) drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex overflow-hidden relative w-full">
                    <div className="flex gap-20 items-center whitespace-nowrap animate-marquee group-hover:paused will-change-transform">
                        {marqueeRow2.map((brand, idx) => (
                            <div key={`row2-${idx}`} className="w-28 md:w-40 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={brand.url}
                                    alt={brand.name}
                                    className="w-full h-12 object-contain"
                                    style={{
                                        filter: "brightness(0.9) sepia(1) hue-rotate(240deg) saturate(3) contrast(1.1) drop-shadow(0 0 5px rgba(139, 92, 246, 0.3))"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background elements to match the misty look */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-violet-900/5 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        </Section>
    );
};

// --- HOLOGRAPHIC TERMINAL FAQ ---
export const FAQs = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    // Parallax Motion Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const translateX = useTransform(xSpring, [-0.5, 0.5], ["40px", "-40px"]);
    const translateY = useTransform(ySpring, [-0.5, 0.5], ["40px", "-40px"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;

        x.set(xPos);
        y.set(yPos);
    };

    const questions = [
        { q: "WHAT IS PRAJWALAN 2026?", a: "Prajwalan is a national-level technical symposium hosted by SRKR Engineering College." },
        { q: "WHO CAN PARTICIPATE?", a: "Students from any engineering or degree college with a valid ID card." },
        { q: "HOW DO I REGISTER?", a: "Registration is available through our official portal. Early bird offers are live." },
        { q: "IS IT AN INDIVIDUAL OR TEAM EVENT?", a: "Both individual and team events are available depending on the specific challenge." },
        { q: "WILL THERE BE PRIZES?", a: "Yes, cash prizes and certificates will be awarded to top performers in all categories." }
    ];

    return (
        <section
            id="faqs"
            className="min-h-screen flex flex-col justify-start pt-32 bg-bg-dark relative overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    src={faqBg}
                    alt="FAQ Background"
                    className="w-full h-full object-cover"
                    style={{
                        x: translateX,
                        y: translateY,
                        scale: 1.1
                    }}
                />
                {/* Darker overlay for better text contrast matching reference */}
                <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90"></div>
            </div>

            <motion.div variants={itemVariants} className="text-center mb-12 relative z-10 px-4">
                <h2 className="text-4xl md:text-6xl font-dune text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 tracking-[0.1em] mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    F A Q
                </h2>
                <p className="text-violet-200 font-rajdhani tracking-[0.2em] text-xs md:text-sm max-w-lg mx-auto opacity-80 leading-relaxed">
                    Find answers to the most common questions about Prajwalan 2026.
                </p>
                <div className="h-[1px] w-20 bg-violet-600/50 mx-auto mt-6 shadow-[0_0_10px_#7c3aed]"></div>
            </motion.div>

            <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col gap-4">
                {questions.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={false}
                        animate={{ backgroundColor: openIndex === idx ? "rgba(139, 92, 246, 0.08)" : "transparent" }}
                        className="border-b border-violet-500/20 overflow-hidden transition-all duration-300"
                    >
                        {/* Header */}
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between py-4 text-left group hover:bg-violet-500/5 px-4 rounded-lg transition-colors"
                        >
                            <span className={`font-rajdhani tracking-wider text-sm md:text-base transition-colors uppercase pr-8 ${openIndex === idx ? 'text-violet-300' : 'text-violet-400/80 group-hover:text-violet-300'}`}>
                                {item.q}
                            </span>
                            <motion.i
                                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                className={`bi bi-chevron-down text-base flex-shrink-0 transition-colors ${openIndex === idx ? 'text-violet-400' : 'text-violet-500/50 group-hover:text-violet-400'}`}
                            ></motion.i>
                        </button>

                        {/* Expanded Content */}
                        <AnimatePresence initial={false}>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="pb-4 px-4">
                                        <p className="text-gray-300 font-rajdhani text-base tracking-wide leading-relaxed pl-4 border-l-2 border-violet-500/30 ml-2">
                                            {item.a}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
// --- MODULES COMPONENT (Redesigned) ---
export const Modules = () => {
    // Parallax Motion Values (Hero-style)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Map normalized -0.5 to 0.5 input to pixel movement
    const bgX = useTransform(xSpring, [-0.5, 0.5], ["-40px", "40px"]);
    const bgY = useTransform(ySpring, [-0.5, 0.5], ["-40px", "40px"]);

    const handleMouseMove = (e) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();
        const xPos = (clientX / width) - 0.5;
        const yPos = (clientY / height) - 0.5;
        x.set(xPos);
        y.set(yPos);
    };

    // Dotted Ring Component
    const DottedRing = ({ size = 60, color = "#a855f7" }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* The Main Dotted Ring */}
            <circle
                cx="50" cy="50" r="38"
                stroke={color}
                strokeWidth="6"
                strokeDasharray="12 12"
                strokeLinecap="round"
                className="opacity-80"
            />
            {/* The Thin Outer Boundary */}
            <circle
                cx="50" cy="50" r="49"
                stroke={color}
                strokeWidth="0.5"
                className="opacity-50"
            />
        </svg>
    );

    // Modules Data with "Organic" Positioning
    const modules = [
        {
            id: 1,
            title: "Web Development",
            desc: "Building the digital future of the web.",
            points: ["Full Stack Solutions", "Modern Frameworks"],
            top: "calc(15% - 20px)",
            left: "calc(20% + 140px)",
            delay: 0,
            pos: 'bottom',
            img: imgWebDev
        },
        {
            id: 2,
            title: "Cyber Security",
            desc: "Defending systems from digital threats.",
            points: ["Network Defense", "Ethical Hacking"],
            top: "calc(25% + 140px)",
            left: "calc(65% - 65px)",
            delay: 2,
            pos: 'left',
            img: imgCyberSec
        },
        {
            id: 3,
            title: "Machine Learning",
            desc: "Systems that learn and adapt from data.",
            points: ["Predictive Modeling", "Neural Architectures"],
            top: "calc(28% + 340px)",
            left: "calc(42% - 70px)",
            delay: 4,
            pos: 'top',
            img: imgML
        },
        {
            id: 4,
            title: "IoT Systems",
            desc: "Connecting the physical and digital worlds.",
            points: ["Smart Devices", "Embedded Systems"],
            top: "calc(70% - 180px)",
            left: "calc(12% - 170px)",
            delay: 1,
            img: imgIoT
        },
        {
            id: 5,
            title: "Web3 & Blockchain",
            desc: "Decentralized trust and value exchange.",
            points: ["Smart Contracts", "DApp Development"],
            top: "calc(80% - 450px)",
            left: "calc(48% + 500px)",
            delay: 3,
            pos: 'bottom',
            img: imgWeb3
        },
        {
            id: 6,
            title: "App Development",
            desc: "Creating mobile experiences for everyone.",
            points: ["Cross-platform Apps", "User Centric UI/UX"],
            top: "calc(55% + 108px)",
            left: "calc(82% + 55px)",
            delay: 5,
            pos: 'top',
            img: imgAppDev
        },
    ];

    return (
        <Section
            id="modules"
            title=""
            className="bg-[#050210] relative overflow-hidden py-32 min-h-[900px]"
            onMouseMove={handleMouseMove}
        >

            {/* Background Image - New Final V2 - Shifted down for Header Space */}
            <div className="absolute top-[220px] left-0 right-0 bottom-0 z-0 overflow-hidden">
                <motion.div
                    className="absolute inset-x-0 inset-y-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${modulesFinalV2})`,
                        backgroundPosition: 'center -50px',
                        x: bgX,
                        y: bgY,
                        scale: 1.1
                    }}
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>

                {/* Cinematic Vignette Borders (Reference Match) */}
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-black via-black/60 to-transparent z-10 pointer-events-none"></div>
            </div>

            <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 relative z-10 h-full">

                {/* Header: < MODULES > (Neon & Glowing) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={sectionVariants}
                    className="flex flex-col items-center justify-center mb-24 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-black font-orbitron tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10">
                        MODULES
                    </h2>
                    {/* Animated Underline */}
                    <motion.div
                        className="h-1 bg-cyan-400 mt-4 rounded-full shadow-[0_0_15px_#22d3ee]"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: 100, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                {/* Organic Dotted Map */}
                <div className="relative w-full h-[600px] md:h-[700px]">
                    {modules.map((mod) => (
                        <motion.div
                            key={mod.id}
                            className="absolute group"
                            style={{ top: mod.top, left: mod.left }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: mod.id * 0.1 }}
                        >
                            {/* Interactive Container */}
                            <div className="relative flex items-center justify-center cursor-pointer">

                                {/* Rotating Dotted Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10 + mod.delay, repeat: Infinity, ease: "linear" }}
                                    className="group-hover:pause-animation" // Pause is complex in framer, simpler to slow down or use CSS
                                    style={{ transformOrigin: "center" }}
                                >
                                    <div className="transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_#22d3ee]">
                                        <DottedRing color="#a855f7" size={55} />
                                    </div>
                                </motion.div>

                                {/* Center Core Hook with Thin Boundary */}
                                <div className="absolute w-4 h-4 rounded-full border border-violet-300/50 z-10"></div>
                                <div className="absolute w-2 h-2 bg-violet-300 rounded-full shadow-[0_0_10px_#a78bfa] z-20 transition-all duration-300 group-hover:bg-white group-hover:scale-150"></div>

                                {/* Styles for CSS Pause */}
                                <style>{`
                                    .group:hover .group-hover\\:pause-animation {
                                        animation-play-state: paused;
                                    }
                                `}</style>

                                {/* --- Domain Card (Glassmorphic Reveal) --- */}
                                <div className={`absolute w-72 opacity-0 invisible transition-all duration-500 ease-out z-30
                                    ${mod.pos === 'bottom'
                                        ? 'top-16 left-1/2 -translate-x-1/2 translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-6'
                                        : mod.pos === 'top'
                                            ? 'bottom-16 left-1/2 -translate-x-1/2 -translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-6'
                                            : mod.pos === 'left'
                                                ? 'right-14 top-1/2 -translate-y-1/2 -translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:-translate-x-6'
                                                : 'left-14 top-1/2 -translate-y-1/2 translate-x-4 group-hover:opacity-100 group-hover:visible group-hover:translate-x-6'
                                    }`}
                                >
                                    <div className="relative bg-[#0F0A1F]/95 backdrop-blur-xl border border-white/10 group-hover:border-violet-500 transition-colors duration-300 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">

                                        {/* Top Image Section */}
                                        <div className="h-32 w-full relative overflow-hidden group/image">
                                            {/* Domain Image */}
                                            <img
                                                src={mod.img}
                                                alt={mod.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                            />
                                            {/* Gradient Overlay for Text Readability/Atmosphere */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1F] via-transparent to-transparent opacity-80"></div>

                                            {/* Grid Overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 mixed-blend-overlay"></div>
                                        </div>

                                        {/* Bottom Content Section */}
                                        <div className="p-4 flex flex-col justify-center border-t border-white/5 relative">
                                            {/* Title */}
                                            <h3 className="text-lg font-bold font-orbitron text-amber-400 mb-2 tracking-wide">
                                                {mod.title}
                                            </h3>
                                            {/* Description */}
                                            <p className="text-xs text-gray-400 font-rajdhani leading-relaxed mb-3">
                                                {mod.desc}
                                            </p>
                                            {/* Bullet Points */}
                                            <ul className="list-disc list-inside text-[10px] text-gray-500 font-rajdhani space-y-1">
                                                {mod.points && mod.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Connectivity UI Line: Changes based on Position */}
                                    {mod.pos === 'bottom' ? (
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'top' ? (
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-t from-cyan-400 to-transparent"></div>
                                    ) : mod.pos === 'left' ? (
                                        <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-gradient-to-l from-cyan-400 to-transparent"></div>
                                    ) : (
                                        <div className="absolute top-1/2 -left-6 w-6 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </Section>
    );
};


