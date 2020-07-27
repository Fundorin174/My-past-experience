import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import phone from './../img/icons/phone.png';
import email from './../img/icons/email.png';
import linledIn from './../img/icons/linkedIn.png';
import telegram from './../img/icons/telegram.png';
import viber from './../img/icons/viber.png';
import github from './../img/icons/github.png';
import whatsapp from './../img/icons/whatsapp.png';
import youtube from './../img/icons/youtube.png';
const Footer: React.FC<any> = React.memo((props) => {
    return (
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
            <Card.Link href="https://www.linkedin.com/in/fundorin174/" target="_blank" rel="noopener">
              <Image
              src={linledIn}
              width="37"
              height="37"
              className="d-inline-block align-middle mr-2"
              alt="vk"
              roundedCircle/>
              </Card.Link>
            <Card.Link href="https://github.com/Fundorin174" target="_blank" rel="noopener">
            <Image
              src={github}
              width="37"
              height="37"
              className="d-inline-block align-middle mr-2"
              alt="instagram"
              />
            </Card.Link>
            <Card.Link href="https://www.youtube.com/channel/UCTRQvfXq2YRe3h_TQmkn47Q?view_as=subscriber" target="_blank" rel="noopener">
            <Image
              src={youtube}
              width="37"
              height="37"
              className="d-inline-block align-middle mr-2"
              alt="youtube"
              />
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    )
})

export default Footer;