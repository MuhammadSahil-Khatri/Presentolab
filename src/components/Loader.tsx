import React from "react";
import { motion } from "framer-motion";

interface LineScaleProps {
    size?: number;       // total width/height of the loader
    color?: string;      // bar color
    duration?: number;   // animation duration
    spacing?: number;    // spacing between bars
}

const LineScale: React.FC<LineScaleProps> = ({
    size = 60,
    duration = 1.2,
    spacing = 8,
}) => {
    const bars = 6;
    const colors = ["#FEDB2B", "#F3742A", "#EE343A", "#C5549F", "#8E54A2", "#6B55A4"];
    const beginTimes = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: size,
                height: size,
                gap: spacing,
            }}
        >
            {Array.from({ length: bars }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scaleY: i % 2 === 0 ? [1, 0.4, 1] : [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                        delay: beginTimes[i],
                    }}
                    style={{
                        backgroundColor: colors[i],
                        width: (size - spacing * (bars - 1)) / (bars * 1.99),
                        height: "100%",
                        borderRadius: 20, // More rounded like the image
                        originY: 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default LineScale;
