import React from "react";

function Googa() {
  return (
    <div className="container-fluid ">
      <button className="fun" data-toggle="collapse" data-target="#emoji">
        Click for options
      </button>

      <div id="emoji" className="collapse container-fluid padding">
        <div className="row text-center">
          <div className="col-sm-6 col-md-3">
            <img className="gif" src="../images/panda"></img>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="gif" src="img/gif/panda"></img>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="gif" src="img/gif/panda"></img>
          </div>
          <div className="col-sm-6 col-md-3">
            <img className="gif" src="img/gif/panda"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Googa;
