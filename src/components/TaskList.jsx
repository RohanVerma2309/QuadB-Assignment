import React from 'react'
import TaskTabs from './TaskTabs'
function TaskList(props) {

    const handleDelete=(index)=>{
        let newList= [...props.todoItemList]
        newList.splice(index)
        localStorage.setItem('todoList', JSON.stringify(newList))
    }
  return (
    <div>
      <div className="todo-list">
            <h2 className="list-title">Task List</h2>
            <TaskTabs />
            <div className="list-divider"></div>
            {props.todoItemList.map((item, index)=>{
                return(
                    <div className="todo-item" key={index}>
                        <h1 className="list-task-title">{item.title}</h1>
                        <p className="list-task-desc">{item.description}</p>

                        <button type="button" className='completeBtn'>Mark Completed</button>
                        <button type="button" className='removeBtn' onClick={handleDelete(index)}>Remove Task</button>
                    </div>
                )
            })}
          </div>
    </div>
  )
}

export default TaskList
