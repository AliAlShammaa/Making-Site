import React from "react";

function Threecols() {
  return (
    <div className="container-fluid padding">
      <div className="row padding text-center">
        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fa fa-code fa-4x "></i>
          <h3> Me df</h3>
          <p> Hello I will be teaching uoui </p>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4">
          <i className="fa fa-eye"></i>
          <h3> Another</h3>
          <p> This changes like above </p>
        </div>
        <div className="col-xs-12  col-md-4">
          <i className="fa-eye"></i>
          <h3> quqau </h3>
          <p> This goes directly to oen col </p>
        </div>
      </div>
      {/* <hr className="my-4">  </hr> */}
    </div>
  );
}

export default Threecols;
