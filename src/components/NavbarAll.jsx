import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function NavbarAll() {
    return (
        <>
            <Container>
                <Navbar className="">
                    <Navbar.Brand href="#home text-navbar" className="fw-bold"><Image src='/images/Logo.png' className="w-50" />Homeline</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-4">
                            <Nav.Link><Link className="text-decoration-none" to={'/'}>Beranda</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none" to={'/'}>Tentang Kami</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none" to={'/login'}>Masuk</Link></Nav.Link>
                            <Nav.Link><Link className="text-decoration-none" to={'/register'}>Daftar</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}
