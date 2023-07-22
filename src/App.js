import React, { useState } from "react";
import ToDolist from "./Components/ToDolist";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofitems = () => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrayElement, index) => {
        return index !== id;
      })
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listofitems}> + </button>

          {/*  /////////////////////////////  ADDING ITEMS CODE ///////////////////////////////  */}

          <ol>
            {items.map((itemvalue, index) => {
              return <ToDolist 
              key={index} 
              id={index}
              text={itemvalue}
              onselect={deleteItems}
               />;
            })}
          </ol>

        </div>
      </div>
    </>
  );
};

export default App;
