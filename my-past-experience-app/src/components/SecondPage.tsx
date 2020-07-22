import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';
import { photoType } from './../redux/wayOfHumanPageReducer';
import Container from 'react-bootstrap/Container';


const SecondPage: React.FC<any> = React.memo((props) => {

  useEffect(() => {
    !props.currentList.ID && props.setCurrentList(props.navBarList[0]);
  }, [props.currentList])



  const navbarIcons = props.navBarList.map((item: any, index: number) => {
    let keyOfItem = item.title.split('').reduce((accum: number, char: string) => accum + char.charCodeAt(0), 0) / item.title.length + index;

    return <li key={keyOfItem} className="list-group-item list-group-item-action list-group-item-info pl-0"
    onClick = {()=>{props.setCurrentList(props.navBarList[item.ID])}}>
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
  let mainDescriptionItems = props.currentList.mainDescription?.map((phrase: string) => {
  return <p>{phrase}</p>
  })

  let caruselCreation = props.currentList.photos?.map((photoItem: photoType, index:number) => {
    return <Carousel.Item key = {index} >
      <img 
        className="d-block mw-100 h-auto "
        src={photoItem.url}
        alt="First slide"        
      />
      <Carousel.Caption>
        <h3>{photoItem.title}</h3>
        <p>{photoItem.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  })

  
  return (
    <Row id="main-content" className="h-100 pt-0 pb-0 bg-secondary d-flex align-content-center ">
      <Col md={3} xs={1} className="bg-success h-100" >
        <ul className="list-group mt-3">
          {navbarIcons}
        </ul>
      </Col>
      <Col id='caruselWrp' md={9} xs={11} className="h-100 ">
        <Container fluid>
          {mainDescriptionItems}
        </Container>
        <Carousel>
          {caruselCreation}
        </Carousel>
      </Col>
    </Row>
  )
})

export default SecondPage;