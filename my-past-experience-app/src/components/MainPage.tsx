import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import { NavLink } from 'react-router-dom';
import mainPhoto from './../img/main_photo.jpg';
import warrior from './../img/logo_warrior.png';
import personality from './../img/logo_personality.png';
import man from './../img/logo_human.png';

const MainPage: React.FC<any> = React.memo((props) => {
    return (
      <Row id="main-content" className="mh-100 pt-5 pb-5 bg-secondary d-flex align-content-center " >
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
    )
})

export default MainPage;