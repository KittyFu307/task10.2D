import React from 'react'
import Button from './Button'
import './Task.css'
import Tasklist from './Tasklist'
const ButtonD = (props)=>{
    const deleteTask=() =>{
        delete Tasklist[props.id]
    }
    return (<div>
        <Button
        onClick={deleteTask}
        text="Delete" 
           
        />
        {console.log(Tasklist)}
    </div>
    )
}

export default ButtonD
