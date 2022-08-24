import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';
import Appear from './animations/Appear';
import useSound from 'use-sound';

export default function PageThree() {
    const [play, { stop }] = useSound("audio/page3/panel-4.mp3");

    return (
        <Container fluid className="mt-5 py-5">
            <Row className="my-2">
                <Col lg={6}>
                    <SlideLeft img="page3/panel-1.jpg" />
                </Col>
                <Col className="p3p2" lg={6}>
                    <SlideRight img="page3/panel-2.riv" isRive="true" delayNum="1" sound="audio/page3/panel-2.mp3" />
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <SlideLeft img="page3/panel-3.jpg" />
                </Col>
            </Row>
            <Row className="my-2" onClick={() => play()} onMouseLeave={() => stop()}>
                <Col className='p3p4'>
                    <Appear img="page3/panel-4.riv" isRive="true" />
                </Col>
            </Row>
        </Container>
    )
}
