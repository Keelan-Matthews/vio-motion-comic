import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRive } from 'rive-react';
import useSound from 'use-sound';

export default function SlideLeft({ img, delayNum, isRive, noBorder, sound }) {

    const [play, { stop }] = useSound(sound);

    const controls = useAnimation();
    if (delayNum === undefined)
        delayNum = 0;

    if (isRive === undefined)
        isRive = false;

    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 0px 0px 0px'
    });

    const { rive, RiveComponent } = useRive({
        src: img,
        autoplay: false,
        animations: "anim"
    })

    function handleHover() {
        if (sound) play();
        if (isRive && rive) {
            rive.reset();
            rive.play()
        }
    }

    useEffect(() => {
        if (inView) {
            if (isRive && rive)
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
            if (sound) stop();

            controls.start({ x: '-100vw' });
            if (isRive && rive)
                rive.reset();
        }
    }, [inView, rive]);

    return (
        <div ref={ref} className="hover" style={{ height: '100%' }} onMouseEnter={() => handleHover()} onMouseLeave={() => stop()}>
            <motion.div animate={controls} style={{border: noBorder ? '' : '8px solid #354856'  }}>
                {isRive
                    ? <RiveComponent />
                    : <img src={img} alt="" style={{ maxWidth: '100%' }} />
                }
            </motion.div>
        </div>
    )
}