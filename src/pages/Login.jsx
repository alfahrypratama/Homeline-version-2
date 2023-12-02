import React from 'react'

//Component
import AuthForm from "../components/AuthForm"
import AuthButton from '../components/AuthButton'

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

export default function Login() {
    return (
        <>
        <Row className="d-flex justify-content-center align-items-center">
                <Col xs={6} className="">
                    <Image src="/images/Pic.png" className="w-100" />
                    {/* <img src="/Pic.png" className="w-100 vh-100" alt="" /> */}
                </Col>
                <Col xs={6} className="text-center">
                    <Link to={'/'}><Image src="/images/Logo.png" /></Link>
                    <h3 className="mt-2 fw-bold">Masuk</h3>
                    <Container className="text-start w-75 mt-5">
                        <Form.Group>
                            <AuthForm label='Username atau Email' type='email' placeholder='Masukan alamat email atau username'/>
                            <AuthForm label='Kata Sandi' type='password' placeholder='Masukan kata sandi'/>
                        </Form.Group>
                    </Container>
                    <AuthButton namaBtn='Masuk'/>
                    <div className='fw-medium'>
                        Belum punya akun? <Link to={'/register'} className='text-decoration-none font-accent'>Daftar</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
