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
            selectedCategory: event.target.value
        }, ()=>{
            this.props.changeBusinessCategory(this.state.selectedCategory);
            this.props.getBusinessList(this.state.selectedCategory, this.state.searchKey);
        })
    }
    
    onSearchKeyChange = (event) =>{
        event.preventDefault();
        this.setState({
            ...this.state,
            searchKey: event.target.value
        }, ()=>{
            this.props.onSearchKeyChange(this.state.searchKey);
            // this.debounce(this.getBusinessListLocal, 500);
            this.getBusinessListDebounce(this.state.selectedCategory, this.state.searchKey);

            // this.searchHandler();
            // if(this.state.searchKey.length > 3){
            //     this.getBusinessList(this.state.selectedCategory, this.state.searchKey);
            // }
        })
    }

    // static getDerivedStateFromProps(nextProps, nexState){
    //     console.log('next props ' + JSON.stringify(nextProps));
    //     console.log('next state ' + JSON.stringify(nexState));
    // }
    
    render(){
        // const searchHandler = useCallback(debounce(() => {
        //     this.getBusinessList(this.state.selectedCategory, this.state.searchKey);
        // }, 500), []);

        return(
            <div>
                <Container className="containerStyle" fluid style={{marginLeft:"5vw", width: "70%"}}>
                    <InputGroup className="mb-3">
                            <span className="select">
                                <select value={this.state.selectedCategory} onChange={(e) => this.onSelectCategory(e)} placeholder="Category">
                                    <option selected disabled value="">Select a Category</option>
                                    { (this.props.businessCategoriesList || []).map((category, id) => 
                                        <option value={category} key={id} id={id+1}>{category}</option>      
                                    )}
                                </select>
                            </span> 
                           
                            <FormControl className="searchbar" value={this.state.searchKey} onChange={this.onSearchKeyChange} aria-describedby="basic-addon1" />
                    </InputGroup>
                    
                </Container>
                
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearch);

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