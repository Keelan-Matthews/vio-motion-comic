import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';
import Appear from './animations/Appear';
import useSound from 'use-sound';

export default function PageTwo() {
    const [play, { stop }] = useSound("audio/page2/panel-8.mp3");

    return (
        <Container fluid className="mt-5 py-5">
            <Row className="my-2">
                <Col className='p2p1' lg={4}>
                    <SlideLeft img="page2/panel-1.riv" isRive="true" sound="audio/page2/panel-1.mp3" />
                </Col>
                <Col className='p2p2' lg={4}>
                    <Appear img="page2/panel-2.riv" isRive="true" delayNum="1" sound="audio/page2/panel-2.mp3" />
                </Col>
                <Col className='p2p1' lg={4}>
                    <SlideRight img="page2/panel-3.riv" isRive="true" delayNum="2" sound="audio/page2/panel-3.mp3" />
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <SlideLeft img="page2/panel-4.jpg" sound="audio/page2/panel-4.mp3" />
                </Col>
                <Col className="p2p5">
                    <SlideRight img="page2/panel-5.riv" isRive="true" delayNum="1" noBorder="true" />
                </Col>
            </Row>
            <Row className="my-4">
                <Col lg={7}>
                    <SlideLeft img="page2/panel-6.jpg" />
                </Col>
                <Col lg={5} className="p2p7">
                    <SlideRight img="page2/panel-7.riv" isRive="true" delayNum="1" sound="audio/page2/panel-7.mp3" />
                </Col>
            </Row>
            <Row className="my-2 p2p8" onClick={() => play()} onMouseLeave={() => stop()}>
                <Appear img="page2/panel-8.riv" isRive="true" />
            </Row>
        </Container>
    )
}
