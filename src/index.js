import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation/navigation";


ReactDOM.render(<Navigation></Navigation>,document.querySelector(".container"));



const navBox = document.querySelector(".nav-box");
const navBoxHover = document.querySelector(".nav-box-collapse");
const chevron1 = document.querySelector(".chevron1");
const chevron2 = document.querySelector(".chevron2");

navBoxHover.addEventListener("click", (e) => {
    navBox.hidden = false;
    
    if (navBox.hidden === false) {
        navBoxHover.hidden = true;
    }
});

navBox.addEventListener("click", (e) => {
    navBox.hidden = true
    if (navBox.hidden === true) {
        navBoxHover.hidden = false;
    }
});

chevron2.addEventListener("click", (e) => {
    navBox.hidden = false;
    
    if (navBox.hidden === false) {
        navBoxHover.hidden = true;
    }
});

chevron1.addEventListener("click", (e) => {
    navBox.hidden = true
    if (navBox.hidden === true) {
        navBoxHover.hidden = false;
    }
});


