// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Appliances = () => {
  // initialize search data state 
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on appliances category 
  const filterAppliances = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("appliances");
    });

    // update the state with the filtered data 
    setSearchData(newFilterData);
  };

  // effect hook to call filterAppliances function on component mount
  useEffect(() => {
    filterAppliances();
  }, []);

  // JSX for appliances component
  return (
    <div>
      {/* title for Appliances component */}
      <h1 className="appliances">Appliances</h1>

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

// export appliances component
export default Appliances;
