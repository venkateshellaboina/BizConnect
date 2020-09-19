import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Card}from 'react-bootstrap'
const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({

  });

  class Overview extends React.Component {
      render()
      {
          return(
              <Container>
              <Row>
              <Col>
              <Row>
              <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                9751110889
              </Card.Text>
              </Card.Body>
              </Row>
              <Row>
              <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text>
              Gachibowli,
              Hyderabad,
              500032	
              </Card.Text>
            </Card.Body>
              </Row>
             
              </Col>
              <Col>
              <Row>
              <Card.Body>
              <Card.Title>Regular Timings:</Card.Title>
              <Card.Text>
              Monday : 10 a.m - 10 p.m, Break: 1p.m - 2p.m
              </Card.Text>
            </Card.Body>
              </Row>
              </Col>
              </Row>
              </Container>
          );
      }

  }

  export default connect(mapStateToProps, mapDispatchToProps)(Overview);