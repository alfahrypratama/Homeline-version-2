import React from 'react'
import '../assets/style/Landingpage.css'
import NavbarLanding from './NavbarLanding'
import { Card, Col, Container, Image, Nav, Row, Dropdown, DropdownButton } from 'react-bootstrap'
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import LandingBtn from './LandingBtn';
import LandingBtn2 from './LandingBtn2';
import LandingBtn3 from './LandingBtn3';
import CardAbout from './CardAbout';

export default function Landingpage() {
    return (
        <>
            <Container className='mt-3 mb-3'>
                <NavbarLanding />
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={7} className='mb-5'>
                        <Nav className='fs-1 fw-bold'>Temukan Rumah Impianmu!</Nav>
                        <Nav>Setiap rumah memiliki kisahnya sendiri. Ayo temukan rumah yang memberikan makna baru untukmu.</Nav>
                        <Card className='mt-5 card-search'>
                            <Row className='p-4 d-flex justify-content-center align-items-center'>
                                <Col className='box-right'>
                                    <Nav className='fw-medium'>Lokasi</Nav>
                                    <Dropdown className='mt-1'>
                                        <Dropdown.Toggle as={CustomToggle} variant="outline-light">
                                            <span className='fw-light text-dropdown'>Pilih Kota<HiOutlineChevronDown className='ms-2 fw-lighter fs-6' /></span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className='dropdown-item' href="#/action-1">Kota 1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Kota 2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Kota 3</Dropdown.Item>
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
                                            <Dropdown.Item className='dropdown-item' href="#/action-1">Kategori 1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Kategori 2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Kategori 3</Dropdown.Item>
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
                                    <LandingBtn namaBtn='Kirim' />
                                </Col>
                            </Row>
                        </Card>
                        <Nav className='mt-5 gap-3'>
                            <LandingBtn2 namaBtn='Explore' />
                            <LandingBtn3 namaBtn='Hubungi Kami' />
                        </Nav>
                    </Col>
                    <Col className='mb-5'>
                        <Image src='/images/pic11.png' className='img-navbar w-100' />
                    </Col>
                </Row>

                <Nav className='mt-5 justify-content-center fw-bold fs-1'>
                    Kenapa Harus Menggunakan Website Kami?
                </Nav>
                <Nav className='text-center mt-3'>
                    HOMELINE memberikan informasi detail pada tiap properti yang terdaftar. Segala bentuk informasi telah teruji dan terjamin keabsahannya. Kampanye properti akan dilakukan dengan sistem yang terbaik. Jual dan atau Beli properti dengan cepat dan aman hanya dengan HOMELINE.
                </Nav>
                <Row className='d-flex justify-content-center gap-5'>
                    <CardAbout svg='/svg/Rectangle 125.svg' text='Keamanan Privasi' />
                    <CardAbout svg='/svg/Rectangle 126.svg' text='Transaksi Aman & Cepat' />
                    <CardAbout svg='/svg/Rectangle 127.svg' text='Fitur yang Lengkap' />
                    <CardAbout svg='/svg/Rectangle 128.svg' text='Customer Service 24 jam' />
                </Row>
            </Container>

            <Nav className='d-flex exp-section vh-100'>
                <Col className='border d-flex justify-content-center align-items-center'>
                    <Image src='/images/pic3.png' className='exp-img' />
                    <Card className='exp-card p-5'>
                        <Nav className='fw-bold fs-5 mb-2'>RUMAH BARU DIJUAL DI ARCAMANIK</Nav>
                        <Nav className='fw-semibold mb-2'>Rp 800.000.000</Nav>
                        <Nav className='text-card mb-2'>Segera miliki rumah baru di Arcamanik, bangunan 2 lantai harga mulai 200 jt an dengan lokasi sangat strategis akses 3 menit dari Polsek Arcamanik, dekat minimarket dan klinik kesehatan, lingkungan sangat nyaman dan bebas banjir.</Nav>
                        <Row className='mt-3'>
                            <Col className='text-detail'>
                                <IoBedOutline /> <span className='fw-semibold'>3</span> Kamar Tidur
                            </Col>
                            <Col className='text-detail'>
                                <LuBath /> <span className='fw-semibold'>2</span> Kamar Mandi
                            </Col>
                            <Col className='text-detail'>
                                <MdOutlineSpaceDashboard /> <span className='fw-semibold'>123</span> m<sup>2</sup>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Nav>
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
