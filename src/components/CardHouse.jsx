import React from 'react'
import '../assets/style/CardHouse.css'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Button, Card, CardGroup, Nav } from 'react-bootstrap'
import PriceBox from './PriceBox';

export default function CardHouse() {
    return (
        <>
            <Card style={{ width: '19rem' }} className='position-relative card-house'>
                <Card.Img variant="top" src="/images/ex3.png" className='card-house-img'/>
                <PriceBox />
                <Card.Body>
                    <Card.Text className='fw-bold'>Bali</Card.Text>
                    <Card.Title className='fw-bold fs-5'>Tropical Villa Kerobokan</Card.Title>
                    <Card.Text className='text-detail mt-3'>
                        <IoBedOutline /> <span className='fw-semibold'>3</span> Kamar Tidur
                    </Card.Text>
                    <Card.Text className='text-detail'>
                        
                        <LuBath /> <span className='fw-semibold'>2</span> Kamar Mandi
                    </Card.Text>
                    <Card.Text className='text-detail'>
                        <MdOutlineSpaceDashboard /> <span className='fw-semibold'>123</span> m<sup>2</sup>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
