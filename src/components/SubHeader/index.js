import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css";

const SubHeader = () => {
  return (
    <div className="order-heading-container">
      <div className="order-heading-text">
        Order <ArrowForwardIosIcon className="arrow-icon" />{" "}
        <span className="order-id">Order 32457ABC</span>
      </div>
      <div className="order-btn-title-container">
        <h1 className="heading">Order 32457ABC</h1>
        <div className="order-btn-container">
          <span className="back-button">Back</span>
          <span className="approve-order-btn">Approve Order</span>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
