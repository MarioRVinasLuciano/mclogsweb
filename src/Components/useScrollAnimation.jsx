import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useScrollAnimation = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const opacity = useTransform(scrollYProgress, [1, 0, 1.5], [0.8, 1, 0.8]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

    return { ref, y, opacity, scale, rotate };
};

export default useScrollAnimation;
