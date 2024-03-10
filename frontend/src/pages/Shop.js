// import necessary modules and external files
import React, { useState } from "react";
import data from "../products.json";
import Filters from "../components/Filters.js";

const Shop = () => {
  // initialize product state
  const [products, setProducts] = useState(data);

  // JSX for shop component
  return (
    <div>
      {/* title for shop component */}
      <h1 className="shop">Products</h1>

      {/* add filters component with product state */}
      <Filters products={products} setProducts={setProducts} />

      <div className="products_container">
        {/* map through product data and display each product */}
        {products.map((product) => {
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
