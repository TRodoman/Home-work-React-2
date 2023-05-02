import React from "react";
import Badge from "../badge/badge";
import dashboard from "../../icon/dashboard.svg";
import revenue from "../../icon/revenue.svg";
import notifications from "../../icon/notifications.svg";
import analytics from "../../icon/analytics.svg";
import inventory from "../../icon/inventory.svg";
import logout from "../../icon/logout.svg";
import light_mode from "../../icon/light_mode.svg";
import Checkbox from "../checkbox/checkbox";


import "./menu_nav.css";

const MenuNav = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <Badge icon={dashboard} text={"Dashboard"}></Badge>
        </li>
        <li>
          <Badge icon={revenue} text={"Revenue"}></Badge>
        </li>
        <li>
          <Badge icon={notifications} text={"Notifications"}></Badge>
        </li>
        <li>
          <Badge icon={analytics} text={"Analytics"}></Badge>
        </li>
        <li>
          <Badge icon={inventory} text={"Inventory"}></Badge>
        </li>
      </ul>

      <ul className="out">
        <li>
          <Badge icon={logout} text={"Logout"}></Badge>
        </li>
        <li>
          <Badge icon={light_mode} text={"Light mode"}></Badge>
          <Checkbox></Checkbox>
        </li>
      </ul>
    </>
  );
};

export default MenuNav;
