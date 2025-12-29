import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
            setTimeout(() => {
                if (onLoadingComplete) onLoadingComplete();
            }, 1000);
        }, 3500);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    // Lightning Bolt SVG Path
    const boltPath = "M15 0L0 20h10l-5 20 20-25h-10z";

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Background Storm Clouds / Flashes - Updated to Blue/Cyan/Grey */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black">
                        {/* Random Lightning Flashes */}
                        <motion.div
                            className="absolute inset-0 bg-cyan-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.1, 0, 0.3, 0, 0, 0.2, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", times: [0, 0.1, 0.2, 0.25, 0.3, 0.8, 0.85, 1] }}
                        />
                    </div>

                    {/* Central Thunder Animation */}
                    <div className="relative z-10 flex flex-col items-center justify-center">

                        {/* Main Bolt */}
                        <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                            {/* Glow Effect - Cyan */}
                            <div className="absolute inset-0 bg-cyan-500 blur-[60px] rounded-full opacity-40 animate-pulse"></div>

                            <svg viewBox="0 0 30 45" className="w-24 h-32 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                                <motion.path
                                    d={boltPath}
                                    fill="none"
                                    stroke="url(#boltGradient)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, fill: "rgba(255,255,255,0)" }}
                                    animate={{
                                        pathLength: [0, 1, 1, 1],
                                        fill: ["rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(207,250,254,1)", "rgba(103,232,249,1)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                                />
                                <defs>
                                    <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#cffafe" /> {/* cyan-100 */}
                                        <stop offset="100%" stopColor="#06b6d4" /> {/* cyan-500 */}
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Title with Glitch/Thunder Effect - Cyan/Blue */}
                        <motion.h1
                            className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)] font-orbitron"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            PRAJWALAN
                        </motion.h1>

                        <motion.div
                            className="mt-4 flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <span className="h-[2px] w-12 bg-cyan-500/50"></span>
                            <span className="text-cyan-200 font-rajdhani tracking-[0.4em] text-sm font-bold uppercase">System Initializing</span>
                            <span className="h-[2px] w-12 bg-cyan-500/50"></span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
