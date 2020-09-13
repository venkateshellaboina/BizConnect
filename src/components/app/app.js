import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { connect } from 'react-redux';
import{login} from '../../actions';
import Login from '../../components/login/login';
import Signup from '../../components/signup/signup';

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => ({
  login
});

class App extends React.Component {

  constructor() {
    super();
    this.changeEmail = ev => this.props.login();
    };
  
    render(){
        return(
  <Router>
<div onLoad={()=>{this.changeEmail()}
}>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home">BizConnect</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/signup">
        SignUp
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
<Switch>
    <Route path="/about">
           About
    </Route>
    <Route path="/users">
            Users
    </Route>
    <Route path="/login">
           <Login/>
    </Route>
    <Route path="/signup">
           <Signup/>
    </Route>
    <Route path="/">
           heelo
    </Route>
</Switch>
      </div>
</Router>
        )
    }};   
export default connect(mapStateToProps, mapDispatchToProps)(App);