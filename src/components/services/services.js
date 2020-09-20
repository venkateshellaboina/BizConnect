import React from 'react';
import { connect } from 'react-redux';
import {Card,Image,Button }from 'react-bootstrap';
import {getServices} from "../../actions";

const mapStateToProps = state => {
    return {
        servicesList : state.serviceReducer.servicesList
}};
  
const mapDispatchToProps = dispatch => ({
    getServices : (business_id) => dispatch(getServices(business_id))
});

class Service extends React.Component{
      render()
      {
          return(
            <Card>
            <Card.Body style={{}}>
                <Card.Title>{this.props.title} {this.props.type}</Card.Title>
                <Card.Text style={{float: "left",clear: "none"}} >
                <Image src={this.props.image} alt="this is service image" height="50"/>
                &emsp;{this.props.description}
                </Card.Text>
            </Card.Body>
            </Card>
          )
      }
  }
class Services extends React.Component {
    constructor(props){
        super(props);
        // this.getServices = business_id => this.props.dispatch(getServices(business_id));
        // this.props.getServices();
        console.log('services list ' + this.props.servicesList);
    }
    addService(){
        alert('add Service!');
    }
    render(){
        return(
            <div>
            <Button href="#" onClick={()=>{this.addService();}}>Add Service</Button>
            {this.props.servicesList && this.props.servicesList.map((service) => (
            <div key={service.service_id}>
                <Service title={service.title} description={service.description} type={`(${service.type})`} image={service.image}/>
            </div>
            ))}
            </div>
        );
    }

}

// export {Service, Services};
export default connect(mapStateToProps, mapDispatchToProps)(Services);