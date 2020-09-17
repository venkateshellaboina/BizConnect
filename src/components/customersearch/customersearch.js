import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Badge, Image,FormControl, InputGroup, DropdownButton, Dropdown }from 'react-bootstrap';
import './customersearch.css';
import {changeBusinessCategory, getBusinessCategoriesList} from "../../actions";

const mapStateToProps = state => {
    return {
        businessCategory : state.customerReducer.businessCategory,
        businessCategoriesList : state.customerReducer.businessCategoriesList
    }};
  
  const mapDispatchToProps = dispatch => ({
    changeBusinessCategory : businessCategory => dispatch(changeBusinessCategory(businessCategory)),
    getBusinessCategoriesList : () => dispatch(getBusinessCategoriesList())
  });

class CustomerSearch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedCategory : ''
        }
        this.props.getBusinessCategoriesList();
    }

    onSelectCategory = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            selectedCategory: event.target.value
        });
    }
   
    render(){
        return(
            <div>
                <Container className="containerStyle">
                    <InputGroup className="mb-3">
                        <select value={this.state.selectedCategory} onChange={(e) => this.onSelectCategory(e)} placeholder="Category">
                            { (this.props.businessCategoriesList || []).map((category, id) => 
                                <option value={category} id={id+1}>{category}</option>      
                            )}
                        </select>
                        {/* <DropdownButton
                        as={InputGroup.Prepend}
                        variant="primary"
                        title="Category"
                        id="input-group-dropdown-1"
                        onSelect={this.onSelectCategory}
                        >
                            { (this.props.businessCategoriesList || []).map((category, id) => 
                                <Dropdown.Item eventKey={id+1} active={this.state.selectedCategoryKey == id+1 ? true : false}>{category}</Dropdown.Item> 
                            )}
                             <Dropdown.Item href="#">Grocery</Dropdown.Item>
                            <Dropdown.Item href="#">Shopping</Dropdown.Item>
                            <Dropdown.Item href="#">Mechanic</Dropdown.Item>
                            <Dropdown.Item href="#">Salon</Dropdown.Item> 
                         </DropdownButton> */}
                        <FormControl aria-describedby="basic-addon1" />
                    </InputGroup>

                </Container>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);