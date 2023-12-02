import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import "../assets/style/LandingBtn4.css";

export default function LandingBtn4() {
    return (
        <>
            <Button className="btn-cart mt-4">
                Beli Sekarang | <IoCartOutline />
            </Button>{" "}
        </>
    );
}
