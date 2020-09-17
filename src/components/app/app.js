import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions";
/* Components start */
import Login from "../../components/login/login";
import Signup from "../../components/signup/signup";
import Customer from "../../components/customer/customer";
/* Components End */
import { Provider } from 'react-redux'
import configureStore from '../../store/index';
import client from "../../services/client";
import { ApolloProvider } from "react-apollo";


const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <div
          >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/home">BizConnect</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                </Nav> */}
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
              <Route path="/about">About</Route>
              <Route path="/users">Users</Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/">
                <Customer/>
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
      </Provider>
    );
  }
}
export default App;
