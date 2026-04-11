'use client';

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import {
    Cpu,
    ExternalLink,
    Github,
    Layers,
    Mail,
    Sparkles,
    Twitter,
    ChevronRight,
    Database,
    BrainCircuit,
    Binary
} from 'lucide-react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

// --- PORTFOLIO_DATA (Professional Sync) ---
const PORTFOLIO_DATA = {
    profile: {
        name: "Muhammand Abdul Mannan",
        role: "Software Engineer & AI Researcher",
        description: "Software Engineer. Passionate about architecting intelligent systems, data-driven optimization, and research-oriented problem solving.",
        image: "/profile.png"
    },
    capabilities: [
        { label: "Intelligent Systems", tools: "AI, Machine Learning, Iris Classification, Regression", icon: <BrainCircuit className="w-5 h-5" /> },
        { label: "Full-Stack Dev", tools: "Next.js, Tailwind, PHP, MySQL, SaaS Architecture", icon: <Layers className="w-5 h-5" /> },
        { label: "Core Engineering", tools: "C++, Java, OOP, DSA, Database Systems", icon: <Binary className="w-5 h-5" /> }
    ],
    projects: [
        {
            title: "GymBro SaaS Platform",
            desc: "A comprehensive subscription-based gym management system featuring authentication, meal planning, and tutorial integration.",
            tech: ["PHP", "MySQL", "JavaScript", "CSS"],
            github: "https://github.com/Mannankhan-sys",
            demo: "#"
        },
        {
            title: "Sign Language Recognition",
            desc: "AI-powered system developed for real-time alphabet and word gesture recognition using Python and Computer Vision.",
            tech: ["Python", "AI/ML", "OpenCV"],
            github: "https://github.com/Mannankhan-sys",
            demo: "#"
        },
        {
            title: "Maze Solver Algorithm",
            desc: "High-performance maze solving program using graph traversal algorithms (DFS/BFS) and optimized data structures.",
            tech: ["C++", "DSA", "Algorithms"],
            github: "https://github.com/Mannankhan-sys",
            demo: "#"
        },
        {
            title: "Library Management System",
            desc: "Object-oriented system designed to manage book records, users, and borrowing history with Java inheritance patterns.",
            tech: ["Java", "OOP", "Swing"],
            github: "https://github.com/Mannankhan-sys",
            demo: "#"
        }
    ],
    socials: {
        github: "https://github.com/Mannankhan-sys",
        mail: "muhammadabdulm64@gmail.com"
    }
};

// --- INTERACTIVE STARS ---

const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; delay: number }[]>([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const generatedStars = Array.from({ length: 180 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            delay: Math.random() * 5
        }));
        setStars(generatedStars);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
            {stars.map((star) => (
                <Star key={star.id} star={star} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </div>
    );
};

const Star = ({ star, mouseX, mouseY }: { star: { x: number; y: number; size: number; delay: number }; mouseX: any; mouseY: any }) => {
    // Dynamic parallax: stars follow the cursor with varying intensity
    const x = useTransform(mouseX, [0, 2000], [0, (star.x - 50) * 0.5]);
    const y = useTransform(mouseY, [0, 1200], [0, (star.y - 50) * 0.5]);

    return (
        <motion.div
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
                x,
                y,
            }}
            animate={{
                opacity: [0.1, 0.9, 0.1],
                scale: [0.8, 1.2, 0.8],
            }}
            transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: star.delay,
            }}
        />
    );
};

