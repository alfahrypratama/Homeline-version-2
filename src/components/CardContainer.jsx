import React, {useState} from 'react'


//style

import '../assets/style/CardContainer.css'
//bootstrap
import { Card, Form, Button, } from 'react-bootstrap'; 
import Figure from 'react-bootstrap/Figure';


const CardContainer = () => {
  
  const [masukannamarumah, setNama] = useState('');
  const [alamat, setalamat] = useState('');

  const handleNamaChange = (event) => {
    setNama(event.target.value);
  };

  const handleEmailChange = (event) => {
    setalamat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('masukannamarumah:', masukannamarumah);
    console.log('alamat:', alamat);
    // Lakukan tindakan formulir lainnya di sini
  };

  return (

  
    <Card>
      <Card.Body>
        <Card.Title>Formulir</Card.Title>
            <Form.Group controlId="formBasicRadio">
              <Form.Check type="radio" name="radioGroup" label="Option 1" />
              <Form.Check type="radio" name="radioGroup" label="Option 2" />
            </Form.Group>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email"
              placeholder="tuliskan disini" />
            
          </Form.Group>

          <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select >
            <option>Disabled select</option>
        < option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        </Form.Group>

        <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email" placeholder="tuliskan disini" />
             </Form.Group>
             
       <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select >
            <option>Disabled select</option>
        < option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </Form.Select>
        </Form.Group>

        <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email" placeholder="tuliskan disini" />
             </Form.Group>

             <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email" placeholder="tuliskan disini" />
             </Form.Group>

             <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email" placeholder="tuliskan disini" />
             </Form.Group>

             <Form.Group controlId="formNama">
            <Form.Label>Masukan nama rumah:</Form.Label>
            <Form.Control
              type="email" placeholder="tuliskan disini" />
             </Form.Group>

             <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

      
             

          
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
