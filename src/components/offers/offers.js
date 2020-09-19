import React from 'react';
import { connect } from 'react-redux';
import {Service} from '../../components/services/services';
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
    this.getOffers = business_id => this.props.dispatch(getOffers(business_id));
    this.props.getOffers('');
    console.log('offers list ' + this.props.offersList);
  }
      render(){
          return(
            <div>
              {this.props.offersList.map((offer) => (
                <div>
                {/* <Service title={offer.title} description={offer.description} image={offer.image}/> */}
                </div>
              ))}
            </div>
          );
      }
}
export default connect(mapStateToProps, mapDispatchToProps)(Offers);