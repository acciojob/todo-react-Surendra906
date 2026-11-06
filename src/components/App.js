
import React,{useState} from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const[task,setTask]=useState("");
  const [tasks,setTasks]=useState([]);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };
  return (
    <div id="main">
        <h2>To-Do List</h2>
      <div>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task" 
        />
        <button onClick={handleAddTask}>Add Todo</button>
      </div>
      <Todo tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;
