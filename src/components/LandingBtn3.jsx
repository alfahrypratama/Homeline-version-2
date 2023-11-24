import React from 'react'

import Button from 'react-bootstrap/Button'
import '../assets/style/LandingBtn.css'

export default function LandingBtn3(props) {
    return (
        <>
            <Button className='btn-landing3 fw-medium' variant="primary">{props.namaBtn}</Button>{' '}
        </>
    )
}
