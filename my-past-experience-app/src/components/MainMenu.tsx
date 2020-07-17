import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from './../img/avatar.jpg';
const MainMenu: React.FC<any> = React.memo((props) => {
    return (
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
                  <Nav.Link className="text-white" href="/main-page">Главная</Nav.Link>
                  <Nav.Link className="text-white" href="/warrior-path-page">Путь война</Nav.Link>
                  <Nav.Link className="text-white" href="/personality-path-page">Путь личности</Nav.Link>
                  <Nav.Link className="text-white" href="/man-path-page">Путь человека</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
    )
})

export default MainMenu;