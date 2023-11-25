import React from "react";
import "./index.css";

const OrderDetails = () => {
  return (
    <div className="order-details-container">
      <div className="item">
        <div className="item-header">Supplier</div>
        <div className="item-details">East coast fruits & vegetables</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Shipping Date</div>
        <div className="item-details">Thu, Feb 10</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Total</div>
        <div className="item-details">$ 15,028.3 </div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Category</div>
        <div>
          <img src="https://res.cloudinary.com/dumbnbfci/image/upload/v1700804454/category_bhcqhy.png" alt="category" className="category-image" />
        </div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Department</div>
        <div className="item-details">300-444-678</div>
      </div>
      <div className="separator"></div>
      <div className="item">
        <div className="item-header">Status</div>
        <div className="item-details">Awaiting your approval</div>
      </div>
    </div>
  );
};

export default OrderDetails;
