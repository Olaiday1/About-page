import { useState } from "react";
import "./Aboutme.css";
import about from "../assets/Image/about.png";

const Aboutme =() => {
    return (
        <>
        <div className="img-container">
        <img src={about} alt="" className="style"/>
        </div>
        </>
    )
};

export default Aboutme;