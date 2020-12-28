import React from "react";

function Welcome() {
  return (
    <div className="container-fluid padding">
      {/* padding adds padding between the containers and the rows. */}
      <div className="row welcome text-white text-center">
        <div className="col-12">
          <h1 className="display-4">Welcome to my site</h1>
        </div>
        <hr></hr>
        <div className="col-12">
          <p className="lead"> Hello this is my BS4 site</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
