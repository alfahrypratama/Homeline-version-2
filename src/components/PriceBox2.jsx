import React from 'react'
import { useState } from 'react';
import '../assets/style/PriceBox.css'
import { Button, Col, Container, Nav, Row } from 'react-bootstrap'
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom'

export default function PriceBox2() {
    const [isBookmarked, setBookmarked] = useState(false);

    const toggleBookmark = () => {
        setBookmarked(!isBookmarked);
    };

    return (
        <>
            <Container className='position-absolute p-3 justify-content-between d-flex align-items-center'>
                <Button className='price-btn'>Mulai <span className='fw-semibold'>13jt / Bulan</span></Button>{' '}
                <Link className='fav-button-reverse' onClick={toggleBookmark}>
                    {isBookmarked ? <MdFavoriteBorder /> : <MdFavorite  />}
                </Link>
            </Container>
        </>
    )
}
