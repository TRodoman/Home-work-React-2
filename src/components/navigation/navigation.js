import React from "react";
import Logo from "../logo/logo";
import Search from "../search/search";
import MenuNav from "../menu_nav/menu_nav";
import LogoСollapse from "../logo/logo_collapse";
import SearchСollapse from "../search/search_collapse";
import MenuNavСollapse from "../menu_nav/menu_nav_collapse";

import "./navigation.css";

export default function Navigation() {
  return (
    <>
      <div className="nav-box" hidden>
        <Logo></Logo>
        <Search></Search>
        <MenuNav></MenuNav>
      </div>

      <div className="nav-box-collapse">
        <LogoСollapse></LogoСollapse>
        <SearchСollapse></SearchСollapse>
        <MenuNavСollapse></MenuNavСollapse>
      </div>
    </>
  );
}
