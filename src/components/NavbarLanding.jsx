import React from "react";

//Style
import '../assets/style/NavbarLanding.css'

//bootstrap
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

//Route
import { Link } from 'react-router-dom'

export default function NavbarLanding() {
    return (
        <>
            <Navbar className="">
                <Navbar.Brand href="#home text-navbar" className="fw-bold"><Image src='/images/Logo.png' className="w-50"/>Homeline</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-4">
                        <Nav.Link><Link className="text-decoration-none text-white" to={'/'}>Beranda</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-white" to={'/'}>Tentang Kami</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-white" to={'/login'}>Masuk</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-white" to={'/register'}>Daftar</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
