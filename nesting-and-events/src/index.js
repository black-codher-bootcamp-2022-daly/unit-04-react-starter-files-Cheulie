
          
            // <Task id={taskList[0].id} title={taskList[0].title} isComplete={true}/>
            // <Task id={taskList[1].id} title={taskList[1].title} isComplete={false}/>
            // <Task id={taskList[2].id} title={taskList[2].title} isComplete={false}/>
            // <Task id={taskList[3].id} title={taskList[3].title} isComplete={false}/>
            // <Task id={taskList[4].id} title={taskList[4].title} isComplete={true}/>
            // <Task id={taskList[5].id} title={taskList[5].title} isComplete={false}/>



import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import TaskContainer from "./components/TaskContainer";
import Task from "./components/Task";

const taskList = [
  { id: "task1", title: "Buy Milk", isComplete: true },
  { id: "task2", title: "Read a book", isComplete: false },
  { id: "task3", title: "Early morning run", isComplete: false },
  { id: "task4", title: "Drink water", isComplete: false },
  { id: "task5", title: "Visit the puppy shelter", isComplete: true },
  { id: "task6", title: "Watch Bad Sisters", isComplete: false },
];



function App() {
  const [data, setData] = useState(taskList)

  function updateTaskList(id){
    const newData = data.map((item) => {}) //here do something
    SVGMetadataElement(newData)
  }

  const toggleComplete=(id)=> {
    console.log(`Task with the id '${id}' was clicked inside Task`);
  }
  
  console.log("tobia's data", data)

  return (
    <Fragment>
      <h1 className="heading">Task List</h1>
      <TaskContainer>
        {data.map((item) => {
          const {title, isComplete, id} = item;
          console.log("tobia's item", item)
          return <Task key={id} id={id} title={title} isComplete={isComplete} handleClick={toggleComplete}/>
        })}

  
        

        {/* Task: Nesting Components - Add you tasks here: */}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
