import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid';
import { findAllByAltText } from '@testing-library/react';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "task1",
      complete: false,
    },

    {
      id: uuidv4(),
      name: "task2",
      complete: true,
    },

    {
      id: uuidv4(),
      name: "task3",
      complete: false,
    },
  ]);
  const taskRef = useRef();

  const handleAddTask = () => {
    const updatedTasks = [...tasks];
    const inputValue = taskRef.current.value;
    if(inputValue === '') return;
    const newTask = {
      id: uuidv4(),
      name: inputValue,
      complete: false
    };
    setTasks([...updatedTasks, newTask]);  
    taskRef.current.value = null;
  }

  const handleCheckboxClick = (id) => {
    const newTaskList = [...tasks];
    const test = newTaskList.findIndex((task)=>{
      return task.id == id;
    })
    newTaskList[test].complete = !newTaskList[test].complete;
    setTasks(newTaskList);
  }

  const handleClearCompletedTask = () => {
    const newTasks = [...tasks];
    const newTasksFiltered = newTasks.filter((task) => {return task.complete == false});
    setTasks(newTasksFiltered);
  }

  return (
    <>
      <div>{tasks.filter((task)=> task.complete == false).length} Task Left</div>
      <input type="text" ref={taskRef} />
      <button onClick={handleAddTask}>Add Task</button>
      <button onClick={handleClearCompletedTask}>Clear Completed Task</button>
      <TodoList taskList={tasks} handleCheckboxClick = {handleCheckboxClick} />
    </>
  )
}

export default App;