const ContactForm = () => {
    const [status, setStatus] = useState<string>('');
    const formRef = useRef<HTMLFormElement>(null);

    const handleEmail = () => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        window.location.href = `mailto:muhammadabdulm64@gmail.com?subject=Portfolio Inquiry from ${name}&body=${body}`;
    };

    const handleWhatsApp = () => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const name = formData.get('name');
        const message = formData.get('message');
        const text = `Hi Abdul Mannan, my name is ${name}. %0A%0A${message}`;
        window.open(`https://wa.me/923000000000?text=${text}`, '_blank'); // Replace with real number
    };

    return (
        <MarbleCard className="max-w-4xl mx-auto mb-40 text-black">
            <div className="relative">
                <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter">Initiate Contact</h3>
                <p className="text-[10px] font-mono text-neutral-400 mb-10 uppercase tracking-[0.3em]">Direct Neural Link established</p>
                
                <form ref={formRef} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Protocol Name</label>
                            <input name="name" type="text" placeholder="GUEST_IDENTITY" className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-xl px-6 py-4 outline-none focus:border-[#c5a059] transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Return Address</label>
                            <input name="email" type="email" placeholder="COMM_CHANNEL@HOST.COM" className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-xl px-6 py-4 outline-none focus:border-[#c5a059] transition-all font-medium" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Transmitted Data</label>
                        <textarea name="message" rows={5} placeholder="ENTER_MESSAGE_ENCRYPTION..." className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-xl px-6 py-4 outline-none focus:border-[#c5a059] transition-all font-medium resize-none" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 pt-6">
                        <button onClick={handleEmail} type="button" className="flex-1 bg-black text-white px-8 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#c5a059] transition-all flex items-center justify-center gap-4 group">
                            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" /> Finalize via Mail
                        </button>
                        <button onClick={handleWhatsApp} type="button" className="flex-1 bg-neutral-100 text-black px-8 py-5 rounded-xl font-black uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-4 group shadow-sm">
                            <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" /> WhatsApp Stream
                        </button>
                    </div>
                </form>
            </div>
        </MarbleCard>
    );
};

// --- STYLED COMPONENTS ---

const GoldText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`bg-gradient-to-b from-[#f5e0a3] via-[#c5a059] to-[#8a6e2f] bg-clip-text text-transparent italic font-serif ${className}`}>
        {children}
    </span>
);

const MarbleCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
            rotateZ: [0, 0.5, 0, -0.5, 0]
        }}
        transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className={`relative group p-8 rounded-[1.5rem] bg-white border-4 border-[#e9e9e9] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-2 ${className}`}>
        {/* Marble Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/marble-rough.png')]" />
        {/* Decorative Gold Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#c5a059]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
    </motion.div>
);

const BusinessCard = () => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl mx-auto mt-20 mb-32"
    >
        <motion.div
            animate={{
                y: [0, -15, 0],
                rotateZ: [0, -1, 0, 1, 0]
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="relative p-10 rounded-xl bg-white border-[6px] border-[#e9e9e9] shadow-2xl overflow-hidden text-black"
        >
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/marble-rough.png')]" />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#f5e0a3] via-[#c5a059] to-[#8a6e2f]" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <h5 className="text-4xl font-black tracking-tighter uppercase mb-1">
                        {PORTFOLIO_DATA.profile.name.split(' ')[0]} <GoldText>{PORTFOLIO_DATA.profile.name.split(' ').slice(1).join(' ')}</GoldText>
                    </h5>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-8">Software Engineer & AI Researcher</p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold tracking-tight">{PORTFOLIO_DATA.socials.mail}</span>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-[#c5a059] group-hover:bg-[#c5a059] group-hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-bold tracking-tight">Mannankhan-sys</span>
                        </div>
                    </div>
                </div>

                <div className="md:text-right flex flex-col justify-end">
                    <p className="text-[10px] font-mono text-neutral-300 uppercase tracking-[0.4em] mb-2 font-bold italic underline decoration-[#c5a059]"></p>
                    <p className="text-xs font-black tracking-widest text-[#c5a059]">© 2026 ARCHITECT</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

const PortfolioContent = () => {
    return (
        <div className="w-full relative overflow-hidden bg-transparent text-white font-sans">
            {/* Galaxy Background revealed inside the portal */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-black">
                <Image
                    src="/galaxy-bg-hd.png"
                    alt="Galaxy Void"
                    fill
                    className="object-cover opacity-90 brightness-75 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                <StarBackground />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:px-12 lg:py-32">
                {/* Header */}
                <header className="mb-32 flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#c5a059] text-xs font-mono mb-8 uppercase tracking-[0.3em]">
                            <Sparkles className="w-3 h-3 animate-pulse" /> Senior System Architect
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black mb-8 leading-[0.8] tracking-tighter text-white">
                            M. ABDUL <br /> <GoldText>MANNAN.</GoldText>
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-xl leading-relaxed font-medium">
                            {PORTFOLIO_DATA.profile.description}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="w-72 h-72 md:w-96 md:h-[30rem] rounded-[2rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)] transition-all duration-1000 group">
                            <Image
                                src={PORTFOLIO_DATA.profile.image}
                                alt="Profile"
                                fill
                                className="object-contain hover:brightness-110 transition-all duration-1000 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {/* Floating Info */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-neutral-100 max-w-[240px] text-black">
                            <p className="text-[10px] font-mono text-neutral-400 mb-2 uppercase tracking-widest">Architect Domain</p>
                            <p className="text-lg font-black leading-tight tracking-tight uppercase">
                                {PORTFOLIO_DATA.profile.role.split(' ')[0]} <GoldText>{PORTFOLIO_DATA.profile.role.split(' ').slice(1).join(' ')}</GoldText>
                            </p>
                        </div>
                    </div>
                </header>

                {/* Capabilities Grid */}
                <section className="mb-40 grid md:grid-cols-3 gap-8">
                    {PORTFOLIO_DATA.capabilities.map((c, i) => (
                        <MarbleCard key={i} className="text-black">
                            <div className="bg-neutral-100 rounded-2xl w-14 h-14 flex items-center justify-center mb-8 shadow-inner border border-neutral-200 text-[#c5a059]">
                                {c.icon}
                            </div>
                            <h4 className="text-2xl font-black mb-3 tracking-tight uppercase leading-none">{c.label}</h4>
                            <p className="text-neutral-500 text-sm font-mono leading-relaxed">{c.tools}</p>
                        </MarbleCard>
                    ))}
                </section>

                {/* Featured Research */}
                <section className="mb-40">
                    <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-12">
                        <div>
                            <h3 className="text-xs font-mono text-[#c5a059] uppercase tracking-[0.5em] mb-4 font-bold">Scientific Repository</h3>
                            <h4 className="text-5xl md:text-7xl font-black tracking-tighter text-white">NEURAL WORKS</h4>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <div className="text-right">
                                <p className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-1">Status</p>
                                <p className="text-white font-bold">ALL SYSTEMS NOMINAL</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {PORTFOLIO_DATA.projects.map((p, i) => (
                            <MarbleCard key={i} className="flex flex-col h-full text-black">
                                <div className="flex-1">
                                    <div className="flex gap-2 mb-10">
                                        {p.tech.map((t, idx) => (
                                            <span key={idx} className="text-[10px] font-mono px-3 py-1 rounded-full bg-neutral-200 text-neutral-600 font-bold uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h4 className="text-3xl font-black mb-6 tracking-tight uppercase leading-[0.9]">
                                        {p.title.split(' ')[0]} <GoldText>{p.title.split(' ').slice(1).join(' ')}</GoldText>
                                    </h4>
                                    <p className="text-neutral-600 text-base leading-relaxed mb-12 font-medium">
                                        {p.desc}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-10 border-t border-neutral-200">
                                    <div className="flex items-center gap-6">
                                        <a href={p.github} className="text-neutral-400 hover:text-[#c5a059] transition-colors"><Github className="w-6 h-6" /></a>
                                        <a href={p.demo} className="text-neutral-400 hover:text-[#c5a059] transition-colors"><ExternalLink className="w-6 h-6" /></a>
                                    </div>
                                    <button className="text-xs font-black flex items-center gap-2 hover:gap-4 transition-all tracking-widest text-black">
                                        DECRYPT FILE <ChevronRight className="w-4 h-4 text-[#c5a059]" />
                                    </button>
                                </div>
                            </MarbleCard>
                        ))}
                    </div>
                </section>

                <section className="text-center mb-10">
                    <h3 className="text-xs font-mono text-[#c5a059] uppercase tracking-[0.5em] mb-12 font-bold italic underline">Contact Identity</h3>
                    <ContactForm />
                    <BusinessCard />
                </section>

                <div className="text-center pb-20 opacity-40">
                    <motion.p
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[10px] font-mono uppercase tracking-[0.8em]"
                    >
                        Deliberate scroll to return to initial sequence
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

const PortfolioDemo = () => {
    return (
        <div className="min-h-screen bg-black">
            <ScrollExpandMedia
                mediaType="image"
                mediaSrc="/hero-bg-hd.png"
                bgImageSrc="/hero-bg-hd.png"
                title="THE CREATION"
                subtitle="Symmetry of intelligence"
                scrollToExpand="Dive into the void"
                portalX={52}
                portalY={38}
            >
                <PortfolioContent />
            </ScrollExpandMedia>
        </div>
    );
};

export default PortfolioDemo;
