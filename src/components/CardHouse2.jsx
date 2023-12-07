import React from 'react'
import '../assets/style/CardHouse2.css'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Button, Card, Col, Row } from 'react-bootstrap';
import PriceBox from './PriceBox';
import ShareBtn from './ShareBtn';

export default function CardHouse2() {
    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='card-house-2 rounded-4 position-relative'>
                            <Row className='p-3 justify-content-center align-items-center d-flex'>
                                <Col className="">
                                    <Button className='price-btn position-absolute ms-2 mt-2'>Mulai <span className='fw-semibold'>13jt / Bulan</span></Button>{' '}
                                    <Card.Img variant="top" src="/images/ex3.png" className='card-img'/>
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Card.Text className='fw-semibold'>Bali</Card.Text>
                                        <Card.Title className='fw-bold fs-6'>Tropical Villa Kerobokan</Card.Title>
                                        <Card.Text className='text-detail mt-3'>
                                            <IoBedOutline /> <span className='fw-semibold'>3</span> Kamar Tidur
                                        </Card.Text>
                                        <Card.Text className='text-detail'>
                                            <LuBath /> <span className='fw-semibold'>2</span> Kamar Mandi
                                        </Card.Text>
                                        <Card.Text className='text-detail'>
                                            <MdOutlineSpaceDashboard /> <span className='fw-semibold'>123</span> m<sup>2</sup>
                                        </Card.Text>
                                        <ShareBtn />
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
