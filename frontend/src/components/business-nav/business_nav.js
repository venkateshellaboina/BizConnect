import React from 'react';
import { connect } from 'react-redux';
import {Tabs,Tab}from 'react-bootstrap';
import Menu from '../menu/menu';
import Overview from '../overview/overview';
import Review from  '../review/review';
import Service from  '../services/services';
import Offers from  '../offers/offers';
import Vacancies from  '../vacancies/vacancies';

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
                    <Menu/>
                </Tab>
                <Tab eventKey="review" title="Reviews">
                    <Review/>
                </Tab>
                <Tab eventKey="services" title="Services">
                    <Service/>
                </Tab>
                <Tab eventKey="offer" title="Offers">
                    <Offers/>
                </Tab>
                <Tab eventKey="vacany" title="Vacancies">
                  <Vacancies/>
                </Tab>
            </Tabs>
        );

}
   
}
export default connect(mapStateToProps, mapDispatchToProps)(BusinessNav);