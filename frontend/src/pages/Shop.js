// import necessary modules and external files
import React from "react";
import data from "../products.json";

const Shop = () => {
  // JSX for shop component
  return (
    <div>
      {/* title for shop component */}
      <h1 className="shop">Products</h1>

      <div className="products_container">
        {/* map through product data and display each product */}
        {data.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
