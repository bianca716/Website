import './App.css';
import React from "react";
import { Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Work from './Work'
import Contact from './Contact'

function App() {
  return (
    <div className="container-fluid text-center">
      <Router>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="/Website/#/">Bianca Onyekwere</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/Website/#/">Home</Nav.Link>
            <Nav.Link href="/Website/#/work">Work</Nav.Link>
            <Nav.Link href="/Website/#/contact">Contact Me</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </div>

  );
}


export default App;
