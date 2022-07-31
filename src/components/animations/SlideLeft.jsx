import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideLeft({ img, delay, delayNum }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 0px 0px 0px'
    });
    useEffect(() => {
        if (inView) {
            if (delay) {
                controls.start({
                    x: 0,
                    transition: {
                        type: 'spring',
                        duration: 1,
                        bounce: 0.2,
                        delay: { delayNum }
                    }
                });
            }
            else {
                controls.start({
                    x: 0,
                    transition: {
                        type: 'spring',
                        duration: 1,
                        bounce: 0.2,
                    }
                });
            }
        }
        if (!inView) {
            controls.start({ x: '-100vw' });
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <motion.div
                animate={controls}
            >
                <img src={img} alt="" style={{ maxWidth: '100%' }} />
            </motion.div>
        </div>
    )
}