import React from 'react'
import '../assets/style/Footer.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <Nav className='background'>
                <Container className='mt-4 mb-4 d-flex'>
                    <Col className='align-items-end d-flex'>
                        <Row>
                            <Col>
                                <Nav className='fw-medium mb-2 text-contact'>Hubungi Kami</Nav>
                                <Nav className='gap-3 text-contact'>
                                    <FaFacebookF /><FaTwitter /><RiInstagramFill />
                                </Nav>
                            </Col>
                        </Row>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col className=''>
                        <Nav className='fw-bold mb-2'>Fitur</Nav>
                        <Nav className=''>Layanan</Nav>
                        <Nav className=''>Foto</Nav>
                    </Col>
                    <Col className=''>
                        <Nav className='fw-bold mb-2'>Perusahaan</Nav>
                        <Nav className=''>Tentang Kami</Nav>
                        <Nav className=''>Kontak Kami</Nav>
                    </Col>
                    <Col className=''>
                        <Nav className='fw-bold mb-2'>Kontak Kami</Nav>
                        <Nav className=''>+0123456789</Nav>
                        <Nav className=''>homeline@gmail.com</Nav>
                        <Nav className=''>Indonesia</Nav>
                    </Col>
                </Container>
            </Nav>
        </>
    )
}
