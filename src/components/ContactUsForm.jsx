import React from 'react'

//Component


//Style
import '../assets/style/ContactUsForm.css'

// Bootstrap
import Form from 'react-bootstrap/Form'

//Route
import { Link } from 'react-router-dom'

export default function ContactUsForm(props) {
    return (
        <>
            <Form className='mb-5'>
                <Form.Label className='auth-label'>{props.label}</Form.Label>
                <Form.Control plaintext className='contact-form pt-2 pb-2' type={props.type} placeholder={props.placeholder} />
            </Form>
        </>
    )
}
