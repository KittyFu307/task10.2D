import React from 'react';
import './Header.css'
function DecisionTask(){
    return <div>
       <h2>This is a Decision Task</h2>
       <p>You need to  provide True/False as answers. </p>
       <p>Do you accept telecommuting?</p>
       <label>True<input value="T" type="radio" name="2"/></label> 
       <label>False<input value="F" type="radio" name="2"/></label> 
    </div> 
}
export default DecisionTask