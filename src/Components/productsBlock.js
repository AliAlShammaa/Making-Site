import React from "react";
import { ProductCard } from "./productCard";

export function ProductsBlock(props) {
  let block = (
    <div className="container-fluid padding">
      <div className="row padding">
        <div className="col-md-4 mt-1 mb-1">
          <ProductCard id={props.id1}> </ProductCard>
        </div>
        <div className="col-md-4 mt-1 mb-1">
          <ProductCard id={props.id2}> </ProductCard>
        </div>
        <div className="col-md-4 mt-1 mb-1">
          <ProductCard id={props.id3}> </ProductCard>
        </div>
      </div>
    </div>
  );

  return <div>{block}</div>;
}

// export default ProductsBlock;
