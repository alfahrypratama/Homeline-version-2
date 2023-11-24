import React from 'react'

import Button from 'react-bootstrap/Button'
import '../assets/style/LandingBtn.css'

export default function LandingBtn2(props) {
    return (
        <>
            <Button className='btn-landing2 fw-medium' variant="primary">{props.namaBtn}</Button>{' '}
        </>
    )
}
