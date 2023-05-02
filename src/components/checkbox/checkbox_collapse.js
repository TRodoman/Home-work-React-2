import React from "react";
import radio2 from "../../icon/radio2.svg"


import "./checkbox.css";

const CheckboxСollapse = () => {
    return (
  
      <div className="switch-collapse">
        <input type="radio" name="radio" id="id2" checked/>
        <label for="id2"><img src={radio2} alt="switch" ></img></label>
      </div>
    );
  };
  
  export default CheckboxСollapse;