// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Miscellaneous = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on miscellaneous category
  const filterMiscellaneous = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("miscellaneous");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterMiscellaneous function on component mount
  useEffect(() => {
    filterMiscellaneous();
  }, []);

  // JSX for miscellaneous component
  return (
    <div>
      {/* title for miscellaneous component */}
      <h1 className="miscellaneous">Miscellaneous</h1>

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

// export miscellaneous component
export default Miscellaneous;
