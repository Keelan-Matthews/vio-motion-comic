import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';
import Appear from './animations/Appear';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PageOne() {
    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 1,
        rootMargin: '500px 0px 0px 0px'
    });

    useEffect(() => {
        if (inView) {
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
            controls.start({ x: '400vw' });
        }
    }, [inView]);

    return (
        <Container fluid className="my-5 py-5">
            <Row className="my-2">
                <img src="page1/panel-1.png" alt="" />
            </Row>
            <Row className="d-flex">
                <Col lg="7" className="canvas-pg-1">
                    <SlideLeft img="page1/panel-2.riv" isRive="true" />
                </Col>
                <Col lg="5" className="canvas-pg-1">
                    <SlideRight img="page1/panel-3.riv" delayNum="1" isRive="true" />
                </Col>
            </Row>
            <div ref={ref}>
                <motion.div animate={controls}>
                    <Row className='position-relative'>
                        <div className="bubbles" style={{ left: '300px', top: '300px' }}>
                            <Appear img="page1/bubble-1.png" delayNum="1" />
                        </div>
                        <div className="bubbles" style={{ left: '540px', top: '-30px' }}>
                            <Appear img="page1/bubble-2.png" delayNum="2" />
                        </div>
                        <div className="bubbles" style={{ left: '1000px', top: '120px' }}>
                            <Appear img="page1/bubble-3.png" delayNum="4" />
                        </div>
                        <div className="bubbles" style={{ left: '700px', top: '300px' }}>
                            <Appear img="page1/bubble-4.png" delayNum="4.5" />
                        </div>
                        <Col lg="4" className="mt-2">
                            <SlideRight img="page1/panel-4.jpg" />
                        </Col>

                        <Col>
                            <Row className="mt-2">
                                <SlideRight img="page1/panel-5.jpg" delayNum="0.2" />
                            </Row>
                            <Row className="mt-2">
                                <SlideRight img="page1/panel-6.jpg" delayNum="4.7" />
                            </Row>
                        </Col>
                    </Row>
                </motion.div>
            </div>
        </Container>
    )
}
