import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Badge, Image }from 'react-bootstrap';
import './businesscard.css';

const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({

  });

class BusinessCard extends React.Component {
   
    render(){
        return(
            <div>
                <Container fluid className="cardstyle">
                    <Row>
                       <Col sm={3}>
                            <Image thumbnail src="https://awsome-s3-dev.s3.ap-south-1.amazonaws.com/my-mechanic-vashi-navi-mumbai-car-repair-and-services-xfu5f59518.jpg" rounded/>
                       </Col>
                       <Col sm={6}>
                           <h3 className="textthemecolor">My mechanic service</h3>
                           <h6 className="basicfontlight"> Mechanic</h6>
                           <h6> Grocery, shopping, digitial</h6>
                           <hr></hr>
                           <div className="contactinfo">
                                <h6 className="basicfont">+91-928765422</h6>
                                <h6 className="basicfont"> Hitech city, Near PVR, Hyderabad, 500075</h6>
                           </div>
                           
                       </Col>
                       <Col sm={3}>
                            <h6><Badge variant="success" style={{float: 'right'}}>5 </Badge></h6>
                            <span className="subscribe textthemecolor">
                                <h6>
                                <Form.Check 
                                        type="switch"
                                        id="subscribe-switch"
                                        label="Subscribe"
                                    />
                                </h6>
                                
                           </span>
                       </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCard);