import { useState } from "react";
import "./App.css";

function App2() {
  let [newTask, setNewTask] = useState({})
  let [task, setTask] = useState([
    { id: 1234, priority: 2, description: "priority task 2" },
    { id: 2345, priority: 1, description: "priority task 1" },
  ])

  const handleChange = (key, value)=>{
   setNewTask({
        ...newTask,
        [key]: value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // if(newTask.priority !=null && newTask.description.trim() != ""){
      setTask([...task, {id: Date.now(), ...newTask}]);
    // }
  }

  return (
    <>
      <h2>Our TODO</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input name="priority" type="number" min={0} placeholder="Priority" onChange={(e)=>{ handleChange(e.target.name, parseInt(e.target.value)) }} />
          <input name="description" type="text" placeholder="Description" onChange={(e)=>{ handleChange(e.target.name, e.target.value) }} />
          <button>Add Task</button>
        </form>
      </div>

      <hr />
      <div>
        {
        task
          .sort((a, b) => {
            return a.priority - b.priority;
          })
          .map((task) => (
            <li key={task.id}>
              {task.priority} - {task.description}
            </li>
          ))}
      </div>
    </>
  );
}

export default App2;
