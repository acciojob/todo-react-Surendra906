import React from "react";

const Todo = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
