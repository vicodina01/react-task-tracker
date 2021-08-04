// const tasks = [
//     {
//         id: 1,
//         text: "Text 1",
//         day: '01/07/2021',
//         reminder:true
//     },
//     {
//         id:2,
//         text: "Text 2",
//         day: '01/07/2021',
//         reminder:false
//     }
// ]

import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

    
    return (
        <>
          {tasks.map((task) =>(
              <Task key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}></Task>
          ))}  
        </>
    )
}

export default Tasks
