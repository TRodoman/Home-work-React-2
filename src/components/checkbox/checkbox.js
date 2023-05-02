import React from "react";
import radio from "../../icon/radio.svg";

import "./checkbox.css";

const Checkbox = () => {
  return (

    <div className="switch">
      <input type="radio" name="radio" id="id1" checked/>
      <label for="id1"><img src={radio} alt="switch" ></img></label>
    </div>
  );
};

export default Checkbox;
