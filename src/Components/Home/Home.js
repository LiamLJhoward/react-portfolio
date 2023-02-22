import React from "react";
import './Home.css';
import ProfilePicture from './Creator.svg'

export default function Home() {
    return (
    <div className="header-container">
        <img src={ProfilePicture} alt="Liam Howard" width={500} height={500}></img>
        <h1 className="header-title">Liam Howard </h1>
    </div>
    )
}