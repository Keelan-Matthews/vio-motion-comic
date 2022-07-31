import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PageOne() {

    return (
        <Container fluid>
            <Row id="panel-1">
                <img src="page1/panel-1.png" alt="" style={{ maxWidth: '100%' }} />
            </Row>
            <Row className='d-flex'>
                <Col lg="7" id="panel-2">
                    <img src="page1/panel-2.png" alt="" style={{ maxWidth: '100%' }} />
                </Col>
                <Col lg="5" id="panel-3">
                    <img src="page1/panel-3.png" alt="" style={{ maxWidth: '100%' }} />
                </Col>
            </Row>
            <Row>
                <Col lg="4">
                <img src="page1/panel-4.png" alt="" style={{ maxWidth: '100%' }} />
                </Col>
                
                <Col>
                    <Row>
                        <img src="page1/panel-5.png" alt="" style={{ maxWidth: '100%' }} />
                    </Row>
                    <Row>
                        <img src="page1/panel-6.png" alt="" style={{ maxWidth: '100%' }} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
