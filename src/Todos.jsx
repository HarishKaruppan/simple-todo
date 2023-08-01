import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, handleDelete, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
