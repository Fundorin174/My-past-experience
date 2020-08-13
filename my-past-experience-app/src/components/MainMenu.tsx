import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from './../img/avatar.jpg';
import { NavLink } from 'react-router-dom';
const MainMenu: React.FC<any> = React.memo((props) => {
    return (
        <Row id = 'maim-menu-wrp'>
          <Col className='pl-0 pr-0'>
            <Navbar id="main-menu" bg="primary" expand="lg" className="navbar-dark">
              <Navbar.Brand as={NavLink} to="/" className="align-center">
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
                  <Nav.Link as={NavLink} to = "/main-page" className="text-white" >Главная</Nav.Link>
                  <Nav.Link as={NavLink} to = "/warrior-path-page" className="text-white" >Путь война</Nav.Link>
                  <Nav.Link as={NavLink} to = "/personality-path-page" className="text-white" >Путь личности</Nav.Link>
                  <Nav.Link as={NavLink} to = "/man-path-page" className="text-white" >Путь человека</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
    )
})

export default MainMenu;