import React from "react";
import logo_AF from "../../icon/logo_AF.svg";
import chevron2 from "../../icon/chevron2.svg";

import "./logo.css";

const LogoСollapse = ()=> {
    return (
        <div className="logo">
        <img src={logo_AF} alt="logo"></img>
        <img src={chevron2} alt="chevron" className="chevron2"></img>
        </div>
    )
    
}

export default LogoСollapse;