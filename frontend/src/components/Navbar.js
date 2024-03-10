// import necessary modules and external files
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "./NavItems";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import "./Navbar.css";

function Navbar() {
  // initialize dropdown state
  const [dropdown, setDropdown] = useState(false);

  // JSX for navbar component
  return (
    <>
      <nav className="navbar">
        {/* logo takes user back to home page when clicked */}
        <Link to="/" className="navbar-logo">
          RDP BAZAAR
        </Link>

        {/* unordered list for navigation items */}
        <ul className="nav-items">

          {/* map through each item in navItems array to designate navbar items */}
          {navItems.map((item) => {
            // if navigation item is shop, render the dropdown for it
            if (item.title === "Shop") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  {/* link for when shop is clicked */}
                  <Link to={item.path}>{item.title}</Link>

                  {/* render product category dropdown component when dropdown is true */}
                  {dropdown && <ProductCategoryDropdown />}
                </li>
              );
            }

            // display other navigation links
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

// export navbar component
export default Navbar;
