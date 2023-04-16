import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import  Nav  from "react-bootstrap/Nav";




const NavbarCom = () =>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
            <Nav>
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/add">Add Customer</Nav.Link>
            <Nav.Link to="/all">All Customer</Nav.Link>
            </Nav>
        </Container>
      </Navbar> 
    )
}

export default NavbarCom;