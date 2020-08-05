import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { photoType } from './../redux/wayOfHumanPageReducer';
import Container from 'react-bootstrap/Container';


const SecondPage: React.FC<any> = React.memo((props) => {

  useEffect(() => {
    !props.currentList.ID && props.setCurrentList(props.navBarList[0]);
  }, [props.currentList])



  const navbarIcons = props.navBarList.map((item: any, index: number) => {
    let keyOfItem = item.title.split('').reduce((accum: number, char: string) => accum + char.charCodeAt(0), 0) / item.title.length + index;
    let title = item.title;
    return <OverlayTrigger    
    placement='right'
    overlay={
      <Tooltip className="d-block d-md-none" id={`tooltip-${title}`}>
        {title}
      </Tooltip>
    }
  >
    <li key={keyOfItem} className="list-group-item list-group-item-action list-group-item-info pl-0"
    
    onClick = {()=>{props.setCurrentList(props.navBarList[item.ID])}} role="button">
      <Image
        src={item.iconImgUrl}
        width='50'
        height="50"
        className="d-inline-block align-middle ml-1 mr-1 navBarTitleImage"
        alt="logo"
        roundedCircle
      />
      <span className="d-none d-md-inline-block navBarItemTitle" >{item.title}</span></li>
      </OverlayTrigger>    
  })
  let mainDescriptionItems = props.currentList.mainDescription?.map((phrase: string) => {
  return <p>{phrase}</p>
  })

  let caruselCreation = props.currentList.photos?.map((photoItem: photoType, index:number) => {
    let orientationSizing;
    switch (photoItem.orientation) {
      case 'portrait':
        orientationSizing = 'w-100';
        break;
      case 'landscape':
        orientationSizing = 'w-50';
        break;
      case 'square':
        orientationSizing = 'w-75';
        break;
      default:
        orientationSizing = 'w-100';
    }
    
    return <Carousel.Item key = {index}>
      <img 
        className={`${orientationSizing} d-block h-auto ml-auto mr-auto`}
        src={photoItem.url}
        alt="First slide"        
      />
      <Carousel.Caption >
        <h3>{photoItem.title}</h3>
        <p><span className='photoDescription'>{photoItem.description}</span></p>
      </Carousel.Caption>
    </Carousel.Item>
  })

  
  return (
    <Row id="main-content" className="h-100 pt-0 pb-0 bg-secondary d-flex align-content-center ">
      <Col md={3} xs={1} className="bg-success h-100 navBarColumn" >
        <ul className="list-group mt-0 sticky-top">
          {navbarIcons}
        </ul>
      </Col>
      <Col id='caruselWrp' md={9} xs={11} className="h-100 ">
        <Container fluid>
  <h1>{props.currentList.title}</h1>
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