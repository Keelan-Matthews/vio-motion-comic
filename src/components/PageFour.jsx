import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRive, useStateMachineInput } from "rive-react";
import useSound from 'use-sound';

export default function PageThree() {
    const [play, { stop }] = useSound("audio/page4/gunshot.mp3");
    const [shot, setShot] = useState(false);

    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 0.8,
        rootMargin: '700px 0px 0px 0px'
    });

    const { rive, RiveComponent } = useRive({
        src: "page4/panel-2.riv",
        stateMachines: "statemachine",
        autoplay: false
    });

    const shoot = useStateMachineInput(rive, "statemachine", "shootinput");
	const reset = useStateMachineInput(rive, "statemachine", "reset");

    function handleHover() {
        shoot.fire();
        setShot(true);
        play();
    }

    function handleLeave() {
        stop();
    }

    useEffect(() => {
        if (inView) {
            if (rive){
                rive.play();
            } 

            controls.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.2
                }
            });
        }
        if (!inView) {
            controls.start({ x: '100vw' });
            if (rive && shot) {
                reset.fire();
                setShot(false);
            }
        }
    }, [inView, rive]);

    return (
        <Container fluid className="mt-5 py-5">
            <Row className="my-2">
                <Col className='p4p1'>
                    <SlideRight img="page4/panel-1.riv" isRive="true" sound="audio/page4/ring.mp3" />
                </Col>
            </Row>
            <Row ref={ref} className="my-2" onClick={() => handleHover()} onMouseLeave={() => handleLeave()}>
                <Col className='p4p2 sight'>
                    <div className="hover" style={{ height: '100%' }}>
                        <motion.div animate={controls}>
                            <RiveComponent />
                        </motion.div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
