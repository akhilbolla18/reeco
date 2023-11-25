import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="app-name-and-nav-btn-container">
        <span className="app-name">Reeco</span>
        <div className="nav-btn-container">
          <span className="nav-btn">Store</span>
          <span className="nav-btn">Orders</span>
          <span className="nav-btn">Analytics</span>
        </div>
      </div>
      <div className="cart-and-user-name-container">
        <span className="cart-icon-container">
        <ShoppingCartIcon fontSize="small" />
        </span>
        <div className="user-name">
          Hello, James{" "}
          <span>
          <KeyboardArrowDownIcon fontSize="small" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
