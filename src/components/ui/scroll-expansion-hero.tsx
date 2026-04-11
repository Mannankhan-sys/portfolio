'use client';

import {
    useEffect,
    useRef,
    useState,
    ReactNode,
    TouchEvent,
    WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';

interface ScrollExpandMediaProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    title?: string;
    subtitle?: string;
    scrollToExpand?: string;
    portalX?: number; // 0-100 percentage
    portalY?: number; // 0-100 percentage
    children?: ReactNode;
}

const ScrollExpandMedia = ({
    mediaType = 'video',
    mediaSrc,
    posterSrc,
    bgImageSrc,
    title,
    subtitle,
    scrollToExpand,
    portalX = 50,
    portalY = 50,
    children,
}: ScrollExpandMediaProps) => {
    const [isFullyExpanded, setIsFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);

    const rawProgress = useMotionValue(0);
    const smoothProgress = useSpring(rawProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        return smoothProgress.on('change', (v) => {
            setCurrentProgress(v);
            if (v >= 0.99) setIsFullyExpanded(true);
            else if (v < 0.99 && isFullyExpanded) setIsFullyExpanded(false);
        });
    }, [smoothProgress, isFullyExpanded]);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const sensitivity = 0.001;

            if (isFullyExpanded) {
                const contentContainer = sectionRef.current?.querySelector('.overflow-y-auto');
                if (contentContainer) {
                    const isAtBottom = contentContainer.scrollHeight - contentContainer.scrollTop <= contentContainer.clientHeight + 2;
                    if (isAtBottom && e.deltaY > 100) {
                        rawProgress.set(0);
                        setIsFullyExpanded(false);
                        window.scrollTo(0, 0);
                        return;
                    }
                }
                return;
            }

            e.preventDefault();
            const newProgress = Math.min(Math.max(rawProgress.get() + e.deltaY * sensitivity, 0), 1);
            rawProgress.set(newProgress);
        };

        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const sensitivity = 0.003;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (isFullyExpanded) {
                const contentContainer = sectionRef.current?.querySelector('.overflow-y-auto');
                if (contentContainer) {
                    const isAtBottom = contentContainer.scrollHeight - contentContainer.scrollTop <= contentContainer.clientHeight + 2;
                    if (isAtBottom && deltaY > 100) {
                        rawProgress.set(0);
                        setIsFullyExpanded(false);
                        window.scrollTo(0, 0);
                        return;
                    }
                }
                return;
            }

            e.preventDefault();
            const newProgress = Math.min(Math.max(rawProgress.get() + deltaY * sensitivity, 0), 1);
            rawProgress.set(newProgress);
            setTouchStartY(touchY);
        };

        const handleScroll = (): void => {
            if (!isFullyExpanded) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
        window.addEventListener('scroll', handleScroll as EventListener);
        window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
        window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel as unknown as EventListener);
            window.removeEventListener('scroll', handleScroll as EventListener);
            window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
            window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
        };
    }, [isFullyExpanded, touchStartY, rawProgress]);

    const portalClip = useTransform(smoothProgress, [0, 1], [
        `circle(8% at ${portalX}% ${portalY}%)`,
        `circle(150% at ${portalX}% ${portalY}%)`
    ]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
    const contentOpacity = useTransform(smoothProgress, [0.1, 1], [0.3, 1]);
    const contentScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden select-none">
            {/* 1. PORTAL (Media/Main Content) - LOWER Z-INDEX */}
            <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
                <motion.div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100vw',
                        height: '100vh',
                        clipPath: portalClip,
                        pointerEvents: isFullyExpanded ? 'auto' : 'none',
                    }}
                    className="bg-black"
                >
                    <motion.div
                        className="w-full h-full relative"
                        style={{
                            opacity: contentOpacity,
                            scale: contentScale,
                            pointerEvents: isFullyExpanded ? 'auto' : 'none'
                        }}
                    >
                        {mediaType === 'video' ? (
                            <video
                                src={mediaSrc}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover opacity-20"
                            />
                        ) : (
                            <Image
                                src={mediaSrc}
                                alt="Portal Image"
                                fill
                                className="object-cover opacity-15 grayscale brightness-50"
                            />
                        )}

                        <div className={`absolute inset-0 z-10 ${isFullyExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* 2. INTRO TEXT - HIGHER Z-INDEX */}
            <div className="fixed inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                <motion.div
                    style={{
                        opacity: bgOpacity,
                        scale: useTransform(smoothProgress, [0, 1], [1, 1.2]),
                        y: useTransform(smoothProgress, [0, 1], [0, -50])
                    }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-4 text-neutral-400 text-lg md:text-xl font-light tracking-[0.5em] uppercase drop-shadow-lg">
                            {subtitle}
                        </p>
                    )}
                    {scrollToExpand && (
                        <motion.p
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="mt-12 text-white/40 text-xs font-medium uppercase tracking-widest"
                        >
                            {scrollToExpand}
                        </motion.p>
                    )}
                </motion.div>
            </div>

            {/* 3. BACKGROUND LAYER - BOTTOM */}
            <motion.div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    opacity: bgOpacity,
                }}
            >
                <Image
                    src={bgImageSrc}
                    alt="Portal Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
        </div>
    );
};

export default ScrollExpandMedia;
