import React from "react";
import skies from "../images/skies.jpg";

function cards() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  return (
    <div>
      <div className="container-fluid padding">
        <hr className="light" />
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4 text-light">Events</h1>
          </div>
          <hr></hr>
          {/* <ColoredLine color="red" /> */}
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-4 mt-1 mb-1">
            <div className="card bg-dark border border-light">
              <img className="card-img-top" src={skies}></img>
              <div className="card-body ">
                <h1 className="card-title text-light"> fsdf</h1>
                <p className="card-text text-light"> This is the card body</p>
                <button>See </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-1 mb-1">
              <img className="card-img-top" src={skies}></img>
              <div className="card-body">
                <h1> fsdf</h1>
                <button>See </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mt-1 mb-1">
              <img className="card-img-top" src={skies}></img>
              <div className="card-body">
                <h1> fsdf</h1>
                <button>See </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;
