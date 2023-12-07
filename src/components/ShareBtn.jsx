import React, { useState } from 'react'
import { Col, Nav, Row } from 'react-bootstrap';
import { MdOutlineShare } from "react-icons/md";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../assets/style/ShareBtn.css'

export default function ShareBtn() {
  const [isBookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!isBookmarked);
  };
  return (
    <>
      <Row className="gap-3 d-flex">
        <Col className='text-end'>
          <Link className='fav-button'>
            <MdOutlineShare />
          </Link>
          <Link className='ms-2 fav-button' onClick={toggleBookmark}>
            {isBookmarked ? <MdFavorite style={{ fill: 'red' }} /> : <MdFavoriteBorder />}
          </Link>
        </Col>
      </Row>
    </>
  )
}
