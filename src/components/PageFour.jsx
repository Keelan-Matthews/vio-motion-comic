import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';

export default function PageThree() {

    return (
        <Container fluid className="mt-5 py-5">
            <Row className="my-2">
                <Col className='p4p1'>
                    <SlideRight img="page4/panel-1.riv" isRive="true" sound="audio/page4/ring.mp3" />
                </Col>
            </Row>
            <Row className="my-2">
                <Col className='p4p2'>
                    <SlideRight img="page4/panel-2.riv" isRive="true" noBorder="true" />
                </Col>
            </Row>
        </Container>
    )
}
