import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';
import Appear from './animations/Appear';

export default function PageTwo() {

    return (
        <Container fluid className="my-5 py-5">
            <Row className="my-2">
                <Col className='p2p1' lg={4}>
                    <SlideLeft img="page2/panel-1.riv" isRive="true" />
                </Col>
                <Col className='p2p2' lg={4}>
                    <Appear img="page2/panel-2.riv" isRive="true" delayNum="1" />
                </Col>
                <Col lg={4}>
                    <SlideRight img="page2/panel-3.jpg" delayNum="2" />
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <SlideLeft img="page2/panel-4.jpg" delayNum="2.2" />
                </Col>
                <Col>
                    <SlideRight img="page2/panel-5.jpg" delayNum="3" />
                </Col>
            </Row>
            <Row className="my-2">
                <Col lg={7}>
                    <SlideLeft img="page2/panel-6.jpg" />
                </Col>
                <Col lg={5}>
                    <SlideRight img="page2/panel-7.jpg" delayNum="1" />
                </Col>
            </Row>
            <Row className="my-2 p2p8">
                <Appear img="page2/panel-8.riv" isRive="true" />
            </Row>
        </Container>
    )
}
