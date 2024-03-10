// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Vehicles = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on vehicles category
  const filterVehicles = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("vehicles");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterVehicles function on component mount
  useEffect(() => {
    filterVehicles();
  }, []);

  // JSX for vehicles component
  return (
    <div>
      {/* title for vehicles component */}
      <h1 className="vehicles">Vehicles</h1>

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

// export vehicles component
export default Vehicles;
