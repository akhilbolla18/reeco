import React from "react";
import "./index.css"; 

const MissingProduct = (props) => {
    const {id, handleModal,name,handleMiss } = props;

    const handleMissingProduct = (isMissingUrgent) => {
        if (isMissingUrgent) {
            handleMiss(id,"Missing Urgent")
            handleModal(false);
          
        } else {
            handleMiss(id,"Missing")  
            handleModal(false);
        }
      };

  return (
    <div className="missing-product-container">
      <span className="close-icon" onClick={() => handleModal(false)}>
        X
      </span>
      <div>
        <h3>Missing Product</h3>
      </div>
      <div>Is `{name}` urgent?</div>
      <div className="right-btn-container">
        <div className="button" onClick={() => handleMissingProduct(false)}>
          No
        </div>
        <div className="button" onClick={() => handleMissingProduct(true)}>
          Yes
        </div>
      </div>
    </div>
  );
};

export default MissingProduct;
