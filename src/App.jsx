/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
// import FoodItems from "./components/FoodItems";

function App() {
  const [todoItem, setTodoItem] = useState([
    "Dal",
    "Roti",
    "Butter Paneer",
    "Shahi Paneer",
    "Biscuit",
    "Water",
  ]);

  let handleAddButton = (newItemName, newItemDate) => {
    console.log(`item added ${newItemName} date: ${newItemDate}`);
    
  }

  let handleOnChange = (e) => {
    // console.log("hello");
  }
  let handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      let newItem = e.target.value
      let newItemList = [...todoItem, newItem]
      setTodoItem(newItemList)
      e.target.value = ""
    }
  }

  let handleOnClick = (e, items) => {
    console.log("item baught", {items});
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleAddButton={handleAddButton}/>
       
        <TodoItem1 handleOnClick = {handleOnClick} todoItem={todoItem}/>
      </center>
    </>
  );
}

export default App;
