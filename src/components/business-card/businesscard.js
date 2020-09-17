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

    constructor(props){
        super(props);
    }
   
    render(){
        return(
            <div>
                <Container fluid>
                    <Row  className="cardstyle">
                       <Col sm={3}>
                            <Image thumbnail src={this.props.avatar} rounded/>
                       </Col>
                       <Col sm={6}>
                           <h3 className="textthemecolor">{this.props.name}</h3>
                           <h6 className="basicfontlight"> {this.props.category}</h6>
                           <h6> {this.props.description}</h6>
                           <hr></hr>
                           <div className="contactinfo">
                                <h6 className="basicfont">{this.props.contact_details}</h6>
                                <h6 className="basicfont">{this.props.address}</h6>
                           </div>
                           
                       </Col>
                       <Col sm={3}>
                            <h6><Badge variant="success" style={{float: 'right'}}>{this.props.rating}</Badge></h6>
                            {/* <span className="subscribe textthemecolor">
                                <h6>
                                <Form.Check 
                                        type="switch"
                                        id="subscribe-switch"
                                        label="Subscribe"
                                    />
                                </h6>
                                
                           </span> */}
                       </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCard);