import React from 'react'
import '../assets/style/Landingpage.css'
import { Card, Image, Nav } from 'react-bootstrap'

export default function CardAbout(props) {
    return (
        <>
            <Card className='card-about p-3 justify-content-center align-items-center mt-4'>
                <Image src={props.svg} className='w-50'/>
                <Nav className='fw-bold mt-3 fs-5 text-center'>{props.text}</Nav>
            </Card>
        </>
    )
}
