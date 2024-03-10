// import necessary modules and external files
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // JSX for navbar component
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* logo takes user back to home page when clicked */}
          <Link to="/" className="navbar-brand">
            RDP BAZAAR
          </Link>

          {/* button collapse behaviour of navbar on smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* unordered list for navigation items */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page" exact>
                  Home
                </Link>
              </li>

              {/* product category dropdown */}
              <li className="nav-item dropdown">
                <Link
                  to="/shop"
                  className="nav-link dropdown-toggle"
                  role="button"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/appliances" className="dropdown-item">Appliances</Link></li>
                  <li><Link to="/clothing" className="dropdown-item">Clothing</Link></li>
                  <li><Link to="/electronics" className="dropdown-item">Electronics</Link></li>
                  <li><Link to="/Furniture" className="dropdown-item">Furniture</Link></li>
                  <li><Link to="/Miscellaneous" className="dropdown-item">Miscellaneous</Link></li>
                  <li><Link to="/Textbooks" className="dropdown-item">Textbooks</Link></li>
                  <li><Link to="/Vehicles" className="dropdown-item">Vehicles</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

// export navbar component
export default Navbar;
