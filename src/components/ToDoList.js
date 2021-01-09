import ToDoCreator from "./ToDoCreator";

function ToDoList({ todo, setTodo, toggledTodos }) {
  return todo.length > 0 ? (
    <ul>
      {toggledTodos.map((todoItem) => (
        <ToDoCreator
          key={todoItem.id}
          newtodo={todoItem.newtodo}
          todo={todo}
          setTodo={setTodo}
          todoItem={todoItem}
          toggledTodos={toggledTodos}
        />
      ))}
    </ul>
  ) : null;
}

export default ToDoList;
