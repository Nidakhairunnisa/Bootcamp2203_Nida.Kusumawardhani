import React, { Component } from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';

export default class navbarComp extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="/customer">Customer</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        )
    }
}