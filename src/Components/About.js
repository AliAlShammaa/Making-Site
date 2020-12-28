import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    fetchitems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchitems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  let itemsToRender;
  if (items) {
    itemsToRender = items.map((item) => (
      <h1 key={item.itemId}>
        <Link to={`/about/${item.itemId}`}> {item.item.name}</Link>
      </h1>
    ));
  }

  return (
    <div className="container-fluid bg-light">
      About Page
      {itemsToRender}
    </div>
  );
}

export default About;
