import React from 'react'
import Button from 'react-bootstrap/Button'
import '../assets/style/LandingBtn.css'

export default function LandingBtn(props) {
    return (
        <>
            <Button className='btn-landing fw-medium' variant="primary">{props.namaBtn}</Button>{' '}
        </>
    )
}
