import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button }from 'react-bootstrap';
import { login } from "../../actions";
const mapStateToProps = state => {
    return {
    }};
class Login extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            user_email : '',
            password : ''
        }
        this.loginUserDispatch = user => this.props.dispatch(login(user));
    }
    routeChange=()=> {
        let path = `/business`;
        window.location.href=path;
      }
    loginUser = (event) =>{
        let user = {};
        user.user_email = this.state.user_email;
        user.password = this.state.password;
        this.routeChange();
        this.loginUserDispatch(user);
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    renderForm() {
            return(
                <div>
                <h3>Login Form</h3>
                <hr/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="user_email" value={this.state.user_email} onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button variant="primary"  onClick={this.loginUser}>
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

export default connect(mapStateToProps)(Login);