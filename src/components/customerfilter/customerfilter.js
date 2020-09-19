import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Badge, Image,InputGroup, FormControl }from 'react-bootstrap';
import './customerfilter.css';
import {  filterBusinessList} from "../../actions";

const mapStateToProps = state => {
    return {
        businessList : state.customerReducer.businessList,
        filteredBusinessList : state.customerReducer.filteredBusinessList
    }};
  
const mapDispatchToProps = dispatch => ({
    filterBusinessList : (filters, businessList) => dispatch(filterBusinessList(filters, businessList))
});

const initialState = {
    nowOpen: false,
    rating_4 : false,
    rating_3 : false,
    rating_1 : false,
    rating_1 : false
}

class CustomerFilter extends React.Component {

    constructor(props){
        super(props);
        this.state = initialState;
    }
    changeFilter = (event) =>{
        this.setState({
            ...this.state,
            [event.target.name] : event.currentTarget.checked
        }, () => {
            this.props.filterBusinessList(this.state, this.props.businessList)
        })
    }

    componentDidUpdate(prevProps){
        let currentBusinessList = this.props.businessList;
        let prevBusinessList = prevProps.businessList;
        if(JSON.stringify(currentBusinessList) != JSON.stringify(prevBusinessList)){
            this.setState(initialState);
        }
    }
   
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <InputGroup className="filters">
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox id="now-open" className="checkboxStyle" name="nowOpen" checked={this.state.nowOpen} onClick={this.changeFilter}/>
                                </InputGroup.Prepend>
                                <FormControl value="Now Open" disabled/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="filters">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox checked={this.state.rating_4} className="checkboxStyle"  id="rating-4" name="rating_4" onClick={this.changeFilter}/>
                            </InputGroup.Prepend>
                            <FormControl value="Rating 4 and above" disabled/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="filters">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox checked={this.state.rating_3}  className="checkboxStyle" id="rating-3" name="rating_3" onClick={this.changeFilter}/>
                            </InputGroup.Prepend>
                            <FormControl value="Rating 3 and above" disabled/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="filters">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox checked={this.state.rating_2}  className="checkboxStyle" id="rating-2" name="rating_2" onClick={this.changeFilter}/>
                            </InputGroup.Prepend>
                            <FormControl value="Rating 2 and above" disabled/>
                        </InputGroup>
                    </Row>
                    <Row>
                        <InputGroup className="filters">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox checked={this.state.rating_1}  className="checkboxStyle" id="rating-1" name="rating_1" onClick={this.changeFilter}/>
                            </InputGroup.Prepend>
                            <FormControl value="Rating 1 and above" disabled/>
                        </InputGroup>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFilter);