import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import avatar from './img/avatar.jpg';
import mainPhoto from './img/main_photo.jpg';
import warrior from './img/logo_warrior.png';
import personality from './img/logo_personality.png';
import human from './img/logo_human.png';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (<div className="App">
    <Container>
      <Row>
          <Col className = 'pl-0 pr-0'>
          <Navbar id = "main-menu" bg="primary" expand="lg" >
        <Navbar.Brand href="#home" className="align-center">
          <Image
            src={avatar}
            width="50"
            height="50"
            className="d-inline-block align-middle mr-2"
            alt="React Bootstrap logo"
            roundedCircle
          />
          <span className="align-middle">Дмитрий Сенькевич</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey="/home" >
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#home">Путь война</Nav.Link>
            <Nav.Link href="#home">Путь личности</Nav.Link>
            <Nav.Link href="#link">Путь человека</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
          </Col>
      </Row>
      <Row id = "main-content" className="pt-5 bg-secondary" >
        <Col xs={12} sm={6} className="text-center">
          <Image
            src={mainPhoto}
            width='80%'
            rounded
          />
        </Col>
        <Col xs={12} sm={6}>
          <Row>
            <h1>Привет</h1>
            <h3>Будем знакомы:</h3>
            <p>Меня зовут Дмитрий Сенькевич! </p>
            <p>Хочешь узнать обо мне больше?</p>
            <p>Выбирай, что тебе интересно и жми на ссылку!</p>
          </Row>
          <Row>
            <Col>
              <Figure className="text-center">
                <Figure.Image
                  width='80%'
                  roundedCircle
                  alt="warrior"
                  src={warrior}
                />
                <Figure.Caption >
                  ПУТЬ ВОЙНА
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
            <Figure className="text-center">
                <Figure.Image
                  width='80%'
                  roundedCircle
                  alt="warrior"
                  src={personality}
                />
                <Figure.Caption>
                  ПУТЬ ЛИЧНОСТИ
                </Figure.Caption>
              </Figure>
            </Col>
            <Col>
            <Figure className="text-center">
                <Figure.Image
                  width='80%'
                  roundedCircle
                  alt="warrior"
                  src={human}
                />
                <Figure.Caption>
                  ПУТЬ ЧЕЛОВЕКА
                </Figure.Caption>
              </Figure>
            </Col>

          </Row>
        </Col>
      </Row>
      <Row id = "footer">
        <Col>Звоните</Col>
        <Col>Пишите</Col>
        <Col>Заходите</Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;
