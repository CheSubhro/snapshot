import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='footer'>
          2024 &copy; | Gallery-Pexels
        </Col>
      </Row>
    </Container>

  )
}

export default Footer