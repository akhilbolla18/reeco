import React from "react";
import ProductList from "../ProductList";
import PrintIcon from "@mui/icons-material/Print";
import "./index.css"; // Import the CSS file

const ProductsListContainer = () => {
  return (
    <div className="ListContainer">
      <div className="TableContainer">
        <div className="InputBtnContainer">
          <form className="InputContainer">
            <input className="SearchInput" placeholder="Search.." />
            <button className="SearchIconContainer">
              <span className="Search"></span>
            </button>
          </form>
          <div className="BtnsContainer">
            <div className="NewItemBtn">Add Item</div>
            <PrintIcon />
          </div>
        </div>
        <ProductList/>
      </div>
    </div>
  );
};

export default ProductsListContainer;
