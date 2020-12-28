import { React, useEffect } from "react";
import { ProductsBlock } from "./productsBlock";

function Product() {
  let i = 3;
  let j = 1;
  let k = 2;
  let currentOffset = 0;
  let oneBlock = <ProductsBlock id1={i} id2={j} id3={k}></ProductsBlock>;

  // useEffect(() => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 ===
  //     document.scrollingElement.scrollHeight
  //   ) {
  //     i += 3;
  //     j += 3;
  //     k += 3;
  //   }
  // }, []);

  return (
    <div className="container-fluid bg-light">
      Products Page
      {oneBlock}
      <button />
    </div>
  );
}

export default Product;
