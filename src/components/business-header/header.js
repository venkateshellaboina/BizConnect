import React from 'react';
import { connect } from 'react-redux';
import {Jumbotron,Card, Col,Row,Image}from 'react-bootstrap';
import _ from "lodash";

const mapStateToProps = state => {
    return{
      business_details:state.businessReducer.business_details,
      selectedBusinessId:state.customerReducer.selectedBusinessId
       
    }
};
  
const mapDispatchToProps = dispatch => ({
    
});

class BusinessHeader extends React.Component {
  
    render(){
        return(
            <Jumbotron style={{backgroundColor:"wheat"}}>
           {this.props.business_details&&
            <Row>
            <Col xs={12} md={2} >
            <Image  src={this.props.business_details.avatar?this.props.business_details.avatar:"./logo.png"} thumbnail fluid/>
            </Col>
            <Col xs={12} md={10}>
            <div>
            <Card.Body>
              <Card.Title>
              <h1>
              {this.props.business_details.name}
              </h1>
              
              </Card.Title>
              <Card.Text>
              <h6>{this.props.business_details.description}</h6>
              
              </Card.Text>
            </Card.Body>
           
          </div>
            </Col>
            </Row>
                
           }
               

            </Jumbotron>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessHeader);