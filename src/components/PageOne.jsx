import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';
import SlideLeft from './animations/SlideLeft';

export default function PageOne() {

    return (
        <Container fluid className="mt-5 pt-5">
            <Row className="my-2">
                <SlideRight img="page1/panel-1.png" />
            </Row>
            <Row className="d-flex">
                <Col lg="7">
                    <SlideLeft img="page1/panel-2.png" />
                </Col>
                <Col lg="5">
                    <SlideRight img="page1/panel-3.png" delay="true" delayNum="1" />
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                    <SlideLeft img="page1/panel-4.png" />
                </Col>

                <Col>
                    <Row className="mt-2">
                        <SlideRight img="page1/panel-5.png" delay="true" delayNum="0.2" />
                    </Row>
                    <Row className="mt-2">
                        <SlideRight img="page1/panel-6.png" delay="true" delayNum="0.5" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
