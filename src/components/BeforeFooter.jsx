import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import '../assets/style/Landingpage.css'

export default function BeforeFooter() {
    return (
        <>
            <Nav className='exp-section-2'>
                <Container className='d-flex flex-column text-center align-items-center justify-content-center'>
                    <Nav className='fs-2 fw-bold'>Pilih Rumah Ternyamanmu</Nav>
                    <Nav className='mt-3'>Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.</Nav>
                </Container>
            </Nav>
        </>
    )
}
