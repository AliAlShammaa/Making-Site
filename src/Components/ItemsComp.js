import React, { useState, useEffect } from "react";

function ItemComp(props) {
  useEffect(() => {
    fetchItemData();
  }, []);

  const [item, setItem] = useState({
    data: { item: { name: "", images: { icon: "" } } },
  });

  const fetchItemData = async () => {
    const itemdata = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${props.match.params.id}`
    );
    const data = await itemdata.json();
    console.log(data);
    setItem(data);
  };

  return (
    <div className="container-fluid bg-light">
      <h1>{item.data.item.name}</h1>
      <figure>
        <img src={item.data.item.images.icon} />
      </figure>
    </div>
  );
}

export default ItemComp;
