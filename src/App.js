import { useState, useEffect } from "react";
import InnerFooter from "./components/InnerFooter";
import Footer from "./components/Footer";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import "./style.css";

function App() {
  // State Declarations
  // * inputform for the todo inputs
  // * todo is for every pushed todo into list
  const [inputform, setInputForm] = useState("");
  const [todo, setTodo] = useState([]);
  const [toggle, setToggle] = useState("All");
  const [toggledTodos, setToggledTodos] = useState([]);
  const [mainToggle, setMainToggle] = useState(true);

  const toggleAllHandler = () => {
    setMainToggle(!mainToggle);
  };
  console.log(mainToggle);

  // This function handles toggle changes by the
  // selection buttons All, Active and Completed
  const toggledHandler = () => {
    switch (toggle) {
      case "completed":
        setToggledTodos(todo.filter((item) => item.completed === true));
        break;
      case "active":
        setToggledTodos(todo.filter((item) => item.completed === false));
        break;
      default:
        setToggledTodos(todo);
        break;
    }
  };
  useEffect(() => {
    console.log("in effect:toggle:: ", toggle);
    toggledHandler();
  }, [todo, toggle]);

  return (
    <div className="App">
      <section className="todoapp">
        <Form
          todo={todo}
          setTodo={setTodo}
          setInputForm={setInputForm}
          inputform={inputform}
        />
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onClick={toggleAllHandler}
          ></input>
          <label htmlFor="toggle-all">Mark all as complete</label>
          {mainToggle ? (
            <ul className="todo-list">
              <ToDoList
                todo={todo}
                setTodo={setTodo}
                toggledTodos={toggledTodos}
              />
            </ul>
          ) : null}
        </section>

        <InnerFooter
          toggle={toggle}
          setToggle={setToggle}
          todo={todo}
          setTodo={setTodo}
          toggledTodos={toggledTodos}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
