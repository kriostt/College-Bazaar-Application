// import necessary modules and external files
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";

import Appliances from "./pages/Appliances";
import Clothing from "./pages/Clothing";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Miscellaneous from "./pages/Miscellaneous";
import Textbooks from "./pages/Textbooks";
import Vehicles from "./pages/Vehicles";

function App() {
  // JSX for app component
  return (
    <Router>
      {/* display navigation bar and search bar components */}
      <Navbar />
      <SearchBar />

      {/* define routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>

        <Route path="/appliances" element={<Appliances />}></Route>
        <Route path="/clothing" element={<Clothing />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/furniture" element={<Furniture />}></Route>
        <Route path="/miscellaneous" element={<Miscellaneous />}></Route>
        <Route path="/textbooks" element={<Textbooks />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
      </Routes>
    </Router>
  );
}

// export app component
export default App;
