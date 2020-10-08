import React from 'react';
import './Task.css'
function ChoiceTask(){
    return <div className="ct">
      <h2>This is a Choice Task</h2>
      <p>You need to select one or several options as your answer</p>
      <form action="" method="POST"> 
        <p>What are you good at in IT</p><br /><br /> 
        <label><input name="Fruit" type="checkbox" value="AI" />Artificial Intelligence </label> 
        <label><input name="Fruit" type="checkbox" value="B" />Blockchain </label> 
        <label><input name="Fruit" type="checkbox" value="C" />Cloud Computing </label> 
        <label><input name="Fruit" type="checkbox" value="D" />Data Analyses </label> 
        </form>
    </div> 
}
export default ChoiceTask