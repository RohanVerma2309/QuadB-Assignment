import React from 'react'
import { useState } from 'react'
function TaskTabs() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  
  return (
    <div>
      <div className="todo-tabs">
            <button className={'todo-pending'} type="button" style={{borderColor: 'red'}} onClick={()=>setIsCompleteScreen(false)}>Pending Tasks</button>
            <button className={'todo-complete'} type="button" style={{borderColor: 'lightgreen'}} onClick={()=>setIsCompleteScreen(true)}>Completed Tasks</button>
          </div>
    </div>
  )
}

export default TaskTabs
