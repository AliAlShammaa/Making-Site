import React from "react";
import sky from "../images/sky.jpg";
import skies from "../images/skies.jpg";
import jag from "../images/jag.png";

function Carousel() {
  return (
    <div id="slides" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ul>

      {/* Carousel-items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sky} />
          <div className="carousel-caption">
            <h1 className="display-2  ">Slide 1</h1>
            <h3 className="mb-2">Complete website </h3>
            <button
              type="button"
              className="mb-5 mt-1 mr-1 text-white btn btn-outline-light btn-lg"
            >
              Clicke Me
            </button>
            <button
              type="button"
              className="mb-5 mt-1 ml-1 text-dark btn btn-primary btn-lg"
            >
              Clicke Me
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={sky} />
          <div className="carousel-caption">
            <h1 className="display-2  ">Slide 2</h1>
            <h3>Complete website </h3>
            <button
              type="button"
              className="mb-5 text-white btn btn-outline-light btn-lg"
            >
              Clicke Me
            </button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={skies} />
          <div className="carousel-caption">
            <h1 className="display-2  ">Slide 3</h1>
            <h3>Complete website </h3>
            <button
              type="button"
              className="mb-5 text-white btn btn-outline-light btn-lg"
            >
              Clicke Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
