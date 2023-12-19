import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import NavbarAll from '../components/NavbarAll'
import '../assets/style/Homepage.css'
import { Col, Container, Image, Nav, Row } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import CardHouse2 from '../components/CardHouse2'
import CardHouse from '../components/CardHouse'
import BeforeFooter from '../components/BeforeFooter'
import FooterAll from '../components/FooterAll'
import { Link } from 'react-router-dom'

export default function Homepage() {

    const nama = Cookies.get('nama')
    const email = Cookies.get('email')

    if (!nama) {
        window.location.href = '/auth/login';
        return;
    }


    return (
        <>
            <NavbarAll />
            <Container className='mt-5'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col className="">
                        <Nav className='fs-2 fw-bold mb-5'>Mulailah Jual atau Beli Properti dengan Homeline</Nav>
                        {nama}
                        {email}
                        <Container className=" d-flex gap-4 justify-content-center align-items-center mb-4">
                            <Nav className='option-box text-center justify-content-center align-items-center fs-5 fw-semibold'>Jual <br />Properti</Nav>
                            <Link to={'/jasa-notaris'} className='text-decoration-none'><Nav className='option-box text-center justify-content-center align-items-center fs-5 fw-semibold'>Jasa <br />Notaris</Nav></Link>
                        </Container>
                        <Container className=" d-flex gap-4 justify-content-center align-items-center">
                            <Nav className='option-box text-center justify-content-center align-items-center fs-5 fw-semibold'>Favorite</Nav>
                            <Nav className='option-box text-center justify-content-center align-items-center fs-5 fw-semibold'>Blog <br /> Homeline</Nav>
                        </Container>
                        <SearchBox />
                    </Col>
                    <Col xs={5} className=" justify-content-end d-flex">
                        <Image src='/images/homepic1.png' className='' width='90%'/>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Nav className='fs-2 fw-bold mb-5 justify-content-center'>Temukan Rumah Impianmu!</Nav>
                <CardHouse2 />
            </Container>

            <Nav className='mt-5 mb-5 section-new'>
                <Container className='pt-5 pb-5'>
                    <Nav className='fs-4 fw-semibold'>Properti Baru Dijual</Nav>
                    <Nav className=''>Properti terbaru yang didaftarkan di HOMELINE</Nav>
                    <Nav className='mt-4 justify-content-between'>
                        <CardHouse />
                        <CardHouse />
                        <CardHouse />
                    </Nav>
                </Container>
            </Nav>

            <BeforeFooter />
            <FooterAll />
        </>
    )
}
