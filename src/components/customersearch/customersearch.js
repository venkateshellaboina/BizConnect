import React, {useCallback} from 'react';
import { connect } from 'react-redux';
// import { debounce } from "lodash";
import {Container,Row,Col,Form,Button, Badge, Image,FormControl, InputGroup, DropdownButton, Dropdown }from 'react-bootstrap';
import './customersearch.css';
import {changeBusinessCategory, getBusinessCategoriesList, getBusinessList, onSearchKeyChange} from "../../actions";

const mapStateToProps = state => {
    return {
        businessCategory : state.customerReducer.businessCategory,
        searchKey : state.customerReducer.searchKey,
        businessCategoriesList : state.customerReducer.businessCategoriesList
    }};
  
  const mapDispatchToProps = dispatch => ({
    changeBusinessCategory : businessCategory => dispatch(changeBusinessCategory(businessCategory)),
    getBusinessCategoriesList : () => dispatch(getBusinessCategoriesList()),
    getBusinessList : (businessCategory, searchKey) => dispatch(getBusinessList(businessCategory, searchKey)),
    onSearchKeyChange : searchKey => dispatch(onSearchKeyChange(searchKey))

  });

class CustomerSearch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedCategory : this.props.businessCategory,
            searchKey : this.props.searchKey
        }
        this.props.getBusinessCategoriesList();
        this.props.getBusinessList(this.props.businessCategory, this.props.searchKey);
        this.getBusinessListDebounce = this.debounce(this.getBusinessListDebounce, 500);
    }

    debounce = (fn, delay) => {
        let timer = null;
        return function (...args) {
            const context = this;
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        };
    }
   
    getBusinessListDebounce = (selectedCategory, searchKey) => {
        this.props.getBusinessList(selectedCategory, searchKey);
    }

    onSelectCategory = (event) => {
        event.preventDefault();
        this.setState({
            ...this.state,
            selectedCategory: event.target.value,
            searchKey : ''
        }, ()=>{
            this.props.changeBusinessCategory(this.state.selectedCategory);
            this.props.onSearchKeyChange('');//resetting search key in store when category changes
            this.props.getBusinessList(this.state.selectedCategory, '');
        })
    }
    
    onSearchKeyChange = (event) =>{
        event.preventDefault();
        this.setState({
            ...this.state,
            searchKey: event.target.value
        }, ()=>{
            this.props.onSearchKeyChange(this.state.searchKey);
            this.getBusinessListDebounce(this.state.selectedCategory, this.state.searchKey);
        })
    }

   
    render(){
        return(
            <div>
                <Container > 
                    <br></br>
                        <Row>
                            <Col  xs={6} sm={3} md={3} lg={4}>
                                <span className="select">
                                    <select value={this.state.selectedCategory} onChange={(e) => this.onSelectCategory(e)} placeholder="Category">
                                        <option className="optionStyle" selected disabled value="">Select a Category</option>
                                        { (this.props.businessCategoriesList || []).map((category, id) => 
                                            <option className="optionStyle" value={category} key={id} id={id+1}>{category}</option>      
                                        )}
                                    </select>
                                </span> 
                            </Col>
                            <Col  xs={6} sm={4} md={4} lg={8}>
                                <FormControl className="searchbar" value={this.state.searchKey} onChange={this.onSearchKeyChange} aria-describedby="basic-addon1" />
                            </Col>
                            <Col sm={4}>
                            </Col>
                        </Row>
              
                </Container>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);

// style={{marginLeft:"5vw", width: "70%"}}