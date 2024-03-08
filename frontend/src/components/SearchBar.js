import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import data from "../products.json";

import "./SearchBar.css";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showProducts, setShowProducts] = useState(false); 
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(true); 

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setShowSearchSuggestions(true);
    setShowProducts(false);
  };

  const handleClose = () => {
    setSearchInput("");
    setSearchData([]);
    setSelectedItem(-1);
    setShowProducts(false);
    setShowSearchSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        const selectedProduct = searchData[selectedItem];
        setSearchInput(selectedProduct.name);
        setShowSearchSuggestions(false);
        setSearchData([selectedProduct]);
        setShowProducts(true);
      }
    } else {
      setSelectedItem(-1);
    }

    if (e.key === "Enter") {
      setShowProducts(true); 
      setShowSearchSuggestions(false); 
    }
  };

  useEffect(() => {
    if (searchInput !== "") {
      const newFilterData = data.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      });

      setSearchData(newFilterData);
    } else {
      setSearchData([]);
    }
  }, [searchInput]);

  return (
    <section className="search_section">
      <div className="search_input_div">
        <input
          type="text"
          className="search_input"
          placeholder="Search products..."
          autoComplete="off"
          onChange={handleChange}
          value={searchInput}
          onKeyDown={handleKeyDown}
        />

        <div className="search_icon">
          {searchInput === "" ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={handleClose} />
          )}
        </div>
      </div>

      {showSearchSuggestions && (
        <div className="search_suggestions">
          {searchData.slice(0, 10).map((product, index) => {
            return (
              <div
                key={index}
                className={
                  selectedItem === index
                    ? "search_suggestion_line active"
                    : "search_suggestion_line"
                }
                onClick={() => {
                  setSearchInput(product.name);
                  setShowSearchSuggestions(false);
                  setSearchData([product]);
                  setShowProducts(true);
                }}
              >
                {product.name}
              </div>
            );
          })}
        </div>
      )}

      {showProducts && (
        <div className="products_container">
          {searchData.length === 0 && <h2>No matching products found.</h2>}
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
      )}
    </section>
  );
};

export default SearchBar;
