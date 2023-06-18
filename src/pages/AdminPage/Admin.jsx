import React from "react";
import "../AdminPage/Admin.css";
import AddForm from "../../components/AddForm/AddForm";
import EditButton from "../../components/editButton/EditButton";
const Admin = () => {
  return (
    <div className="admin__page">
      <div className="addForm">
        <AddForm />
      </div>
    </div>
  );
};

export default Admin;
