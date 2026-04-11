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
import { motion, AnimatePresence } from 'framer-motion';

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
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [isFullyExpanded, setIsFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const sensitivity = 0.0008;

            if (isFullyExpanded) {
                // Feature: Cyclic Reset - Return to hero section if scrolling hard at the bottom
                const contentContainer = sectionRef.current?.querySelector('.overflow-y-auto');
                if (contentContainer) {
                    const isAtBottom = contentContainer.scrollHeight - contentContainer.scrollTop <= contentContainer.clientHeight + 2;
                    // If at bottom and scrolling down hard
                    if (isAtBottom && e.deltaY > 50) {
                        setScrollProgress(0);
                        setIsFullyExpanded(false);
                        window.scrollTo(0, 0);
                        return;
                    }
                }
                return;
            }

            // Normal expansion logic
            e.preventDefault();
            const newProgress = Math.min(Math.max(scrollProgress + e.deltaY * sensitivity, 0), 1);
            setScrollProgress(newProgress);

            if (newProgress >= 1) {
                setIsFullyExpanded(true);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const sensitivity = 0.002;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (isFullyExpanded) {
                const contentContainer = sectionRef.current?.querySelector('.overflow-y-auto');
                if (contentContainer) {
                    const isAtBottom = contentContainer.scrollHeight - contentContainer.scrollTop <= contentContainer.clientHeight + 2;
                    if (isAtBottom && deltaY > 50) {
                        setScrollProgress(0);
                        setIsFullyExpanded(false);
                        window.scrollTo(0, 0);
                        return;
                    }
                }
                return;
            }

            e.preventDefault();
            const newProgress = Math.min(Math.max(scrollProgress + deltaY * sensitivity, 0), 1);
            setScrollProgress(newProgress);

            if (newProgress >= 1) {
                setIsFullyExpanded(true);
            }
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
    }, [scrollProgress, isFullyExpanded, touchStartY]);

    const portalScale = 0.02 + scrollProgress * 0.98;
    const bgOpacity = Math.max(0, 1 - scrollProgress * 1.5);
    const contentOpacity = Math.max(0, (scrollProgress - 0.75) * 4);
    const contentScale = 0.9 + scrollProgress * 0.1;

    return (
        <div ref={sectionRef} className="relative min-h-screen bg-black overflow-hidden select-none">
            {/* 1. PORTAL (Media/Main Content) - LOWER Z-INDEX */}
            <div className="fixed inset-0 z-10 flex items-center justify-center pointer-events-none">
                <motion.div
                    style={{
                        position: 'absolute',
                        left: isFullyExpanded ? '0%' : `${portalX}%`,
                        top: isFullyExpanded ? '0%' : `${portalY}%`,
                        transform: isFullyExpanded ? 'none' : 'translate(-50%, -50%)',
                        width: isFullyExpanded ? '100vw' : `${portalScale * 100}vw`,
                        height: isFullyExpanded ? '100vh' : `${portalScale * 100}vh`,
                        borderRadius: isFullyExpanded ? '0px' : '50%',
                        overflow: 'hidden',
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
                    animate={{
                        opacity: Math.max(0, 1 - scrollProgress * 5),
                        scale: 1 + scrollProgress * 0.1,
                        y: -20 * scrollProgress
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
