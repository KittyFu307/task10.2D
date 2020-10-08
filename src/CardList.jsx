import React from 'react'
import Task from './Task'
import Tasklist from './Tasklist'
function CardList (props){
    const filteredStaff = Tasklist.filter((task) =>{
        return ((task.expiryDate<=props.searchDate )|| (task.expiryDate.includes(props.searchDate)) )
        && (task.title.toLowerCase().includes(props.searchTitle.toLowerCase()))
      } )
    
    return <div className="row">
    
    {filteredStaff.map((task)=>
    
    <Task
       id = {task.id}
       title={task.title}
       description={task.description}
       expiryDate={task.expiryDate}
       type={task.type}
       reward={task.reward}
       number={task.number}
       master={task.requireMW}
    />
    )
    }
    </div>
}
export default CardList

    