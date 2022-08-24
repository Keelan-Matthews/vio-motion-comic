import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideRight from './animations/SlideRight';

export default function PageThree() {

    return (
        <Container fluid className="mt-5 py-5">
            <Row className="my-2">
                <Col>
                    <SlideRight img="page4/panel-1.jpg" />
                </Col>
            </Row>
            <Row className="my-2">
                <Col>
                    <SlideRight img="page4/panel-2.jpg" noBorder="true" />
                </Col>
            </Row>
        </Container>
    )
}
