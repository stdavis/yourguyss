import React, { Component } from 'react';
import logo from './logo.svg';
import hand from './hand.jpg';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class App extends Component {
  render() {
    return (
      <Container>
        <Row className='logo-container'>
          <Col lg>
            <img src={logo} alt="logo" />
          </Col>
          <Col lg>
            <Image src={hand} alt="hand" roundedCircle />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm>
            <Row>
              <Col>
                <h3>We're Simple</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>We enhance our lotions and creams only with essential oils. They don't contain any artificial colors or scents.</p>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Row>
              <Col>
                <h3>We're Basic</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Let mother nature pamper your skin with plant based oils like olive and avocado.</p>
              </Col>
            </Row>
          </Col>
          <Col sm>
            <Row>
              <Col>
                <h3>We're Effective</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Our products are petroleum free which allows your skin to breath and thrive. Because petroleum is for your car, not your skin.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
