import './Navigation.css'
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="md">
            <Container>
                <Navbar.Brand href="#home">Taste Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to='/home'>Home</Link>
                        <Link className='nav-link' to='/foods'>Food</Link>
                        <Link className='nav-link' to='/clients'>Clients</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;