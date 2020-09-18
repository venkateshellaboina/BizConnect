import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button, Pagination}from 'react-bootstrap';
import BusinessCard from '../business-card/businesscard';
import CustomerSearch from '../customersearch/customersearch';
import { getBusinessList} from "../../actions";
import "./customer.css";
const mapStateToProps = state => {
    // console.log(' store state ' + JSON.stringify(state));
    return{
        // user_email: state.user_email,
        // customer_id: state.customer_id,
        // authState : state.authState,
        // businessCategory : state.customerReducer.businessCategory,
        businessList : state.customerReducer.businessList
    }
};
  
const mapDispatchToProps = dispatch => ({
    getAllBusinessList : category => dispatch(getBusinessList(category))
});

class Customer extends React.Component {
    
    constructor(props){
        super(props);
        this.state= {
            activePage : 1,
            totalPages: null,
            paginationBarSize : 10,
            items : [],
            perPage : 2,
            startPage: 1,
            currentPageBusinessList : []
        }
        // this.getAllBusinessList = category => this.props.dispatch(getBusinessList(category));
        // this.props.getAllBusinessList(this.props.businessCategory);
        console.log('business list' + this.props.businessList);
        this.populateCurrentPageBusinessList();
    }

    // componentDidMount(){
    //     this.populateCurrentPageBusinessList();
    // }

    componentDidUpdate(prevProps){
        let currentBusinessList = this.props.businessList;
        let prevBusinessList = prevProps.businessList;

        if(JSON.stringify(currentBusinessList) != JSON.stringify(prevBusinessList)){
            this.populateCurrentPageBusinessList();
            this.populatePaginationList();
        }
    }

    populateCurrentPageBusinessList = () => {
        let businessList = this.props.businessList;
        if(!businessList) return;
        let totalBusinessList = businessList.length;
        let totalPages =  this.calculateTotalPages();;
        let startPage = this.state.startPage;
        let activePage = this.state.activePage;
        let perPage = this.state.perPage;
        let start = (activePage - 1) * perPage;
        let end = Math.min(start + perPage, totalBusinessList);

        this.setState({
            currentPageBusinessList : []
        }, () =>{
            let currentPageBusinessList = this.state.currentPageBusinessList;
            for(let i = start; i<end ; i++){
                currentPageBusinessList.push(businessList[i]);
            }
            this.setState({
                ...this.state,
                currentPageBusinessList : currentPageBusinessList
            })
        });
    }

    populatePaginationList = () =>{
        let perPage = this.state.perPage;
        let activePage = this.state.activePage;
        let paginationBarSize = this.state.paginationBarSize;
        let totalPages =  this.calculateTotalPages();;
        let startPage = this.state.startPage;
        this.setState({
            items : []
        }, ()=> {
            let items = this.state.items;
            let totalPaginationItems = Math.min(startPage + paginationBarSize - 1, totalPages);
            if(totalPaginationItems > 0){
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
                ...this.state,
                items,
                totalPages   
            });
        });
       
    }

    calculateTotalPages = () =>{
        let totalPages = Math.ceil(this.props.businessList.length/this.state.perPage);
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
        if(activePage > totalPages || activePage < startPage) return;

        this.setState({
            ...this.state,
            activePage
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
        if(activePage > totalPages || activePage < startPage) return;

        this.setState({
             ...this.state,
            activePage
        }, ()=>{
            this.populateCurrentPageBusinessList();
            this.populatePaginationList();

        });
    }
   

    render(){
        return(
            <div>
            <CustomerSearch/>
            <Container fluid>
                <Row>
                    <Col sm={2} style={{padding: '2vw'}}> 
                        <h6>Now open</h6>

                    </Col>
                    
                    <Col sm={5} style={{paddingTop:'2vw', paddingLeft:'2vw'}}> 
                        {this.state && this.state.currentPageBusinessList && this.state.currentPageBusinessList.map(business => 
                        // {
                        //     return(
                                <div>
                                    <BusinessCard name={business.name} category={business.category} description={business.description}
                                        contact_details={business.contact_details} avatar={business.avatar} address={ (business.location && business.location.address1) ? business.location.address1 : ''}
                                        rating={business.rating}/>
                                </div>
                        //     )
                        // }
                        )}

                    </Col>
                </Row>
                <Row fluid>
                    <Col sm={2}>
                    </Col>
                    <Col sm={5} className="paginationStyle">
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