import React from "react";

function Form({ todo, setTodo, inputform, setInputForm }) {
  const submitHandler = (e) => {
    e.preventDefault();
    inputform &&
      setTodo([
        ...todo,
        {
          newtodo: inputform,
          completed: false,
          id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
        },
      ]);

    setInputForm("");
  };
  const inputValueHandler = (e) => {
    setInputForm(e.target.value);
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form inputform={inputform} onSubmit={submitHandler}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={inputValueHandler}
          value={inputform}
        ></input>
      </form>
    </header>
  );
}

export default Form;
