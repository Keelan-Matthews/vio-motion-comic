import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRive } from 'rive-react';
import useSound from 'use-sound';

export default function Appear({ img, delayNum, isRive, sound }) {

    const [play, { stop }] = useSound(sound);

    const controls = useAnimation();
    if (delayNum === undefined)
        delayNum = 0;

    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 900px 0px 500px'
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
            if (sound) stop();
            controls.start({ scale: 0, opacity: 0 });
            if (isRive && rive)
                rive.reset();
        }
    }, [inView, rive]);
    return (
        <div ref={ref} className="position-relative" style={{ height: '100%' }} onClick={() => handleHover()} onMouseLeave={() => stop()}>
            <motion.div animate={controls}>
                {sound
                    ? <img src="volume.svg" alt="" className="position-absolute ps-2 pt-2" width="30" />
                    : ''
                }
                {isRive
                    ? <RiveComponent />
                    : <img src={img} alt="" style={{ maxWidth: '100%' }} />
                }
            </motion.div>
        </div>
    )
}
