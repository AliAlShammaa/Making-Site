import React from "react";
import Carousel from "./Carousel";
import Jumbotron from "./Jumbotron";

// function myFunction(sticky, navbar) {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function Intro() {
  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;
  // window.onscroll = function () {
  //   myFunction(sticky, navbar);
  // };
  return (
    <div>
      <Carousel />
      <Jumbotron />
    </div>
  );
}

export default Intro;
