import React from 'react';
import { connect } from 'react-redux';
import {Container,Card,Image,Button,Row,Col }from 'react-bootstrap';
import {getServices} from "../../actions";
import Service from './service';

const mapStateToProps = state => {
    return {
        servicesList : state.serviceReducer.servicesList
}};
  
const mapDispatchToProps = dispatch => ({
    getServices : (business_id) => dispatch(getServices(business_id))
});


class Services extends React.Component {
    constructor(props){
        super(props);
        // this.getServices = business_id => this.props.dispatch(getServices(business_id));
        this.props.getServices();
        console.log('services list ' + this.props.servicesList);
    }
    addService(){
        alert('add Service!');
    }
    render(){
        return(
            <Container className="container-fluid">
                <br/>
            <Button href="#" onClick={()=>{this.addService();}}>Add Service</Button>
            <br/><br/>
            {this.props.servicesList && this.props.servicesList.map((service) => (
            <div key={service.service_id}>
                <Service title={service.title} description={service.description} type={`(${service.type})`} image={service.image}/>
            </div>
            ))}
            </Container>
        );
    }

}

// export {Service, Services};
export default connect(mapStateToProps, mapDispatchToProps)(Services);