import React from 'react'

//Component
import AuthForm from "./AuthForm"
import AuthButton from './AuthButton'

//Style
import '../assets/style/Register.css'

// Bootstrap
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

//Route
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={6} className="">
                    <Image src="/images/Pic.png" className="w-100" />
                    {/* <img src="/Pic.png" className="w-100 vh-100" alt="" /> */}
                </Col>
                <Col xs={6} className="text-center">
                    <Link to={'/'}><Image src="/images/Logo.png" /></Link>
                    <h3 className="mt-2 fw-bold">Daftar</h3>
                    <Container className="text-start w-75 mt-5">
                        <Form.Group>
                            <AuthForm label='Nama Lengkap' type='text' placeholder='Masukan nama Anda' />
                            <AuthForm label='Email' type='email' placeholder='Masukan email' />
                            <AuthForm label='No. Telepon' type='text' placeholder='Masukan no. telepon' />
                            <AuthForm label='Kata sandi' type='password' placeholder='Masukan kata sandi' />
                            <AuthForm label='Konfirmasi kata sandi' type='password' placeholder='Masukan ulang kata sandi' />
                        </Form.Group>
                    </Container>
                    <AuthButton namaBtn='Daftar' />
                    <div>
                        Sudah punya akun? <Link to={'/login'} className='text-decoration-none font-accent'>Masuk</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
