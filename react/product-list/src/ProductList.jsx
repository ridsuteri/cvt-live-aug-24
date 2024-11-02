import React from "react";
import Product from "./Product";
import products from "./mockData/products.json";

const ProductList = () => {
  //   let products = [
  //     { name: "product1", price: 1000 },
  //     { name: "product2", price: 2000 },
  //   ];
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product product={product}  />
      ))}
    </div>
  );
};

export default ProductList;
