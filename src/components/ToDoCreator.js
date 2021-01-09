import React from "react";

function ToDoCreator({ newtodo, todoItem, todo, setTodo }) {
  const completeHandler = () => {
    setTodo(
      todo.map((item) => {
        if (item.id === todoItem.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const destroyHandler = () => {
    setTodo(todo.filter((item) => item.id !== todoItem.id));
  };
  return (
    <li className={` ${todoItem.completed ? "completed" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={completeHandler}
        ></input>
        <label>{newtodo}</label>
        <button className="destroy" onClick={destroyHandler}></button>
      </div>
    </li>
  );
}

export default ToDoCreator;
