import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WarriorPathConteinerPropsType } from './WarriorPathContainer';
import Image from 'react-bootstrap/esm/Image';


const SecondPage: React.FC<any> = React.memo((props) => {
  const navbarIcons = props.navBarList.map((item: any, index: number) => {
    let keyOfItem = item.title.split('').reduce((accum: number, char: string) => accum + char.charCodeAt(0), 0) / item.title.length + index;

    return <li key={keyOfItem} className="list-group-item list-group-item-action list-group-item-info pl-0">
      <Image
        src={item.iconImgUrl}
        width="50"
        height="50"
        className="d-inline-block align-middle ml-0 mr-2"
        alt="logo"
        roundedCircle
      />
      {item.title}</li>
  })

  return (
    <Row id="main-content" className="h-100 pt-0 pb-0 bg-secondary d-flex align-content-center " >
      <Col md={3} xs={1} className="bg-success h-100" >
        <ul className="list-group mt-3">
          {navbarIcons}
        </ul>
      </Col>
      <Col md={9} xs={11} className="h-100 ">Какой то путь: {props.pathName}</Col>
    </Row>
  )
})

export default SecondPage;