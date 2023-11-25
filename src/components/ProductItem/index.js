import React, { useState } from "react";
import "./index.css"; // Import the corresponding CSS file
import { Modal } from "@mui/material";

import MissingProduct from "../MissingProduct";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";


const ProductItem = (props) => {
  const { item,onChangeStatusApp,onChangeStatusMiss } = props;

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [missingProductModal, setMissingProductModal] = useState(false);

  const handleEditModal = (value) => {
    setEditModalOpen(value);
  };

  const handleMissingProductModal = (value) => {
    setMissingProductModal(value);
  };


  const handleApprove = () => {
    onChangeStatusApp(item.id)

  };

  const handleMiss = (id,missStatus) => {
    onChangeStatusMiss(id,missStatus)

  };

  let ApprovedOrMissClassName;

  switch (item.status) {
    case "Approved":
      ApprovedOrMissClassName = "ItemStatusApproved"
      break;
  
    case "Missing Urgent":
      ApprovedOrMissClassName = "ItemStatusMissingUrgent"
      break;

      case "Missing":
        ApprovedOrMissClassName = "ItemStatusMissing"
        break;
    default:
     ApprovedOrMissClassName = ""
  }


  const RightIconClassName  = item.status === "Approved" ? ("RightIconApproved"):("RightIcon")


  return (
    <tr key={item.id}>
      <td>
        <img className="ItemImage" src={item.img} alt="avocado" />
        {item.name}
      </td>
      <td>{item.brand}</td>
      <td>${item.price} / 6+1LB</td>
      <td>
        <span className="ItemQty">{item.quantity}</span> *6+1LB
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <span className={ApprovedOrMissClassName} status={item.status}>
          {item.status}
        </span>
      </td>
      <td>
        <div className="IconContainer" onClick={() => handleApprove()}>
          <CheckIcon className={RightIconClassName} status={item.status}/>
          </div>
        <div className="IconContainer" onClick={() => handleMissingProductModal(true)} >
          <ClearIcon className="CancelIcon" status={item.status}/>
        </div>
        <div className="EditText" >
          Edit
        </div>
      </td>

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={missingProductModal}
        onClose={() => handleEditModal(false)}
      > 

      <MissingProduct id={item.id} handleModal={handleMissingProductModal} name = {item.name} handleMiss = {handleMiss}/>

      </Modal>
    </tr>
  );
};

export default ProductItem;
