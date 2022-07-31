import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Appear({ img, delayNum }) {
    const controls = useAnimation();
    if (delayNum === undefined)
        delayNum = 0;

    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 900px 0px 500px'
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                scale: 1, 
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 0.6,
                    bounce: 0.7,
                    delay: delayNum
                }
            });
        }
        if (!inView) {
            controls.start({ scale: 0, opacity: 0 });
        }
    }, [inView]);
    return (
        <div ref={ref}>
            <motion.div animate={controls}>
                <img src={img} alt="" style={{ maxWidth: '100%' }} />
            </motion.div>
        </div>
    )
}
