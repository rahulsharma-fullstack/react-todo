// eslint-disable-next-line no-unused-vars
import React from "react";
import FoodItems from "./Item";

const TodoItem1 = ({ handleOnClick, todoItem }) => {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";

  return (
    <>
      <div className="container">
        <FoodItems handleOnClick={handleOnClick} todoItem={todoItem}></FoodItems>

        <div className="row kg-row">
          <div className="col-6">
            <p>Go to College</p>
          </div>
          <div className="col-4">
            <p>4/10/2012</p>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
