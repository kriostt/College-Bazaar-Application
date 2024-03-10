// import necessary modules and external files
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import data from "../products.json";
import "./SearchBar.css";

const SearchBar = () => {
  // initializations
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const [showProducts, setShowProducts] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(true);

  // event handler for search bar input change
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setShowSearchSuggestions(true);
    setShowProducts(false);
    navigate("/");
  };

  // event handler for closing the search bar
  const handleClose = () => {
    setSearchInput("");
    setSearchData([]);
    setSelectedItem(-1);
    setShowProducts(false);
    setShowSearchSuggestions(true);
  };

  // event handler for keyboard inputs
  const handleKeyDown = (e) => {
    if (selectedItem < searchData.length) {
      // move selection up the list when arrow up key is pressed
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      // move selection down the list when arrow down key is pressed
      } else if (
        e.key === "ArrowDown" &&
        selectedItem < searchData.length - 1
      ) {
        setSelectedItem((prev) => prev + 1);
      // handle selection when enter key is pressed
      } else if (e.key === "Enter" && selectedItem >= 0) {
        const selectedProduct = searchData[selectedItem];
        setSearchInput(selectedProduct.name);
        setShowSearchSuggestions(false);
        setSearchData([selectedProduct]);
        setShowProducts(true);
        navigate("/");
      }
      // reset selection 
    } else {
      setSelectedItem(-1);
    }

    // display products and hide search suggestions when enter key is pressed
    if (e.key === "Enter") {
      setShowProducts(true);
      setShowSearchSuggestions(false);
      navigate("/");
    }
  };

  // effect hook for updating search results
  useEffect(() => {
    if (searchInput !== "") {
      // filter products based on search bar input (check if it matches an existing product name)
      const newFilterData = data.filter((product) => {
        return product.name.toLowerCase().includes(searchInput.toLowerCase());
      });

      // update search data state with filtered products
      setSearchData(newFilterData);
      // reset search data state if search bar input is empty
    } else {
      setSearchData([]);
    }
  }, [searchInput]);

  // JSX for search bar component
  return (
    <section className="search_section">
      <div className="search_input_div">
        {/* search bar input box */}
        <input
          type="text"
          className="search_input"
          placeholder="Search products..."
          autoComplete="off"
          onChange={handleChange}
          value={searchInput}
          onKeyDown={handleKeyDown}
        />

        {/* search or close icon based on user input in search bar */}
        <div className="search_icon">
          {searchInput === "" ? (
            <SearchIcon />
          ) : (
            <CloseIcon onClick={handleClose} />
          )}
        </div>
      </div>

      {/* display search suggestions based on user input */}
      {showSearchSuggestions && (
        <div className="search_suggestions">

          {/* map through search data to display suggestions */}
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

      {/* display products based on user input */}
      {showProducts && (
        <div className="products_container">
          {/* display message if no matching products to user input found */}
          {searchData.length === 0 && <h2>No matching products found.</h2>}

          {/* map through search data to display matching products */}
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

// export search bar component
export default SearchBar;
