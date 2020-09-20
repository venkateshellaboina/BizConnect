import React from 'react';
import { connect } from 'react-redux';
import {Container,Button}from 'react-bootstrap';
import Service from '../services/service';
import {getOffers} from "../../actions";

const mapStateToProps = state => {
    return {
      offersList : state.offerReducer.offersList
    }};
  
  const mapDispatchToProps = dispatch => ({
    getOffers : () => dispatch(getOffers())
  });

class Offers extends React.Component{
  constructor(props){
    super(props);
    this.props.getOffers();
    console.log('offers list ' + this.props.offersList);
  }
      render(){
          return(
            <Container className="container-fluid h-100">
              <br/>
            <Button href="#" onClick={()=>{this.addService();}}>Add Offer</Button>
            <br/><br/>
              {this.props.offersList.map((offer) => (
                <div>
                <Service title={offer.offer_title} description={offer.description} image={offer.image}/>
                </div>
              ))}
            </Container>
          );
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Offers);