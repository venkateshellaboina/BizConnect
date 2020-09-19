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
    renderRating(rating){
        if(rating >= 4){
            return  <h5><Badge variant="success" style={{float: 'right'}}>{rating}</Badge></h5>
        }
        else if(rating >=2 && rating < 4){
            return  <h5><Badge variant="warning" style={{float: 'right'}}>{rating}</Badge></h5>
        }
        else{
            return  <h5><Badge variant="danger" style={{float: 'right'}}>{rating}</Badge></h5>
        }
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
                           {this.renderRating(this.props.rating)}
                           <div className="status">
                                {this.props && this.props.isOpen == true && 
                                    <h5 className="basicfont"><Badge pill variant="success"> Open</Badge></h5>
                                }
                                {this.props && this.props.isOpen == false && 
                                    <h5 className="basicfont"><Badge pill variant="light"> Closed</Badge></h5>
                                }
                           </div>
                       </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessCard);