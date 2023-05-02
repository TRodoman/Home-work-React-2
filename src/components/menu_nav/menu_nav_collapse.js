import React from "react";
import Badge from "../badge/badge";
import dashboard from "../../icon/dashboard.svg";
import revenue from "../../icon/revenue.svg";
import notifications from "../../icon/notifications.svg";
import analytics from "../../icon/analytics.svg";
import inventory from "../../icon/inventory.svg";
import logout from "../../icon/logout.svg";
import CheckboxСollapse from "../checkbox/checkbox_collapse";


import "./menu_nav.css";

const MenuNavСollapse = ()=>{
 return (
    <>
    <ul className="nav-collapse">
        <li>
            <Badge icon={dashboard}></Badge>
        </li>
        <li>
          <Badge icon={revenue}></Badge>
        </li>
        <li>
          <Badge icon={notifications}></Badge>
        </li>
        <li>
          <Badge icon={analytics}></Badge>
        </li>
        <li>
          <Badge icon={inventory}></Badge>
        </li>
      </ul>

      <ul className="out-collapse">
        <li>
          <Badge icon={logout}></Badge>
        </li>
        <li>
          <CheckboxСollapse></CheckboxСollapse>
        </li>
    </ul>
    </>
 )
}

export default MenuNavСollapse;