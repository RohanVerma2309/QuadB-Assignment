import React from 'react'
import { useState, useEffect } from 'react'
import TaskList from './TaskList';

function TaskInput() {
    const [allTodos, setTodos]= useState([])
    const [newTitle, setNewTitle]= useState("")
    const [newDesc, setNewDesc]= useState("")

    const handleAddItem=()=>{
        let newTodoItem= {
            title: newTitle,
            description: newDesc
        }

        let updatedItems= [...allTodos];
        updatedItems.push(newTodoItem)
        setTodos(updatedItems)
        localStorage.setItem('todoList', JSON.stringify(updatedItems))
    }

    useEffect(()=>{
        let savedItems= JSON.parse(localStorage.getItem('todoList'))
        if(savedItems)
        setTodos(savedItems);
    }, [])
  return (
    <div>
        <h2 className="add-item-title">Add New Task</h2>
        <div className="todo-inputs">
            <div className="input-item">
              <label htmlFor="Task_Title">Task Title : </label>
              <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} name="Task_Title" id="Task_Title" placeholder='Title of the Task'/>
            </div>

            <div className="input-item">
              <label htmlFor="Task_Desc">Description : </label>
              <input type="text" value={newDesc} onChange={(e)=>setNewDesc(e.target.value)} name="Task_Desc" id="Task_Desc" placeholder='Description for the Task.'/>
            </div>

            <div className="input-item">
              <button className="addBtn" type="button" onClick={handleAddItem}>+ ADD ITEM</button>
            </div>
          </div>

        <div className="divider"></div>     
        <TaskList todoItemList={allTodos}/>
    </div>
  )
}

export default TaskInput
