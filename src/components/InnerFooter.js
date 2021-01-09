import React from "react";

function InnerFooter({ todo, setToggle, setTodo, toggledTodos }) {
  const listTodos = (val) => {
    setToggle(val);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todo.length}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a target="all" onClick={() => listTodos("all")}>
            All
          </a>
        </li>
        <li>
          <a target="active" onClick={() => listTodos("active")}>
            Active
          </a>
        </li>
        <li>
          <a target="completed" onClick={() => listTodos("completed")}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default InnerFooter;
