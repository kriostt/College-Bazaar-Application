// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Clothing = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on clothing category
  const filterClothing = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("clothing");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterClothing function on component mount
  useEffect(() => {
    filterClothing();
  }, []);

  // JSX for clothing component
  return (
    <div>
      {/* title for clothing component */}
      <h1 className="clothing">Clothing</h1>

      <div className="products_container">
        {/* map through filtered product data and display each product */}
        {searchData.map((product) => {
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

// export clothing component
export default Clothing;
