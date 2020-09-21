import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Pagination, Image, InputGroup, FormControl}from 'react-bootstrap';
import BusinessCard from '../business-card/businesscard';
import CustomerSearch from '../customersearch/customersearch';
import CustomerFilter from '../customerfilter/customerfilter';

import { getBusinessList, filterBusinessList} from "../../actions";
import "./customer.css";
const mapStateToProps = state => {
    return{
        filteredBusinessList : state.customerReducer.filteredBusinessList
    }
};
  
const mapDispatchToProps = dispatch => ({
    getAllBusinessList : category => dispatch(getBusinessList(category))
});

const initialState= {
    activePage : 1,
    totalPages: null,
    paginationBarSize : 3,
    items : [],
    perPage : 5,
    startPage: 1,
    currentPageBusinessList : []
};

class Customer extends React.Component {
    
    constructor(props){
        super(props);
        this.state= initialState;
    }

    componentDidMount(){
        this.populateCurrentPageBusinessList();
        this.populatePaginationList();
    }
    componentDidUpdate(prevProps){
        let currentBusinessList = this.props.filteredBusinessList;
        let prevBusinessList = prevProps.filteredBusinessList;

        if(JSON.stringify(currentBusinessList) !== JSON.stringify(prevBusinessList)){
            this.setState(initialState, () => {
                this.populateCurrentPageBusinessList();
                this.populatePaginationList();
                // this.forceUpdate();
            })
        }
    }

    populateCurrentPageBusinessList = () => { // function to splice the required items from the list based on active page
        let businessList = this.props.filteredBusinessList;
        if(!businessList) return;
        let totalBusinessList = businessList.length;
        let totalPages =  this.calculateTotalPages();
        let startPage = this.state.startPage;
        let activePage = this.state.activePage;
        let perPage = this.state.perPage;

        let start = (activePage - 1) * perPage;
        let end = Math.min(start + perPage, totalBusinessList);

        this.setState({
            // ...this.state,
            currentPageBusinessList : []
        }, () =>{
            let currentPageBusinessList = this.state.currentPageBusinessList;
            for(let i = start; i<end ; i++){
                currentPageBusinessList.push(businessList[i]);
            }
            this.setState({
                // ...this.state,
                currentPageBusinessList : currentPageBusinessList
            })
        });
    }

    populatePaginationList = () =>{ // function to populate the pagination buttons
        if(this.props.filteredBusinessList == null) return;
        let perPage = this.state.perPage;
        let activePage = this.state.activePage;
        let paginationBarSize = this.state.paginationBarSize;
        let totalPages =  this.calculateTotalPages();;
        let startPage = this.state.startPage;
        this.setState({
            // ...this.state,
            items : []
        }, ()=> {
            let items = this.state.items;
            let totalPaginationItems = Math.min(startPage + paginationBarSize - 1, totalPages);

            if(totalPaginationItems > 0){ // Adding buttons to pagination bar
                items.push( <Pagination.Prev onClick={(event) => this.onPrev(event)}/>)
                for(let number = startPage; number<= totalPaginationItems; number++){
                    
                    items.push(
                        <Pagination.Item key={number} active={number === activePage} onClick={(event) => this.selectActivePage(event)}>
                            {number}
                        </Pagination.Item>
                    )
                }
                items.push( <Pagination.Next onClick={(event) => this.onNext(event)}/>)
            }
           
            this.setState({
                // ...this.state,
                items,
                totalPages   
            });
        });
       
    }

    calculateTotalPages = () =>{
        let totalPages = Math.ceil(this.props.filteredBusinessList.length/this.state.perPage);
        return totalPages;
    }

    selectActivePage = (event)=>{
        let pageNumber = parseInt(event.target.innerText);
        this.setState({
             ...this.state,
            activePage : pageNumber
        }, ()=>{
            this.populateCurrentPageBusinessList();
            this.populatePaginationList();
        });
        console.log(pageNumber);
    }
    onPrev = (event)=>{
        let activePage = this.state.activePage;
        activePage -= 1;

        let totalPages =  this.state.totalPages;
        let startPage = this.state.startPage;
        if(activePage < 1) return; // when not in range

        if(activePage < startPage){ // To move the pagination items left by 1 
            startPage -=1
        }

        this.setState({
            ...this.state,
            activePage,
            startPage
        }, ()=>{   
            this.populateCurrentPageBusinessList();
            this.populatePaginationList();

        });
    }
    onNext = (event)=>{
        let activePage = this.state.activePage;
        activePage += 1;

        let totalPages =  this.state.totalPages;
        let startPage = this.state.startPage;
        if(activePage > totalPages) return;// when not in range

        let paginationBarSize = this.state.paginationBarSize;
 
        if(activePage >= (startPage + paginationBarSize -1)){ // To move the pagination items right by 1
            startPage +=1
        }
        this.setState({
             ...this.state,
            activePage,
            startPage
        }, ()=>{
            this.populateCurrentPageBusinessList();
            this.populatePaginationList();

        });
    }
    
    render(){
        return(
            <div>
            <CustomerSearch/>
            <hr></hr>
            <Container fluid>

                <Row>
                    <Col sm={2} style={{padding: '2vw'}}> 
                        <CustomerFilter/>
                    </Col>
                    
                    <Col sm={5} style={{paddingTop:'2vw', paddingLeft:'2vw'}}> 
                        
                        {this.state && this.state.currentPageBusinessList && this.state.currentPageBusinessList.map(business => 
                                <div>
                                    <BusinessCard business_id={business.business_id} name={business.name} category={business.category} description={business.description}
                                        contact_details={business.contact_details} avatar={business.avatar} address={ (business.location && business.location.address1) ? business.location.address1 : ''}
                                        rating={business.rating} status={business.status}/>
                                </div>
                        )}
                        {this.state && this.state.currentPageBusinessList && this.state.currentPageBusinessList.length == 0 &&
                            <div>
                                <Image style={{border: "0"}} thumbnail src="./nodata.jpg" rounded/>
                            </div>
                            
                        }

                    </Col>
                </Row>
                <Row fluid>
                    <Col sm={1} xs={1}>
                    </Col>
                    <Col sm={5} xs={6} className="paginationStyle">
                            <span>
                                <Pagination onSelect={(pageNumber) => this.selectActivePage(pageNumber)}>
                                    {this.state.items}
                                </Pagination>
                            </span>
                     </Col> 
                </Row>
            </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);