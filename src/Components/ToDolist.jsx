import React from "react";

const ToDolist = (props) => {

  return (
    <>
      <div className="todo_style">
        <i className="fa-regular fa-circle-xmark" 
        onClick={() => {
            props.onselect(props.id);
        }} />
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDolist;
