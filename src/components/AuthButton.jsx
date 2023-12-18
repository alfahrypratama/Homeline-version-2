import React from 'react'
import Button from 'react-bootstrap/Button'
import '../assets/style/AuthButton.css'

export default function AuthButton(props) {
    return (
        <>
            <Button className='btn-auth mb-2 mt-4 fw-medium' onClick={props.onClick} variant="primary">{props.namaBtn}</Button>{' '}
        </>
    )
}
