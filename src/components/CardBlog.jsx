import React from 'react'
import '../assets/style/CardHouse.css'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Button, Card, CardGroup, Nav } from 'react-bootstrap'
import PriceBox from './PriceBox';
import { Link } from 'react-router-dom';

export default function CardBlog() {
    return (
        <>
            <Card style={{ width: '19rem' }} className='position-relative card-house'>
                <Card.Img variant="top" src="/images/ex3.png"/>
                <Card.Body>
                    <Card.Text className='fw'>14/11/2023</Card.Text>
                    <Card.Title className='fw-bold fs-5'>
                        <Link to="/detailblog">Tips Cari Rumah Dengan Nyaman</Link>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}
