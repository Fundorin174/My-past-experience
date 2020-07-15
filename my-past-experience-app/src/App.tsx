import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import avatar from './img/avatar.jpg';
import mainPhoto from './img/main_photo.jpg';
import warrior from './img/logo_warrior.png';
import personality from './img/logo_personality.png';
import man from './img/logo_human.png';
import phone from './img/icons/phone.png';
import email from './img/icons/email.png';
import instagram from './img/icons/instagram.png';
import letter from './img/icons/letter.png';
import telegram from './img/icons/telegram.png';
import viber from './img/icons/viber.png';
import vk from './img/icons/vk.png';
import whatsapp from './img/icons/whatsapp.png';
import youtube from './img/icons/youtube.png';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavLink } from 'react-router-dom';
function App() {
  return (<div className="App">
    <Container fluid className="h-100">
      <Container className="h-100 d-flex flex-column">
        <Row>
          <Col className='pl-0 pr-0'>
            <Navbar id="main-menu" bg="primary" expand="lg" className="navbar-dark">
              <Navbar.Brand href="/" className="align-center">
                <Image
                  src={avatar}
                  width="50"
                  height="50"
                  className="d-inline-block align-middle mr-2"
                  alt="React Bootstrap logo"
                  roundedCircle
                />
                <span className="align-middle text-white">Дмитрий Сенькевич</span>
              </Navbar.Brand>
              <Navbar.Toggle  aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav activeKey="/" >
                  <Nav.Link className="text-white" href="/">Главная</Nav.Link>
                  <Nav.Link className="text-white" href="/warrior-path-page">Путь война</Nav.Link>
                  <Nav.Link className="text-white" href="/personality-path-page">Путь личности</Nav.Link>
                  <Nav.Link className="text-white" href="/man-path-page">Путь человека</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
        <Row id="main-content" className="h-100 pt-5 pb-5 bg-secondary d-flex align-content-center " >
          <Col xs={12} md={4} lg={6} className="text-center d-none d-md-block">
            <Image id='main-img' className="align-middle"
              src={mainPhoto}
              width='80%'
              roundedCircle
            />
          </Col>
          <Col xs={12} md={8} lg={6}>

            <Row>
              <Col>
                <h1 className="lg display-1 sm display-3" >Привет</h1>
                <h3 className="lg display-4">Будем знакомы:</h3>
                <h4>Меня зовут Дмитрий Сенькевич! </h4>
                <h4>Хочешь узнать обо мне больше?</h4>
                <h4>Выбирай, что тебе интересно и жми на ссылку!</h4>
              </Col>
            </Row>
            <Row>
              <Col >
                <NavLink to={"/warrior-path-page"} >
                  <Figure className="text-center ">
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
                </NavLink>
              </Col>
              <Col>
                <NavLink to={"/personality-path-page"}>
                  <Figure className="text-center">
                    <Figure.Image
                      width='80%'
                      roundedCircle
                      alt="personality"
                      src={personality}
                    />
                    <Figure.Caption>
                      ПУТЬ ЛИЧНОСТИ
                </Figure.Caption>
                  </Figure>
                </NavLink>

              </Col>
              <Col>
                <NavLink to={"/man-path-page"}>
                  <Figure className="text-center">
                    <Figure.Image
                      width='80%'
                      roundedCircle
                      alt="man"
                      src={man}
                    />
                    <Figure.Caption>
                      ПУТЬ ЧЕЛОВЕКА
                </Figure.Caption>
                  </Figure>
                </NavLink>

              </Col>

            </Row>
          </Col>
        </Row>
        <Row id="footer" className="bg-primary text-white text-center d-flex justify-content-between">
          <Col lg={4} xs={6} className ="h-100">
            <Card  className= "d-flex flex-row h-100 mb-0 bg-primary">
              <Card.Img id = "card-img" src={phone} className="d-flex align-self-center ml-3"/>
              <Card.Body className="m-0 pl-0">
                <Card.Title className="mb-0">Звоните</Card.Title>
                <Card.Link className = "text-white" href="tel:+79507656841">+7-950-765-6841</Card.Link><br></br>
                <Card.Link href="https://api.whatsapp.com/send?phone=79507656841" target="_blank" rel="noopener">
                  <Image
                  src={whatsapp}
                  width="20"
                  height="20"
                  className="d-inline-block align-middle mr-2"
                  alt="whatsapp"
                  roundedCircle/>
                  </Card.Link>
                <Card.Link href="viber://chat?number=%2B79507656841" target="_blank" rel="noopener">
                <Image
                  src={viber}
                  width="20"
                  height="20"
                  className="d-inline-block align-middle mr-2"
                  alt="viber"
                  roundedCircle/>
                </Card.Link>
                <Card.Link href="tg://resolve?domain=+79042120289" target="_blank" rel="noopener">
                <Image
                  src={telegram}
                  width="20"
                  height="20"
                  className="d-inline-block align-middle mr-2"
                  alt="telegram"
                  roundedCircle/>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col className ="h-100  d-none d-lg-block">
            <Card  className= "d-flex flex-row h-100 mb-0 bg-primary">
              <Card.Img id = "card-img" src={email} className="d-flex align-self-center ml-3"/>
              <Card.Body className="m-0">
                <Card.Title className="mb-0">Пишите</Card.Title>
                <Card.Link className = "text-white" href="mailto:fundorin174@gmail.com">fundorin174@gmail.com</Card.Link><br></br>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} xs={6} className ="h-100">
            <Card  className= "d-flex flex-row h-100 mb-0 bg-primary">
                <Card.Body className="m-0">
                <Card.Title className="mb-2">Заходите</Card.Title>
                <Card.Link href="https://vk.com/fundorin174" target="_blank" rel="noopener">
                  <Image
                  src={vk}
                  width="40"
                  height="40"
                  className="d-inline-block align-middle mr-2"
                  alt="vk"
                  roundedCircle/>
                  </Card.Link>
                <Card.Link href="https://www.instagram.com/vnikny/" target="_blank" rel="noopener">
                <Image
                  src={instagram}
                  width="40"
                  height="40"
                  className="d-inline-block align-middle mr-2"
                  alt="instagram"
                  />
                </Card.Link>
                <Card.Link href="https://www.youtube.com/channel/UCTRQvfXq2YRe3h_TQmkn47Q?view_as=subscriber" target="_blank" rel="noopener">
                <Image
                  src={youtube}
                  width="40"
                  height="40"
                  className="d-inline-block align-middle mr-2"
                  alt="youtube"
                  />
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
  );
}

export default App;
