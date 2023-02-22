import React from "react";
import './Home.css';
import ProfilePicture from './Creator.svg';
import Mail from './mail.svg';
import LinkedIn from './link.svg';
import GitHub from './github.svg';


export default function Home() {
    return (
   <>
    <div className="header-container">
            <img className="image" src={ProfilePicture} alt="Liam Howard" width={350} height={350}></img>
            <h1 className="header-title">Liam Howard </h1>
    </div>
    <ul class="nav-links justify-content-end">
        <li class="nav-item-link">
          <a class="nav-link-link" href="https://www.github.com/LiamLJhoward">github</a>
        </li>
        <li class="nav-item-link">
          <a class="nav-link-link" href="mailto:contact@liamhoward.io">email</a>
        </li>
        <li class="nav-item-link">
          <a class="nav-link-link" href="https://www.linkedin.com/in/liam-howard-53644a25a/">linkedin</a>
        </li>
      </ul>


   </>
    )
}