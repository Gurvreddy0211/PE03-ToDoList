import React from "react";
import "./App.css";

function ToDoList({ tasks, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
