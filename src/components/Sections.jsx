import React from 'react';
import { motion } from 'framer-motion';

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

const Section = ({ id, title, children, className = "" }) => (
    <section id={id} className={`min-h-screen py-24 relative z-10 flex flex-col justify-center ${className}`}>
        <div className="container mx-auto px-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
            >
                <motion.div variants={itemVariants} className="flex items-center justify-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-sm"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 uppercase tracking-[0.1em] font-orbitron drop-shadow-[0_0_10px_rgba(76,201,240,0.5)]">
                        {title}
                    </h2>
                </motion.div>
                {children}
            </motion.div>
        </div>
    </section>
);

export const About = () => (
    <Section id="about" title="About">
        <div className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="glass-panel p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition-transform duration-500 border-l-4 border-cyan-500">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400 font-orbitron">PRAJWALAN 2K26</h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-0 font-rajdhani">
                    A national-level hackathon conducted at <span className="text-white font-bold">SRKR Engineering College</span> by the Department of Computer Science & Engineering.
                    We focus on <span className="text-purple-400">innovation</span>, <span className="text-magenta-500">real-world problem solving</span>, and <span className="text-cyan-400">emerging technologies</span>.
                </p>
            </motion.div>

            <motion.div variants={sectionVariants} className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Vision", text: "Driving innovation and creativity nationwide.", icon: "bi-lightbulb" },
                    { title: "Mission", text: "Empowering students to build impactful solutions.", icon: "bi-rocket" },
                    { title: "Achievements", text: "Celebrating participation and innovation milestones.", icon: "bi-trophy" }
                ].map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="glass-panel p-8 text-center hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2 border-t border-transparent hover:border-purple-500">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 box-shadow-neon-purple">
                            <i className={`bi ${item.icon} text-4xl text-purple-400 group-hover:text-white transition-colors`}></i>
                        </div>
                        <h4 className="text-2xl font-bold mb-3 text-white font-orbitron">{item.title}</h4>
                        <p className="text-lg text-gray-400 font-rajdhani">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </Section>
);

