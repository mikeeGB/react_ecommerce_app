import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from "react-bootstrap";


export default function Header() {
    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/">Shop platform</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products">All products</Nav.Link>
                    <Nav.Link href="/shop_infos">Shops</Nav.Link>
                    <Nav.Link href="/admin">Admin</Nav.Link>

                    {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                    {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                    {/*  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                    {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                    {/*  <NavDropdown.Divider />*/}
                    {/*  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                  </Nav>

                  <Nav.Link href="/cart"><i className="fas fa-shopping-cart"/></Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/logout">Logout</Nav.Link>

                </Navbar.Collapse>
              </Container>
            </Navbar>
        </React.Fragment>
    )
}