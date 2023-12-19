import React from 'react'
import '../assets/style/Landingpage.css'
import NavbarLanding from '../components/NavbarLanding'
import { Card, Col, Container, Image, Nav, Row } from 'react-bootstrap'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import LandingBtn2 from '../components/LandingBtn2';
import LandingBtn3 from '../components/LandingBtn3';
import CardAbout from '../components/CardAbout';
import LandingBtn4 from '../components/LandingBtn4';
import CardHouse from '../components/CardHouse';
import FooterAll from '../components/FooterAll';
import SearchBox from '../components/SearchBox';
import BeforeFooter from '../components/BeforeFooter';
import { Link } from 'react-router-dom';

export default function Landingpage() {
    return (
        <>
            <Container className='mt-3 mb-3'>
                <NavbarLanding />
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={7} className='mb-5'>
                        <Nav className='fs-1 fw-bold'>Temukan Rumah Impianmu!</Nav>
                        <Nav>Setiap rumah memiliki kisahnya sendiri. Ayo temukan rumah yang memberikan makna baru untukmu.</Nav>
                        <SearchBox />
                        <Nav className='mt-5 gap-3'>
                            <Link to={'/auth/login'}><LandingBtn2 namaBtn='Explore' /></Link>
                            <Link to={'/contact-us'}><LandingBtn3 namaBtn='Hubungi Kami' /></Link>
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
                        <Row>
                            <Link to={'/login'}><LandingBtn4 /></Link>
                        </Row>
                    </Card>
                </Col>
            </Nav>

            <Container>
                <Nav className='mt-5 justify-content-center fw-bold fs-3'>Pilihan Terbaik Untukmu</Nav>
                <Row className='mt-5'>
                    <Col className='d-flex justify-content-between'>
                        <CardHouse />
                        <CardHouse />
                        <CardHouse />
                    </Col>
                </Row>
            </Container>

            <Container className='mb-5 mt-5'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={8} className=''>
                        <Nav className="fs-3 fw-bold">Tentang Kami</Nav>
                        <Nav className='text-justify mt-3'>
                            Selamat datang di Homeline, sebuah platform yang menyediakan informasi seputar hunian inovatif. Kami didirikan dengan tujuan membantu masyarakat mendapatkan akses mudah, terjangkau, dan efisien ke hunian yang nyaman dan sesuai dengan kebutuhan. Tim kami yang berdedikasi selalu siap memberikan bantuan dan informasi yang dibutuhkan. Kami percaya bahwa setiap orang berhak atas tempat tinggal yang nyaman, aman, dan sesuai dengan gaya hidup mereka.
                        </Nav>
                    </Col>
                    <Col xs={4} className='justify-content-end d-flex'>
                        <Image src='/images/Logo2.png' className='w-75' />
                    </Col>
                </Row>
            </Container>

            <BeforeFooter />
            
            <FooterAll />
        </>
    )
}
