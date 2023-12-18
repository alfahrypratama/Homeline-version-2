import React from 'react'
import '../assets/style/SearchBox.css'
import { Card, Col, Nav, Row, Dropdown, } from 'react-bootstrap'
import { HiOutlineChevronDown } from 'react-icons/hi';
import LandingBtn from './LandingBtn';
import { Link } from 'react-router-dom';

export default function SearchBox() {
    return (
        <>
            <Card className='mt-5 card-search justify-content-center'>
                <Row className='p-4 d-flex justify-content-center align-items-center'>
                    <Col className='box-right'>
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
                    <Col className='box-right'>
                        <Nav className='fw-medium'>Kategori</Nav>
                        <Dropdown className='mt-1'>
                            <Dropdown.Toggle as={CustomToggle} variant="outline-light">
                                <span className='fw-light text-dropdown'>Pilih Kategori<HiOutlineChevronDown className='ms-2 fw-lighter fs-6' /></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className='dropdown-item' href="#/action-1">Rumah</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Tanah</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className='box-right'>
                        <Nav className='fw-medium'>Harga</Nav>
                        <Dropdown className='mt-1'>
                            <Dropdown.Toggle as={CustomToggle} variant="outline-light">
                                <span className='fw-light text-dropdown'>Batas Harga<HiOutlineChevronDown className='ms-2 fw-lighter fs-6' /></span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className='dropdown-item' href="#/action-1">Harga 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Harga 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Harga 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <Link to={'/search-result'}><LandingBtn namaBtn='Cari' /></Link>
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