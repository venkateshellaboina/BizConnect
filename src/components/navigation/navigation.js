import React from 'react';
import { connect } from 'react-redux';
import {Navbar,Nav}from 'react-bootstrap';
import { BrowserRouter as  Switch, Route ,NavLink} from "react-router-dom";
/* Components start */
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import Customer from "../../components/customer/customer";
import Business from  "../../components/business/business";
/* Components End */

const mapStateToProps = state => {
    return{
       
    }
};
  
const mapDispatchToProps = dispatch => ({
    
});

class Navigation extends React.Component {
    render(){
        return(
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <NavLink className="navbar-brand" to="/customer">BizConnect</NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto">
                </Nav> 
                <Nav>
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                  <NavLink className="nav-link" to="/signup">
                    SignUp
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/business">
              <Business />
              </Route>
              <Route path="/customer">
              <Customer/>
              </Route>
              <Route exact path="/" component={Customer}/>
            </Switch>
          </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);