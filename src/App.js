import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Task 1",
        day: '30/06/2021',
        reminder:true
    },
    {
        id:2,
        text: "Task 2",
        day: '01/07/2021',
        reminder:true
    },
    {
      id:3,
      text: "Task 3",
      day: '01/07/2021',
      reminder:false
    },
  ])
  //Add Task
  const addTask = (task) => {
    //console.log('task:', task)
    const id = Math.floor(Math.random() * 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    //console.log('toggle', id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?(
        <Tasks tasks = {tasks}  
            onDelete={deleteTask} 
            onToggle={toggleReminder} />
      ) : (
        "No tasks to wshow"
      )}   
    </div>
  );
}

export default App;
