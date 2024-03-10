// import necessary modules and external files
import React, { useState } from "react";
import { shopDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./ProductCategoryDropdown.css";

const ProductCategoryDropdown = () => {
  // initialize dropdown state
  const [dropdown, setDropdown] = useState(false);

  // JSX for product category dropdown component
  return (
    <>
    {/* unordered list for product category dropdown */}
      <ul
        className={dropdown ? "shop-submenu clicked" : "shop-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {/* map through each item in shopDropdown array to designate dropdown items */}
        {shopDropdown.map((item) => {
          return (
            <li key={item.id}>
              {/* link for when dropdown item is clicked */}
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// export product category dropdown component
export default ProductCategoryDropdown;
