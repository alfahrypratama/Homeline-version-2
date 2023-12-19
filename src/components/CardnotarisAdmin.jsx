



import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import '../assets/style/CardnotarisAdmin.css';

function CardnotarisAdmin() {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicNama">
            <Form.Label>Nama notaris</Form.Label>
            <Form.Control type="text" placeholder="Enter Nama" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>No telepon</Form.Label>
            <Form.Control type="tel" placeholder="Isi telepon" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicTelepon">
            <Form.Label>Domisili</Form.Label>
            <Form.Control type="text" placeholder="Enter Domisili" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLinkedln">
            <Form.Label>Link Linkedln</Form.Label>
            <Form.Control type="url" placeholder="Enter Linkedln" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Label>Link Portofolio</Form.Label>
            <Form.Control type="url" placeholder="Enter Link Portofolio" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardnotarisAdmin;