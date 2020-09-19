import React from 'react';
import { connect } from 'react-redux';
import {Tabs,Tab}from 'react-bootstrap';
import Customer from '../customer/customer';
import Overview from '../overview/overview';
import Review from  '../review/review';
import Service from  '../services/services';

const mapStateToProps = state => {
    return{
       
    }
};
  
const mapDispatchToProps = dispatch => ({
    
});

class BusinessNav extends React.Component {
render(){
        return(
            <Tabs>
                <Tab eventKey="overview" title="Overview">
                    <Overview/>
                </Tab>
                <Tab eventKey="menu" title="Menu">
                    <Customer/>
                </Tab>
                <Tab eventKey="review" title="Review">
                    <Review/>
                </Tab>
                <Tab eventKey="services" title="Services">
                    <Service/>
                </Tab>
                <Tab eventKey="offer" title="Offers">
                    <Review/>
                </Tab>
                <Tab eventKey="vacany" title="Vacancies">
                  <Review/>
                </Tab>
            </Tabs>
        );

}
   
}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessNav);