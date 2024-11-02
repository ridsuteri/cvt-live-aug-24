import React from "react";
import { useState } from "react";

const Product = (props) => {
  const [addToCart, setAddToCart] = useState(false);
  return (
    <div>
      <h4>{props.product.name}</h4>
      <h5>{props.product.price}</h5>
      {addToCart ? (
        <button
          onClick={() => {
            setAddToCart(!addToCart);
          }}
        >
          Added to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setAddToCart(!addToCart);
          }}
        >
          Add to Cart
        </button>
      )}

      <hr />
    </div>
  );
};

export default Product;
