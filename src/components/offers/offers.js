import React from 'react';
import { connect } from 'react-redux';
import {Container,Button}from 'react-bootstrap';
import Service from '../services/service';
import {getOffers} from "../../actions";

const mapStateToProps = state => {
    return {
      offersList : state.offerReducer.offersList,
      selectedBusinessId : state.customerReducer.selectedBusinessId,
      userType: state.userReducer.user ? state.userReducer.user.type : null
    }};
  
  const mapDispatchToProps = dispatch => ({
    getOffers : (selectedBusinessId) => dispatch(getOffers(selectedBusinessId))
  });

class Offers extends React.Component{
  constructor(props){
    super(props);
    this.props.getOffers(this.props.selectedBusinessId);
    console.log('offers list ' + this.props.offersList);
  }
      render(){
          return(
            <Container className="container-fluid h-100">
              <br/>
            {this.props.userType == 'business' && <Button href="#">Add Offer</Button>}
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