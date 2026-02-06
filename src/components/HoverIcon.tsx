import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HoverIconProps {
    arrowColor?: string;
    circleColor?: string;
    size?: number;
    label?: string; // New prop for custom text
    children: React.ReactNode;
    className?: string;
}

const HoverIcon: React.FC<HoverIconProps> = ({
    arrowColor = "#000000",
    circleColor = "#f4f4f5",
    size = 100,
    label,
    children,
    className = "",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number>();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const halfSize = size / 2;

        const x = Math.max(halfSize, Math.min(e.clientX - rect.left, rect.width - halfSize));
        const y = Math.max(halfSize, Math.min(e.clientY - rect.top, rect.height - halfSize));

        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
        }

        requestRef.current = requestAnimationFrame(() => {
            setMousePos({ x, y });
        });
    };

    useEffect(() => {
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-default md:cursor-none ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        key="icon"
                        className="hidden md:flex"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `translate(${mousePos.x - size / 2}px, ${mousePos.y - size / 2}px)`,
                            width: size,
                            height: size,
                            backgroundColor: circleColor,
                            borderRadius: "50%",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: "none",
                            zIndex: 50,
                            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {label ? (
                            <span
                                style={{ color: arrowColor }}
                                className="text-[10px] font-bold tracking-widest uppercase"
                            >
                                {label}
                            </span>
                        ) : (
                            <svg
                                width={size * 0.4}
                                height={size * 0.4}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={arrowColor}
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ transform: "rotate(45deg)" }}
                            >
                                <line x1="12" y1="19" x2="12" y2="5" />
                                <polyline points="5 12 12 5 19 12" />
                            </svg>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HoverIcon;
