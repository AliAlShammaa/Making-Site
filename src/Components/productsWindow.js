import React from "react";
import Loader from "./Loader";
import { useAxios } from "../Hooks/useAxios";

function ProductWindow(props) {
  const url1 = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${props.id}`;
  let product = useAxios(url1);

  let content = null;
  if (product.error) {
    content = <div>There was an Error </div>;
  }
  if (product.loading) {
    content = (
      <div>
        <p>...loading</p>
        <i class="fa fa-spinner fa-spin fa-4x"> </i>
        <Loader />
      </div>
    );
  }

  if (product.data) {
    content = (
      <div>
        <img
          className="card-img-top"
          src={product.data.images[1].imageUrl}
          alt={product.data.name}
        />
        <div className="card-body ">
          <h1 className="card-title text-light font-bold text-xl mb-3">
            {" "}
            {product.data.name}
          </h1>
          <p className="card-text text-light font-bold text-xl mb-3">
            {" "}
            price : ${product.data.price}
            <div>{product.data.description}</div>
          </p>
          <button>CheckOut </button>
        </div>
      </div>
    );
  }

  return (
    <div className="popup">
      <div className="popup\_inner">
        <div>{product}</div>
        <button onClick="Close()">close </button>
      </div>
    </div>
  );
}

function Close() {}

export default ProductWindow;
