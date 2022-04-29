import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='mt-5 bg-dark text-light'>
            <br />
            <Container>
                <Row className='g-5 mx-auto'>
                    <Col lg={4} md={6} sm={12}>
                        <h3>About Me</h3>
                        <p>
                            My name is Burhan Uddin. I'm 21. I'm learning web dev yaay.!
                            Oneday I'll become a web developer.
                        </p>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3>Contact Me</h3>
                        <p>Email: burhan14nn@gmail.com</p>
                        <p>Phone: 018xxxxxxx</p>

                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <h3>Follow Me</h3>
                        <p>Facebook: </p>
                        <p>Twitter: </p>
                        <p>Instagram: </p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;