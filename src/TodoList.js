import React from 'react'

export default function TodoList({taskList, handleCheckboxClick}) {
    const updateTasks = (id) => {
        handleCheckboxClick(id);
    }
    const renderTodoList = () => {
        const arrayOfTaskElements = taskList.map((task, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" checked={task.complete} onChange={()=>updateTasks(task.id)}/>
                    {task.name}
                </div>   
            )
        });
        return arrayOfTaskElements;
    }
    return (
        <div>
            {renderTodoList()}
        </div>
    )
}