export const Domains = () => (
    <Section id="domains" className="relative overflow-hidden py-32">
        {/* Large Parallax Background Text - Separated from Motion Stagger for consistent background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[15rem] font-black text-white/5 whitespace-nowrap select-none font-orbitron pointer-events-none z-0">
            DOMAINS
        </div>

        <motion.div variants={itemVariants} className="relative z-10 text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-orbitron tracking-wider">
                <span className="text-cyan-400">DO</span>MAINS
            </h2>
            <p className="text-gray-400 text-lg font-rajdhani">
                Tackle a real-world problem from any domain be it healthcare, environment, or education.
                Your solution can involve innovative software, advanced hardware, or a combination of both.
                Let your creativity and skills redefine the future!
            </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    title: "Full Stack Development",
                    desc: "Master the art of building complete web applications. From crafting stunning frontend interfaces to engineering robust backend systems, this domain challenges you to create seamless digital experiences.",
                    img: "https://i.pinimg.com/736x/b0/d1/d3/b0d1d3d12cb4336a4353b2a7b3ab4ffd.jpg", // Laptop Code
                    icon: "bi-code-slash"
                },
                {
                    title: "Machine Learning",
                    desc: "Dive into the world of AI. Train models, analyze complex datasets, and build intelligent systems that can learn and adapt. Solve real-world sustainability challenges using the power of data.",
                    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400", // Keep existing AI Brain
                    icon: "bi-cpu"
                },
                {
                    title: "Cyber Security",
                    desc: "Defend the digital realm. Identify vulnerabilities, secure networks, and protect sensitive data. This track simulates real-world security threats for you to mitigate and neutralize.",
                    img: "https://i.pinimg.com/736x/ea/5a/3c/ea5a3c1782e14cc6651d38849e3839c4.jpg", // Blue Shield
                    icon: "bi-shield-lock"
                },
                {
                    title: "Internet of Things (IoT)",
                    desc: "Bridge the physical and digital worlds. Design smart systems with sensors and actuators. Innovate in home automation, smart cities, and industrial monitoring.",
                    img: "https://i.pinimg.com/736x/d0/e4/27/d0e42793ddc16946fabea1f80690acde.jpg", // Microchip
                    icon: "bi-router"
                },
                {
                    title: "Web3",
                    desc: "Shape the decentralized future. Build dApps, smart contracts, and explore the possibilities of the new internet. Focus on transparency, user ownership, and tokenomics.",
                    img: "https://i.pinimg.com/736x/a1/88/8b/a1888bfeb7dda37bf9639bb4c44cb348.jpg", // Laptop Shield
                    icon: "bi-diagram-3"
                },
                {
                    title: "Blockchain",
                    desc: "Architect the trust layer. Develop secure, immutable ledger solutions. Explore use cases beyond currency, such as supply chain tracking and identity verification.",
                    img: "https://i.pinimg.com/736x/c7/e7/5d/c7e75de570144c4b5ae1c4728d296f5a.jpg", // Isometric Blocks
                    icon: "bi-boxes"
                },
            ].map((domain, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass-panel p-6 flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(76,201,240,0.2)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-white/10 relative overflow-hidden h-full"
                    whileHover={{ scale: 1.02 }}
                >
                    {/* Image Container */}
                    <div className="w-full h-40 mb-6 rounded-lg overflow-hidden relative group-hover:shadow-[0_0_20px_rgba(76,201,240,0.4)] transition-shadow">
                        <img
                            src={domain.img}
                            alt={domain.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/20">
                            <i className={`bi ${domain.icon} text-cyan-400 text-xl`}></i>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 font-orbitron tracking-wide group-hover:text-cyan-400 transition-colors">
                        {domain.title}
                    </h3>

                    <p className="text-sm text-gray-400 font-rajdhani leading-relaxed flex-grow">
                        {domain.desc}
                    </p>

                    {/* Action Button (Implicitly the whole card is clickable, but adding a visual indicator) */}
                    <div className="mt-6 w-full pt-4 border-t border-white/5">
                        <span className="text-xs font-bold font-orbitron uppercase tracking-widest text-cyan-500 group-hover:text-white transition-colors">
                            Explore Domain &rarr;
                        </span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </Section>
);

export const Gallery = () => {
    // Pairs of images for Front/Back of the cards
    // Using existing images cyclically or different ones if available. 
    // Since user didn't provide new ones, we'll use different cached images/placeholders for variety on the "Back".
    const galleryItems = [
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949778/IMG_20250218_094249_vqc5yp.jpg", back: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949847/IMG_20250218_095842_hka3dy.jpg", back: "https://images.unsplash.com/photo-1517433456452-f96cb9365b99?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949892/IMG_4351_imryqr.jpg", back: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766950112/ak32_klt1sv.jpg", back: "https://images.unsplash.com/photo-1563770095-39d46baa5cdd?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949778/IMG_20250218_094249_vqc5yp.jpg", back: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" },
        { front: "https://res.cloudinary.com/dtvplbrns/image/upload/v1766949847/IMG_20250218_095842_hka3dy.jpg", back: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=400" }
    ];

    return (
        <Section id="gallery" title="Gallery">
            <motion.div variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {galleryItems.map((item, idx) => (
                    <div key={idx} className="group perspective-1000 h-64 w-full cursor-pointer">
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180"
                        >
                            {/* Front Face */}
                            <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-white/5 shadow-neon-purple/20">
                                <img
                                    src={item.front}
                                    alt={`Gallery Front ${idx}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-cyan-500 shadow-neon-cyan/40">
                                <img
                                    src={item.back}
                                    alt={`Gallery Back ${idx}`}
                                    className="w-full h-full object-cover filter brightness-110"
                                />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </Section>
    );
};

export const PastWinners = () => (
    <Section id="past-winners" title="Past Champions">
        <div className="max-w-6xl mx-auto">
            <motion.p variants={itemVariants} className="text-center text-gray-400 mb-12 font-rajdhani text-lg">Celebrating the innovators who made history at Prajwalan.</motion.p>

            <div className="mb-0">
                <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8 text-cyan-400 font-orbitron tracking-widest">PRAJWALAN 2K25 WINNERS</motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { place: "1st Place", team: "Innovators X", project: "DeepLearn Platform", color: "from-yellow-400 to-yellow-600", border: "border-yellow-500", shadow: "shadow-yellow-500/20", icon: "bi-trophy" },
                        { place: "2nd Place", team: "Tech Titans", project: "Voice Assistant Pro", color: "from-gray-300 to-gray-500", border: "border-gray-400", shadow: "shadow-gray-400/20", icon: "bi-award" },
                        { place: "3rd Place", team: "Dream Coders", project: "AR Navigation", color: "from-orange-400 to-orange-600", border: "border-orange-500", shadow: "shadow-orange-500/20", icon: "bi-award" }
                    ].map((winner, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className={`glass-panel p-8 flex flex-col items-center text-center relative overflow-hidden group border-t-2 ${winner.border}`}
                        >
                            {/* Liquid Prism Effect Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${winner.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>

                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br ${winner.color} shadow-[0_0_20px_rgba(255,255,255,0.3)] text-white text-4xl`}>
                                <i className={`bi ${winner.icon}`}></i>
                            </div>

                            <span className="text-sm font-bold tracking-[0.2em] mb-2 font-orbitron text-gray-400 uppercase">{winner.place}</span>
                            <h4 className="text-2xl font-black text-white mb-2 font-orbitron">{winner.team}</h4>
                            <p className="text-cyan-400 font-rajdhani text-lg">{winner.project}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export const Timeline = () => (
    <Section id="timeline" title="Timeline">
        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-1/2 space-y-12 pl-8 md:pl-0">
            {[
                { time: "Day 1 - 9:00 AM", event: "Inauguration", desc: "Opening ceremony and keynote." },
                { time: "Day 1 - 11:00 AM", event: "Hackathon Begins", desc: "Problem statements released." },
                { time: "Day 2 - 5:00 PM", event: "Submission Deadline", desc: "Code freeze and submission." },
            ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative md:w-1/2 md:ml-auto pl-8 md:pl-12 group">
                    <div className="absolute left-[-9px] md:left-[-9px] top-6 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_10px_#4cc9f0] group-hover:bg-cyan-400 transition-colors"></div>
                    <div className="glass-panel p-6 border-l-4 border-transparent group-hover:border-cyan-400 transition-all">
                        <span className="text-cyan-400 text-sm font-bold tracking-widest font-orbitron">{item.time}</span>
                        <h3 className="text-2xl font-bold text-white mt-2 font-orbitron">{item.event}</h3>
                        <p className="text-gray-400 mt-2 font-rajdhani">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

export const Prizes = () => (
    <Section id="prizes" title="Prizes">
        <motion.div variants={sectionVariants} className="flex flex-col md:flex-row justify-center items-end gap-8 text-center pt-10">
            {/* 2nd Prize */}
            <motion.div variants={itemVariants} className="order-2 md:order-1 glass-panel p-8 w-full md:w-1/3 relative top-0 hover:-translate-y-4 transition-transform duration-300">
                <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(192,192,192,0.5)]">🥈</div>
                <h3 className="text-3xl font-bold text-gray-300 font-orbitron">2nd Prize</h3>
                <div className="h-1 w-20 mx-auto bg-gray-500 my-4"></div>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 font-rajdhani">₹15,000</p>
            </motion.div>

            {/* 1st Prize */}
            <motion.div variants={itemVariants} className="order-1 md:order-2 glass-panel p-12 w-full md:w-1/3 border border-yellow-500/50 shadow-[0_0_50px_rgba(234,179,8,0.2)] relative -top-8 z-10 hover:-translate-y-4 transition-transform duration-300 bg-yellow-900/10">
                <div className="text-8xl mb-6 animate-bounce drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]">🥇</div>
                <h3 className="text-4xl font-bold text-yellow-400 font-orbitron">1st Prize</h3>
                <div className="h-1 w-32 mx-auto bg-yellow-500 my-6 shadow-[0_0_10px_#eab308]"></div>
                <p className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-600 font-rajdhani">₹20,000</p>
            </motion.div>

            {/* 3rd Prize */}
            <motion.div variants={itemVariants} className="order-3 glass-panel p-8 w-full md:w-1/3 relative top-0 hover:-translate-y-4 transition-transform duration-300">
                <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(205,127,50,0.5)]">🥉</div>
                <h3 className="text-3xl font-bold text-gray-300 font-orbitron">3rd Prize</h3>
                <div className="h-1 w-20 mx-auto bg-orange-700 my-4"></div>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-orange-400 font-rajdhani">₹10,000</p>
            </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="text-center mt-20">
            <button className="relative px-12 py-4 bg-gradient-to-r from-purple-600 to-magenta-600 font-bold text-xl font-orbitron text-white clip-path-polygon hover:scale-105 transition-transform shadow-[0_0_20px_rgba(247,37,133,0.5)]">
                REGISTER TO WIN
            </button>
        </motion.div>
    </Section>
);

export const Sponsors = () => (
    <Section id="sponsors" title="Sponsors">
        <motion.div variants={sectionVariants} className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
                { name: "Google", url: "https://cdn.simpleicons.org/google" },
                { name: "Zomato", url: "https://cdn.simpleicons.org/zomato" },
                { name: "Nvidia", url: "https://cdn.simpleicons.org/nvidia" },
                { name: "ChatGPT", url: "https://cdn.simpleicons.org/openai" },
                { name: "Perplexity", url: "https://cdn.brandfetch.io/perplexity.ai/w/400/h/400" }
            ].map((brand, idx) => (
                <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="w-40 h-24 md:w-56 md:h-32 glass-panel flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 hover:bg-white/10 border border-white/5 hover:border-cyan-500/50 group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                        src={brand.url}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
                    />
                    <span className="hidden text-gray-400 font-orbitron font-bold text-lg">{brand.name}</span>
                </motion.div>
            ))}
        </motion.div>
    </Section>
);

export const FAQs = () => (
    <Section id="faqs" title="FAQs">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
                { q: "Is this Hackathon an online event or offline?", a: "This is a completely offline hackathon held at SRKR Engineering College." },
                { q: "What should I bring for the hackathon?", a: "Bring your laptops, chargers, mobile phones, college ID card, and any other necessary hardware components." },
                { q: "Is there any registration fee?", a: "Please check the registration portal for the latest fee details and early bird offers." },
                { q: "Will the hackathon have Wi-Fi facilities?", a: "Yes, high-speed Wi-Fi will be provided to all participants throughout the event." },
                { q: "Should you stay on campus overnight?", a: "Yes, this is a 24-hour hackathon, and accommodation will be provided on campus." },
                { q: "Can I participate without a team?", a: "No, individual participation is not allowed. You need to form a team of 2-4 members." },
                { q: "What are the facilities arranged by the organizers?", a: "We provide food, accommodation, internet, power sockets, and mentoring support." },
                { q: "Will you sponsor our travel costs?", a: "No, we do not provide travel reimbursement. Participants must arrange their own travel." },
                { q: "I am a fresher, can I participate?", a: "Absolutely! Freshers with a passion for innovation and coding are highly encouraged to participate." },
                { q: "Will there be any mentoring sessions?", a: "Yes, industry experts and mentors will be available to guide you throughout the hackathon." },
                { q: "Does this hackathon cover both software and hardware projects?", a: "Yes, we welcome both software and hardware-based solutions across various domains." },
                { q: "Do I need to be a student to participate?", a: "Yes, this event is open exclusively to students pursuing their education." }
            ].map((item, idx) => (
                <motion.details
                    key={idx}
                    variants={itemVariants}
                    className="glass-panel group border border-white/5 open:border-cyan-500/50 open:bg-white/10 transition-all duration-300 h-fit"
                >
                    <summary className="p-5 cursor-pointer font-bold flex justify-between items-center list-none text-white hover:text-cyan-400 transition-colors font-rajdhani text-lg">
                        {item.q}
                        <span className="transform group-open:rotate-180 transition-transform text-cyan-500">▼</span>
                    </summary>
                    <div className="px-5 pb-5 text-gray-300 pt-2 border-t border-white/5 text-base">
                        {item.a}
                    </div>
                </motion.details>
            ))}
        </div>
    </Section>
);
