// import necessary modules
import React, { useEffect, useState } from "react";

const Filters = ({ products, setProducts }) => {
  // initialize selected sorting option state
  const [selectedSort, setSelectedSort] = useState("");
    
  // event handler for sorting option change
  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
  };

  // function to apply sorting based on selected option
  const sort = () => {
    // create copy of products array
    let filteredData = [...products];

    // sort products in ascending price if selected option is 1
    if (selectedSort === "1") {
      filteredData.sort((a, b) => a.price - b.price);
      // sort products in descending price if selected option is 2
    } else if (selectedSort === "2") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    // update product state with sorted data
    setProducts(filteredData);
  };

  // useEffect hook to trigger sorting when selectedSort state changes
  useEffect(() => {
    sort();
  }, [selectedSort]);

  // JSX for sorting component
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          {/* Label for the sorting dropdown */}
          <label className="form-label">Sort by:</label>

          {/* Dropdown to select sorting option */}
          <select
            className="form-select"
            value={selectedSort}
            onChange={handleSortChange}
          >
            <option value="" disabled>
              Sort by
            </option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// export filters component
export default Filters;
