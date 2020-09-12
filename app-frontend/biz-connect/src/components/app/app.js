import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  function App()  {
    
        return(
            <Router>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home">BizConnect</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/users">Users</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/users">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/about">
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
          <Route path="/">
           heelo
          </Route>
        </Switch>
      </div>
    </Router>
        )
    }
export default App;