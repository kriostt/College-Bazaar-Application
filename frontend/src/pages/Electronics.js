// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Electronics = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on electronics category
  const filterElectronics = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("electronics");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterElectronics function on component mount
  useEffect(() => {
    filterElectronics();
  }, []);

  // JSX for electronics component
  return (
    <div>
      {/* title for electronics component */}
      <h1 className="electronics">Electronics</h1>

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
  );
};

// export electronics component
export default Electronics;
