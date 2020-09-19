import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Badge, Image,InputGroup, FormControl }from 'react-bootstrap';
import './customerfilter.css';
import {  filterBusinessList} from "../../actions";

const mapStateToProps = state => {
    return {
        businessList : state.customerReducer.businessList
    }};
  
  const mapDispatchToProps = dispatch => ({
    filterBusinessList : (filtername, value, businessList) => dispatch(filterBusinessList(filtername, value, businessList))
  });

class CustomerFilter extends React.Component {

    constructor(props){
        super(props);
    }
    changeFilter = (event) =>{
        let filtername = event.target.id;
        let value = event.target.value;
        this.props.filterBusinessList(filtername, value, this.props.businessList)
    }
   
    render(){
        return(
            <div>
                 <InputGroup className="filters">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox id="now-open" onClick={this.changeFilter}/>
                            </InputGroup.Prepend>
                            <FormControl value="Now Open" disabled/>
                </InputGroup>
                <InputGroup className="filters">
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>
                    <FormControl value="Rating above 4" disabled/>
                </InputGroup>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFilter);