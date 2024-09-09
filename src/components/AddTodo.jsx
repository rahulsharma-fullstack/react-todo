/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AddTodo = ({ handleAddButton }) => {
  const [newItemName, setNewItemName] = useState("");
  const [newItemDate, setNewItemDate] = useState("");

  let handleOnChange = (e) =>{
    let newItem = e.target.value
    setNewItemName()
  }
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" onChange={handleOnChange}></input>
          </div>
          <div className="col-4">
            <input type="date"></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={() => handleAddButton()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
