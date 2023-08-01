import { useEffect, useState } from "react";
import "./index.css";
import Form from "./Form";
import Todos from "./Todos";
function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("Items");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(todos));
  }, [todos]);
  const toggleTodo = (id, completed) => {
    setTodos((curr) => {
      return curr.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const handleDelete = (id) => {
    setTodos((curr) => {
      return curr.filter((todo) => todo.id !== id);
    });
  };
  console.log(todos);
  return (
    <div className="container">
      <Form setTodos={setTodos} />
      <div className="items">
        <h2>Items</h2>
        <Todos
          todos={todos}
          handleDelete={handleDelete}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
