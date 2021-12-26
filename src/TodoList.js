import React from 'react'

export default function TodoList({taskList, handleCheckboxClick}) {
    const updateTasks = (id) => {
        handleCheckboxClick(id);
    }
    const renderTodoList = () => {
        // const TodoList = [];
        // for(let i = 0; i < taskList.length; i++){
        //     TodoList.push(<div>{taskList[i].name}</div>);
        // }
        // return TodoList;

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
    console.log(taskList);
    return (
        <div>
            {renderTodoList()}
        </div>
    )
}
