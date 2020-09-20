import React from 'react';
import { connect } from 'react-redux';
import {Container,Row,Col,Form,Button }from 'react-bootstrap';
import { login } from "../../actions";
const mapStateToProps = state => {
    return {
        user_email:state.userReducer.user_email,
        authenticated:state.userReducer.authenticated
        
    }};
const mapDispatchToProps = (dispatch) => ({
        login:(user)=>dispatch(login(user))
    });
class Login extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            user_email : '',
            password : '',
            userValidated: false
        }
    }
    routeChange=()=> {
        let path = `/business`;
        window.location.href=path;
      }
   loginUser = async(event) =>{
        event.preventDefault();
        const form = event.currentTarget;
    if (form.checkValidity()) {
        let user = {};
        user.user_email = this.state.user_email;
        user.password = this.state.password;
       await this.props.login(user);
        if(this.props.user_email&&this.props.authenticated){
            this.routeChange();
        }
    }
        this.setState({
            ...this.state,
            userValidated: true,
          });
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
                <Form  
                noValidate
                validated={this.state.userValidated}
                onSubmit={this.loginUser}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        required
                        type="email" 
                        placeholder="Enter email" 
                        name="user_email" 
                        value={this.state.user_email} 
                        onChange={this.handleChange}/>
                        <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please provide your email
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        required 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide your password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <button type="submit" className="btn btn-primary">
                 
                        Login
                    </button>
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
            <Col xs={12} md={6} lg={4}>
            {this.renderForm()}
            </Col>
            </Row>
            </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);