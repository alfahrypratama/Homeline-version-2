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

export default function Register() {
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [no_hp, setNo_hp] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    async function handleRegister() {
        if (passwordConfirm != password) {
            return alert('Password konfirmasi anda tidak sama')
        }

        const result = await axios.post('http://localhost:3052/auth/register', {
            nama,
            email,
            no_hp,
            password,
        });

        alert(result.data.massage);
        window.location.href = '/homepage'

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
                    <h3 className="mt-2 fw-bold">Daftar</h3>
                    <Container className="text-start w-75 mt-5">
                        <Form.Group>
                            <AuthForm label='Nama Lengkap' type='text' placeholder='Masukan nama Anda' onKeyUp={(e) => setNama(e.target.value)}/>
                            <AuthForm label='Email' type='email' placeholder='Masukan email' onKeyUp={(e) => setEmail(e.target.value)}/>
                            <AuthForm label='No. Telepon' type='text' placeholder='Masukan no. telepon' onKeyUp={(e) => setNo_hp(e.target.value)}/>
                            <AuthForm label='Kata sandi' type='password' placeholder='Masukan kata sandi' onKeyUp={(e) => setPassword(e.target.value)}/>
                            <AuthForm label='Konfirmasi kata sandi' type='password' placeholder='Masukan ulang kata sandi' onKeyUp={(e) => {setPasswordConfirm(e.target.value)}}/>
                        </Form.Group>
                    </Container>
                    <AuthButton onClick={handleRegister} namaBtn='Daftar'/>
                    <div className='fw-medium'>
                        Sudah punya akun? <Link to={'/auth/login'} className='text-decoration-none font-accent'>Masuk</Link>
                    </div>
                </Col>
            </Row>
        </>
    )
}
