import React from 'react'
import NavbarAll from '../components/NavbarAll';
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';


export default function Blog() {
  return (
    <>
      {/* Mintaa gantiin navbar -> jadi navbarUser yaa bang */}
      <NavbarAll />
      <br />
      <div style={{ padding: "0 80px 0 80px" }}>
        Home-Blog <hr />
      </div><br /><br />
      <div style={{ textAlign: "center" }}>
        <h3>Blog Homeline</h3> <br /><br />
      </div>
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col">
            <CardBlog />
          </div>
          <div class="col">
            <CardBlog />
          </div>
          <div class="col">
            <CardBlog />
          </div>
        </div>
      </div>
      <br />
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col">
            <CardBlog />
          </div>
          <div class="col">
            <CardBlog />
          </div>
          <div class="col">
            <CardBlog />
          </div>
        </div>
      </div>
      <br />
      <br />

      <Nav className='exp-section-2'>
        <Container className='d-flex flex-column text-center align-items-center justify-content-center'>
          <Nav className='fs-2 fw-bold'>Pilih Rumah Ternyamanmu</Nav>
          <Nav className='mt-3'>Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.</Nav>
          <Button variant="outline-light" className='mt-3 ps-4 pt-2 pe-4 pb-2 rounded-5'>Hubungi Kami</Button>
        </Container>
      </Nav>
      <FooterAll />
    </>

  );
}