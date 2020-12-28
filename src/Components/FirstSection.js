import React from "react";
import Cards from "./cards";
import Googa from "./googa";
import Social from "./Social";
import Threecols from "./threecols";
import Welcome from "./Welcome";

function FirstSection() {
  return (
    <div className="container-fluid">
      <Welcome></Welcome>
      <Threecols />
      <Googa></Googa>
      <Cards></Cards>
      <Social />
    </div>
  );
}

export default FirstSection;
