import React from "react";

const TodoItem = ({ todo, toggleTodo, handleDelete }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          name=""
          id=""
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />
        {todo.title}
      </label>
      <button className="danger" onClick={(e) => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
