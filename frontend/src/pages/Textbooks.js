// import necessary modules and external files
import React, { useEffect, useState } from "react";
import data from "../products.json";

const Textbooks = () => {
  // initialize search data state
  const [searchData, setSearchData] = useState([]);

  // function to filter products based on textbooks category
  const filterTextbooks = () => {
    const newFilterData = data.filter((product) => {
      return product.category.toLowerCase().includes("textbooks");
    });

    // update the state with the filtered data
    setSearchData(newFilterData);
  };

  // effect hook to call filterTextbooks function on component mount
  useEffect(() => {
    filterTextbooks();
  }, []);

  // JSX for textbooks component
  return (
    <div>
      {/* title for textbooks component */}
      <h1 className="textbooks">Textbooks</h1>

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

// export textbooks component
export default Textbooks;
