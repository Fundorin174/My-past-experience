import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from './../img/avatar.jpg';
import { NavLink, Link } from 'react-router-dom';
import { ListType } from '../redux/wayOfHumanPageReducer';
import { AppStateType } from '../redux/redux-store';
import {setCurrentList} from './../redux/wayOfHumanPageReducer';
import { getCurrentNavBarList } from './selectors';


const MainMenu: React.FC<any> = React.memo((props) => {

  const setCurrentListByZero = () => {
    props.navBarList && props.setCurrentList(props.navBarList[0]);
  }

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
                  <Nav.Link onClick={setCurrentListByZero} as={Link} className="text-white" to="/main-page">Главная</Nav.Link>
                  <Nav.Link onClick={setCurrentListByZero} as={Link} className="text-white" to="/warrior-path-page">Путь война</Nav.Link>
                  <Nav.Link onClick={setCurrentListByZero} as={Link} className="text-white" to="/personality-path-page">Путь личности</Nav.Link>
                  <Nav.Link onClick={setCurrentListByZero} as={Link} className="text-white" to="/man-path-page">Путь человека</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
    )
})

type MapStateToPropsType = {
  navBarList: Array<ListType>,
};

type MapDisparchToPropsType = {
  setCurrentList: (list: ListType) => void;
};

type OwnPropsType = {};

export type MainMenuPropsType = MapStateToPropsType &
  MapDisparchToPropsType &
  OwnPropsType;

  const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    navBarList: getCurrentNavBarList(state)
  });

export default compose(
  connect<
    MapStateToPropsType,
    MapDisparchToPropsType,
    OwnPropsType,
    AppStateType
  >(mapStateToProps, {setCurrentList})
)(MainMenu);


