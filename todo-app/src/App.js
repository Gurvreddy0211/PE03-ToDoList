import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks

    setTaskList([...taskList, newTask]); // Update task list
    setNewTask(""); // Clear input field
  };

  // Function to remove a task by index
  const handleDeleteTask = (taskIndex) => {
    setTaskList(taskList.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ToDoList tasks={taskList} deleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
