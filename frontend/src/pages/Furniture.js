// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Furniture = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on furniture category
  const filterFurniture = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("furniture");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterFurniture function on component mount
  useEffect(() => {
    filterFurniture();
  }, []);

  // JSX for furniture component
  return (
    <div>
      {/* title for furniture component */}
      <h1 className="furniture">Furniture</h1>

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

// export furniture component
export default Furniture;
