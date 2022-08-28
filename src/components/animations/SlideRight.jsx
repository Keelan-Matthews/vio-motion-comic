import React, { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRive, useStateMachineInput } from 'rive-react';
import useSound from 'use-sound';

export default function SlideRight({ img, delayNum, isRive, stateMachine, noBorder, sound }) {

    const [play, { stop }] = useSound(sound);

    const controls = useAnimation();
    if (delayNum === undefined)
        delayNum = 0;

    const [ref, inView] = useInView({
        threshold: 0.8,
        rootMargin: '700px 0px 0px 0px'
    });

    const rivParam = stateMachine ? {src: img, autoplay: true, stateMachines: "statemachine"} : {src: img, autoplay: true, animations: "anim"};

    const { rive, RiveComponent } = useRive(rivParam);

    const trigger = stateMachine ? useStateMachineInput(rive,"statemachine","anim") : null;

    function handleHover() {
        if (sound) play();
        if (isRive && rive) {
            rive.reset();
            rive.play()
        }
    }

    const [play1, { stop1 }] = useSound("audio/page4/gunshot.mp3");
    useEffect(() => {
        if (inView) {
            if (isRive && rive) {
                rive.play()
                rive.on('statechange', () => {
                    play1();
                });
            }

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

            controls.start({ x: '100vw' });
            if (isRive && rive)
                rive.reset();
        }
    }, [inView, rive]);

    return (
        <div ref={ref} className="hover position-relative" style={{ height: '100%' }} onClick={() => handleHover()} onMouseLeave={() => stop()}>
            <motion.div animate={controls} style={{ border: noBorder ? '' : '8px solid #354856' }}>
                {sound
                    ? <img src="volume.svg" alt="" className="position-absolute ms-3 mt-3" width="30" />
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
