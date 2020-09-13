import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button }from 'react-bootstrap'
const mapStateToProps = state => {
    return {
    }};
  
  const mapDispatchToProps = dispatch => ({

  });

class Login extends React.Component {
    renderForm() {
            return(
                <div>
                <h3>Login Form</h3>
                <hr/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Login
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
            <Col xs={6} md={6} lg={4}>
            {this.renderForm()}
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);