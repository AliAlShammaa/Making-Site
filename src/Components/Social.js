import React from "react";

function Social() {
  return (
    <div className="container-fluid padding">
      <div className="row padding text-white text-center">
        <div className="col-12">
          <h1 className="display-4">Connect</h1>
        </div>
        <hr></hr>
        <div className="col-12 social-padding">
          <a href="www.facebook.com">
            <i className="fa fa-linkedin-square fa-4x mr-2" />
          </a>
          <a href="www.facebook.com">
            <i
              className="fa fa-envelope-square fa-4x ml-2"
              style={{
                color: "#8d3a43",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
