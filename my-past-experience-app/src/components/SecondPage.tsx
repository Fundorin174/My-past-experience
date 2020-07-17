import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SecondPage: React.FC<any> = React.memo((props) => {
    return (
      <Row id="main-content" className="h-100 pt-5 pb-5 bg-secondary d-flex align-content-center " >
      <Col>Какой то путь: {props.pathName}</Col>
    </Row>
    )
})

export default SecondPage;