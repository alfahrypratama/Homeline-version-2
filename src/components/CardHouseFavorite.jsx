import React, { useState } from 'react'
import '../assets/style/CardHouse.css'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Button, Card, CardGroup, Nav } from 'react-bootstrap'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import PriceBox2 from './PriceBox2';

export default function CardHouseFavorite() {
    const [isHovered, setIsHovered] = useState(false);

    const splideOptions = {
        arrows: false,
        type  : 'loop',
        autoplay: !isHovered,
        interval: 2000,
    };
    return (
        <>
            <Card style={{ width: '19rem' }} className='position-relative card-house' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Splide aria-label="My Favorite Images" options={splideOptions}>
                    <SplideSlide>
                        <Card.Img variant="top" src="/images/ex3.png" className='card-house-img' />
                    </SplideSlide>
                    <SplideSlide>
                        <Card.Img variant="top" src="/images/ex3.png" className='card-house-img' />
                    </SplideSlide>
                </Splide>
                <PriceBox2 />
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
