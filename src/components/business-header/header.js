import React from 'react';
import { connect } from 'react-redux';
import {Jumbotron,Card, Col,Row,Image}from 'react-bootstrap';

const mapStateToProps = state => {
    return{
       
    }
};
  
const mapDispatchToProps = dispatch => ({
    
});

class BusinessHeader extends React.Component {
    render(){
        return(
            <Jumbotron style={{backgroundColor:"wheat"}}>
           
            <Row>
            <Col xs={12} md={2} >
            <Image  src="./logo.png" roundedCircle fluid/>
            </Col>
            <Col xs={12} md={10}>
            <div>
            <Card.Body>
              <Card.Title>Buisness Title</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
           
          </div>
            </Col>
            </Row>
                
            
               

            </Jumbotron>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessHeader);