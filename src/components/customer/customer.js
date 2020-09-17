import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button }from 'react-bootstrap';
import BusinessCard from '../business-card/businesscard';
import CustomerSearch from '../customersearch/customersearch';
import { getBusinessList} from "../../actions";
const mapStateToProps = state => {
    console.log(' store state ' + JSON.stringify(state));
    return{
        // user_email: state.user_email,
        // customer_id: state.customer_id,
        // authState : state.authState,
        businessList : state.customerReducer.businessList
    }
};
  
const mapDispatchToProps = dispatch => ({
    getAllBusinessList : category => dispatch(getBusinessList(category))
});

class Customer extends React.Component {
    
    constructor(props){
        super(props);
        // this.getAllBusinessList = category => this.props.dispatch(getBusinessList(category));
        // this.props.getAllBusinessList('');
        console.log('business list' + this.props.businessList);
    }

    

    render(){
        return(
            <div>
            <CustomerSearch/>
            <Container fluid>
                <Row>
                    <Col sm={2} style={{padding: '1vw'}}> 
                        <h6>Now open</h6>

                    </Col>
                    
                    <Col sm={5} style={{padding: '1vw'}}> 
                        {this.props && this.props.businessList && this.props.businessList.map(business => {
                            return(
                                <div>
                                    <BusinessCard name={business.name} category={business.category} description={business.description}
                                        contact_details={business.contact_details} avatar={business.avatar} address={ (business.location && business.location.address1) ? business.location.address1 : ''}
                                        rating={business.rating}/>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);