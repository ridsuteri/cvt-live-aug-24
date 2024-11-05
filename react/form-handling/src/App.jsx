import { useState } from "react";
import "./App.css";

function App() {
  let [priority, setPriority] = useState(0);
  let [description, setDescription] = useState('');
  let [task, setTask] = useState([
    { id: 1234, priority: 2, description: "priority task 2" },
    { id: 2345, priority: 1, description: "priority task 1" },
  ])

  const handleSubmit = (e)=>{
    e.preventDefault();
    setTask([...task, {id: Date.now() ,priority, description}]);
    console.log(task)
  }

  return (
    <>
      <h2>Our TODO</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="number" min={0} placeholder="Priority" onChange={(e)=>{
            setPriority(parseInt(e.target.value))
          }} />
          <input type="text" placeholder="Description" onChange={(e)=>{
            setDescription(e.target.value)
          }} />
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

export default App;
