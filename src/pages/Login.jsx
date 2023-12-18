import React, {useState} from 'react'

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
import axios from 'axios'

export default function Login() {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const checkNamaOrEmail = (e) => {
        const inputValue = e.target.value;
        const isEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
    
        if (isEmailFormat) {
            setEmail(inputValue);
        } else {
            setNama(inputValue);
        }
    }
    
    async function handleLogin() {
        const result = await axios.post('http://localhost:3052/auth/login', {
            nama,
            email,
            password,
        });
        alert(result.data.massage);
        if (result.data.success) {
            window.location.href = result.data.redirectUrl
        }
    };

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
                            <AuthForm label='Username atau Email' type='email' placeholder='Masukan alamat email atau username' onKeyUp={(e) => checkNamaOrEmail(e)} />
                            <AuthForm label='Kata Sandi' type='password' placeholder='Masukan kata sandi' onKeyUp={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                    </Container>
                    <AuthButton namaBtn='Masuk' onClick={handleLogin}/>
                    <div className='fw-medium'>
                        Belum punya akun? <Link to={'/auth/register'} className='text-decoration-none font-accent'>Daftar</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
