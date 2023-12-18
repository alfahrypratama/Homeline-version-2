import React from 'react'
import '../assets/style/SearchBox.css'
import { Card, Col, Nav, Row, Dropdown, } from 'react-bootstrap'
import { HiOutlineChevronDown } from 'react-icons/hi';
import LandingBtn from './LandingBtn';

export default function SearchBox2() {
    return (
        <>
            <Card className='card-search justify-content-center'>
                <Row className='p-4 d-flex justify-content-center align-items-center'>
                    <Col className=''>
                        <Nav className='fw-medium'>Lokasi</Nav>
                        <Dropdown className='mt-1'>
                            <Dropdown.Toggle as={CustomToggle} variant="outline-light">
                                <span className='fw-light text-dropdown'>Pilih Kota<HiOutlineChevronDown className='ms-2 fw-lighter fs-6' /></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className='dropdown-item' href="#/action-1">Bali</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Jakarta</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Bandung</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col className='d-flex justify-content-center'>
                        <LandingBtn namaBtn='Kirim' />
                    </Col>
                </Row>
            </Card>
        </>
    )
}


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="#"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="custom-toggle text-decoration-none"
    >
        {children}
    </a>
));