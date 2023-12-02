import React from 'react'
import '../assets/style/PriceBox.css'
import { Button, Nav } from 'react-bootstrap'


export default function PriceBox() {
  return (
    <>
      <Button className='position-absolute mt-3 ms-3 price-btn'>Mulai <span className='fw-semibold'>13jt / Bulan</span></Button>{' '}
    </>
  )
}
