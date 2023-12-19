import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../assets/style/NavbarallAdmin.css';

function NavbarallAdmin2() {
    return (
      <>
        <Navbar className="bg-body-tertiary">
          <Container  className="containerAdmin d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#home" className="font-weight-bold">
              <img alt="" src="/images/Logo.png" width="80" height="30" className="d-inline-block align-top" />
              {' '}
             <span className='admin-label'>HOMELINE</span>
            </Navbar.Brand>
  
            {/* Add the admin section */}
      <div className="d-flex items-center" style={{marginRight:"20px"}}>
        <span className="flex self-center text-xl ml-2 whitespace-nowrap text-black mr-2">
          <b>Hello</b>, <p className='font-semibold'> Admin</p>
        </span>
        <img
          src="/images/avatar.png" width="50" height="50"  className="d-inline-block align-top rounded"
          alt="Profile"
        />
      </div>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default NavbarallAdmin2; 