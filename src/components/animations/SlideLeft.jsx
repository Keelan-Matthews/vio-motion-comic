import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRive } from 'rive-react';

export default function SlideLeft({ img, delayNum, isRive }) {
    const controls = useAnimation();
    if (delayNum === undefined)
        delayNum = 0;

    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 0px 0px 0px'
    });
    useEffect(() => {
        if (inView) {
            if (isRive)
                rive.play()
                
            controls.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.2,
                    delay: delayNum
                }
            });
        }
        if (!inView) {
            controls.start({ x: '-100vw' });
        }
    }, [inView]);

    const { rive, RiveComponent} = useRive({
        src: img,
        autoplay: false,
        animations: "restart"
    })

    return (
        <div ref={ref} className="canvas-pg-1">
            <motion.div animate={controls} style={{border: '4px solid #354856'}}>
                {isRive 
                    ? <RiveComponent />
                    : <img src={img} alt="" style={{ maxWidth: '100%' }} />
                }
            </motion.div>
        </div>
    )
}