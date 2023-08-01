import React, { useState } from "react";

const Form = ({ setTodos }) => {
  const [newItem, setNewItem] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((curr) => {
      return [
        ...curr,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="newItem">New Item</label>
      <input
        type="text"
        id="newItem"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default Form;
