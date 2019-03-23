import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';


class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Jumbotron>
              <Media>
                <img src={logo} className="App-logo" alt="logo" />
                <Media.Body>
                  <h1>Because petroleum is for your car, not your skin.</h1>
                  <p>We make skin care products that amaze our customers and are customized to their skin types.</p>
                </Media.Body>
              </Media>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
