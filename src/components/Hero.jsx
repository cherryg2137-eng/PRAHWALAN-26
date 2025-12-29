import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="h-screen flex items-center justify-center relative z-10 overflow-hidden">
            {/* Animated Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse" />

            <div className="container mx-auto px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="p-8 md:p-16 text-center relative z-20"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
                            visible: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 }
                            }
                        }}
                    >

                        {/* Title - Tracking Compression Effect */}
                        <motion.h1
                            className="text-6xl md:text-8xl font-black mb-10 font-orbitron tracking-wider relative inline-block"
                            variants={{
                                hidden: { letterSpacing: "0.5em", opacity: 0, scale: 1.2 },
                                visible: {
                                    letterSpacing: "normal",
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } // Custom easing
                                }
                            }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 drop-shadow-[0_0_10px_rgba(76,201,240,0.5)]">
                                PRAJWALAN
                            </span>
                            <br />
                            <motion.span
                                className="text-white text-5xl md:text-7xl mt-4 block drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.5 } }
                                }}
                            >
                                2K26
                            </motion.span>
                        </motion.h1>

                        {/* Buttons - Staggered Fade Up */}
                        <motion.div
                            className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-20"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(247, 37, 133, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-10 py-4 bg-transparent overflow-hidden rounded-none group/btn border border-magenta"
                            >
                                <div className="absolute inset-0 w-full h-full bg-magenta/20 group-hover/btn:bg-magenta/40 transition-colors duration-300"></div>
                                <div className="absolute inset-0 w-2 bg-magenta blur-md group-hover/btn:w-full transition-all duration-500 opacity-20"></div>
                                <span className="relative z-10 font-bold text-lg font-orbitron tracking-widest text-white">REGISTER NOW</span>

                                {/* Tech corners for button */}
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 glass-panel rounded-none font-bold text-lg font-orbitron tracking-widest text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/20 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(76,201,240,0.1)]"
                                onClick={() => document.getElementById('domains').scrollIntoView({ behavior: 'smooth' })}
                            >
                                EXPLORE DOMAINS
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
