import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button }from 'react-bootstrap'
const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({

  });

class Signup extends React.Component {
    renderForm() {
            return(
                <div>
                <h3>SignUp Form</h3>
                <hr/>
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                </Form.Row>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Contact Number" />
                    </Form.Group>
                  
                    <Form.Group >
                      <Form.Label >
                        User Type
                      </Form.Label>
                      <Form.Row>
                    <Form.Group  as={Col}>
                        <Form.Check 
                          type="radio"
                          label="Customer"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                    </Form.Group>
                    <Form.Group  as={Col}>
                        <Form.Check 
                          type="radio"
                          label="Business"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                    </Form.Group>
                        </Form.Row>
                    </Form.Group>
               
                  
                    <Button variant="primary" type="submit">
                     Sign Up
                    </Button>
                
                </Form>
                </div>
            )
    }
    renderBuisnessForm(){
        return(
            <div>
            <h3>BusIness Registration Form</h3>
            <hr/>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                 Register
                </Button>
            </Form>
            </div>
        )
    }
    render(){
        return(
            <div>
            <Container className="container-fluid h-100">
            <Row>
            </Row>
            <Row className="justify-content-center align-items-center h-100">
            <Col xs={6} md={8} lg={6}>
            {this.renderBuisnessForm()}
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);