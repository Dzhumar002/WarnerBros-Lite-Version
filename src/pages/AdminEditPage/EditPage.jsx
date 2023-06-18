import React from "react";
import "../AdminEditPage/EditPage.css";
import EditForm from "../../components/EditForm/EditForm";
import ProductDetails from "../ProductDetailsPages/ProductDetails";
const EditPage = () => {
  return (
    <div className="edit__page">
      <div className="editForm">
        <EditForm productDetails={ProductDetails} />
      </div>
    </div>
  );
};

export default EditPage;
