import React from "react";

import "./badge.css";

const Badge = ({icon,text}) => {
    return (
        <div className="badge">
            <a href="#" target="blank">
            <img src={icon} alt="icon"/>
            <div>{text}</div>
            </a>
        </div>
    )
}

export default Badge;