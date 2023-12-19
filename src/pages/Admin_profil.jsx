import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import '../assets/style/ProfilAdmin.css';
import Sidebar from '../components/Sidebar';
import Navbarall_Admin from '../components/NavbarallAdmin';
import NavbarallAdmin from '../components/NavbarallAdmin';


function Admin_profil() {
  return (
    <>
    <NavbarallAdmin/>
    <div style={{ display:'flex', justifyContent:'center', paddingTop:"30px"}}>
      
    <div>
    <Sidebar/>
    </div> 
    <Card className="d-flex justify-content-center " style={{ paddingTop:"50px", width:"900px" }}>
      <Card.Body>
        <Row className="mb-3" >
          <Col sm="col-12">
            <h4>Foto Profil</h4>
            <img
              src="/images/avatar.png"
              alt="Avatar"
              style={{ width: '188px', borderRadius: '1%' }}
            />
            <h4>edit Profil</h4>
          </Col>
          <Col sm="10">
            {/* Bacaan "Foto Profil" */}
          </Col>
        </Row>
        <Form>
          <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextEmail">
            <Form.Label column sm="1">
              Nama
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" placeholder="Set nama" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              Email
            </Form.Label>
            <Col sm="3">
              <Form.Control type="email" placeholder="Enter email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              Kata sandi
            </Form.Label>
            <Col sm="3">
              <Form.Control type="password" placeholder="Enter sandi" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              NO. telepon
            </Form.Label>
            <Col sm="3">
              <Form.Control type="tel" placeholder="Enter telepon" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex" controlId="formPlaintextPassword">
            <Form.Label column sm="1">
              Alamat
            </Form.Label>
            <Col sm="3">
              <Form.Control type="text" placeholder="Enter alamat" />
            </Col>
          </Form.Group>

          {/* Tambahkan tombol di sini */}
          <Button variant="primary" className="float-right mb-2">
            Simpan
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default  Admin_profil;
