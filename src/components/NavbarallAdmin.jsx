import React from 'react';
import { Image, Container, Navbar, Nav } from 'react-bootstrap';
import '../assets/style/NavbarallAdmin.css';
import { Link } from 'react-router-dom';

function NavbarallAdmin() {
    return (
      <>
        <Container className=' Containeradmin box-navbar mt-4'>
          <Navbar className="">
            <Link to={'/homepage'} className='text-decoration-none'>
              <Navbar.Brand className="fw-bold">
                <Image src='/images/Logo.png' className="w-80" />
                Homeline
              </Navbar.Brand>
            </Link>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-4">
                {/* Tambahkan bagian gambar profil admin avatar di sini */}
                <Nav.Link>
                  <img
                    src='/images/avatar.png'
                    alt='Admin Avatar'
                    roundedCircle
                    className='admin-avatar'
                    style={{ width: '50px', height: '50px' }} /* Sesuaikan ukuran yang diinginkan */
                  />
                  <span className='ms-2 fw-semibold'>Admin</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
  
  export default NavbarallAdmin; 