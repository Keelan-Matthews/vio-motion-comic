import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';
import Appear from './animations/Appear';

export default function PageOne() {

    return (
        <Container fluid className="my-5 py-5">
            <Row className="my-2 snap-child">
                <img src="page1/panel-1.png" alt="" />
            </Row>
            <Row className="d-flex snap-child">
                <Col lg="7">
                    <SlideLeft img="page1/panel-2.riv" isRive="true" />
                </Col>
                <Col lg="5">
                    <SlideRight img="page1/panel-3.png" delayNum="1" />
                </Col>
            </Row>
            <div className='snap-child'>
                <Row className='position-relative'>
                    <div className="bubbles" style={{ left: '300px', top: '300px' }}>
                        <Appear img="page1/bubble-1.png" delayNum="1" />
                    </div>
                    <div className="bubbles" style={{ left: '540px', top: '-30px' }}>
                        <Appear img="page1/bubble-2.png" delayNum="2" />
                    </div>
                    <div className="bubbles" style={{ left: '1000px', top: '120px' }}>
                        <Appear img="page1/bubble-3.png" delayNum="2.5" />
                    </div>
                    <div className="bubbles" style={{ left: '700px', top: '300px' }}>
                        <Appear img="page1/bubble-4.png" delayNum="2.7" />
                    </div>
                    <Col lg="4">
                        <SlideLeft img="page1/panel-4.jpg" />
                    </Col>

                    <Col>
                        <Row className="mt-2">
                            <SlideRight img="page1/panel-5.jpg" delayNum="0.2" />
                        </Row>
                        <Row className="mt-2">
                            <SlideRight img="page1/panel-6.jpg" delayNum="2" />
                        </Row>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
