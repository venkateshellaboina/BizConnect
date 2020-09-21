import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Card}from 'react-bootstrap'

    const mapStateToProps = (state) => {
      return {
        business_details:state.businessReducer.business_details,
        selectedBusinessId:state.customerReducer.selectedBusinessId
      };
    };
  const mapDispatchToProps = dispatch => ({

  });

  class Overview extends React.Component {
    constructor(props) {
      super(props);}
      render()
      {
          return(
           <Container>
           {this.props.business_details?
               <Row>
              <Col>
              <Row>
              <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                {this.props.business_details.contact_details}
              </Card.Text>
              </Card.Body>
              </Row>
              <Row>
              <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text>
              {this.props.business_details.location && this.props.business_details.location.address1},<br/>
              {this.props.business_details.location && this.props.business_details.location.city},<br/>
              {this.props.business_details.location && this.props.business_details.location.region},<br/>
              {this.props.business_details.location && this.props.business_details.location.zipcode}
              </Card.Text>
            </Card.Body>
              </Row>
             
              </Col>
              <Col>
              {this.props.business_details.timings && this.props.business_details.timings.length>0&&
              <Row>
              <Card.Body>
              <Card.Title>Regular Timings:</Card.Title>
              <Card.Text>
              {this.props.business_details.timings.map((timing)=>{
                return(
                  <div>
                    {timing.day}  - {timing.start_time} - {timing.end_time}
                  </div>
                )
              })}
              </Card.Text>
            </Card.Body>
              </Row>
            }
              </Col>
              </Row>
              :null}
              </Container>
          );
      }

  }

  export default connect(mapStateToProps, mapDispatchToProps)(Overview);