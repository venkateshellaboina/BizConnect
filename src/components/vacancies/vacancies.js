import React from 'react';
import { connect } from 'react-redux';
import {Container,Button}from 'react-bootstrap';
import Service from '../services/service';
import {getVacancies} from "../../actions";

const mapStateToProps = state => {
    return {
      vacanciesList : state.vacancyReducer.vacanciesList
    }};
  
const mapDispatchToProps = dispatch => ({
    getVacancies : () => dispatch(getVacancies())
  });


class Vacancies extends React.Component{
  constructor(props){
    super(props);
    this.getVacancies = business_id => this.props.dispatch(getVacancies(business_id));
    this.props.getVacancies('');
    console.log('vacancies list ' + this.props.vacanciesList);
  }
    render(){
        return(
          <Container className="container-fluid h-100">
            <br/>
            <Button href="#" onClick={()=>{this.addService();}}>Add Vacancy</Button>
            <br/><br/>
            {this.props.vacanciesList.map((vacancy) => (
                <div>
              <Service title={vacancy.title} description={vacancy.description} type={`(${vacancy.count})`} image={vacancy.image}/>
              </div>
            ))}
          </Container>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vacancies);