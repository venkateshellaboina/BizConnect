import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Badge, Image }from 'react-bootstrap';
import './businesscard.css';
import { onBusinessSelect} from "../../actions";

const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({
    onBusinessSelect : business_id => dispatch(onBusinessSelect(business_id))
  });

class BusinessCard extends React.Component {

    constructor(props){
        super(props);
    }

    onBusinessSelect = ()=>{
        let business_id = this.props.business_id;
        this.props.onBusinessSelect(business_id);
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
                <Container fluid >
                    <Row  className="cardstyle" onClick={this.onBusinessSelect}>
                       <Col sm={3} xs={3}>
                            <Image thumbnail src={this.props.avatar} rounded/>
                       </Col>
                       <Col sm={6} xs={6}>
                           <h3 style={{fontSize: '2vh'}} className="textthemecolor">{this.props.name}</h3>
                           <h6 style={{fontSize: '2vh'}} className="basicfontlight"> {this.props.category}</h6>
                           <h6 style={{fontSize: '1.5vh'}}> {this.props.description}</h6>
                           <hr></hr>
                           <div className="contactinfo">
                                <h6 className="basicfont">{this.props.contact_details}</h6>
                                <h6 className="basicfont">{this.props.address}</h6>
                           </div>
                           
                       </Col>
                       <Col sm={3} xs={3}>
                           {this.renderRating(this.props.rating)}
                           <div className="status">
                                {this.props && this.props.isOpen == true && 
                                    <h5 className=""><Badge pill variant="success"> Open</Badge></h5>
                                }
                                {this.props && this.props.isOpen == false && 
                                    <h5 className=""><Badge pill variant="light"> Closed</Badge></h5>
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