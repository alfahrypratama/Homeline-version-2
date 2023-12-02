import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavbarUser() {
    return (
        <>
            <Container>
                <Navbar className="">
                    <Navbar.Brand href="#home text-navbar" className="fw-bold"><Image src='/images/Logo.png' className="w-50" />Homeline</Navbar.Brand>
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
            </Container>
        </>
    )
}
