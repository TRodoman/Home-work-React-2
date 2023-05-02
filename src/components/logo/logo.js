import React from "react";
import logo_AF from "../../icon/logo_AF.svg";
import chevron1 from "../../icon/chevron1.svg";

import "./logo.css";

const Logo = ()=>{
    return (
        
        <div className="logo">
        <img src={logo_AF} alt="logo"></img>
        <div>
        <h3>AnimatedFred</h3>
        <a href="mailto:animated@demo.com">animated@demo.com</a>
        </div>
        <img src={chevron1} alt="chevron" className="chevron1"></img>
        </div>
    )
}

export default Logo;