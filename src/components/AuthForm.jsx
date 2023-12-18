import React from 'react'
import Form from 'react-bootstrap/Form'
import '../assets/style/AuthForm.css'

export default function AuthForm(props) {
    return (
        <>
            <Form className='mb-4'>
                <Form.Label className='auth-label fw-medium'>{props.label}</Form.Label>
                <Form.Control className='auth-form ps-4' type={props.type} placeholder={props.placeholder} onKeyUp={props.onKeyUp}/>
            </Form>
        </>
    )
}
