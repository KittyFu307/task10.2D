import React,{useState} from 'react';
import './App.css';
import Describe from './Describe'
import Label from './Label'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import './Header.css'
import './Task.css'
import Tasklist from './Tasklist'
var id = 6;

const Register= (props)=>{
    
    const [information,setInformation] = useState({
        TaskType:"",
        Title:"",
        Description:"",
        ExpiryDate:"",
        RequireMW:"",
        Reward:"",
        Number:""
    })
    const handleChange=(e)=>{
        const {name,value} = e.target
        setInformation((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
  }
  const handleClick = ()=>{
    console.log(Tasklist)
    Tasklist.push({
        "id":id,
        "type":information.TaskType,
        "title":information.Title,
        "description":information.Description,
        "expiryDate":information.ExpiryDate,
        "requireMW":information.RequireMW,
        "reward":information.Reward,
        "number":information.Number,
    })
    id+=1
      fetch('http://localhost:4000/register', {
          method:'post',
          headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'},
          body:`TaskType=${information.TaskType}&Title=${information.Title}&Description=${information.Description}&ExpiryDate=${information.ExpiryDate}&RequireMW=${information.RequireMW}&Reward=${information.Reward}&Number=${information.Number}`
      })
      .then(response => response.json())
      .then(data=>console.log(data))
      .catch(err=>{
          console.log("This is Error:"+err)
      })
  }
return (
        <div>      
     <div className='taskType'>
      <p>Select Task Type:</p>
      <Label text='Choice Task'/>
      <Input type='radio'
          name='TaskType'
          value='ChoiceTask'
          onChange={handleChange}
      />
      <Label text='Decision-Making Task'/>
      <Input type='radio'
          name='TaskType'
          value='DecisionTask'
          onChange={handleChange}
      />
      <Label text='Sentence-Level Task'/>
      <Input type='radio'
          name='TaskType'
          value='SentenceTask'
          onChange={handleChange}
      />
      <Label text='Picture-processing Task'/>
      <Input type='radio'
          name='TaskType'
          value='PictureTask'
          onChange={handleChange}
      />
      <div className="blank"><p></p></div>
    </div>

    <Describe
    text = "Describe your task to Workers"
    />

    <Label
          text="Title"
      />
      <Input 
          id = "title"
          name = "Title"
          placehoder = "Enter task title"
          type="text"
          onChange={handleChange}
          value = {information.Title}
      />
      <br/>
      <Label
          text="Description"
      />
      <Input 
          id = "description"
          name = "Description"
          placehoder = "Enter task description"
          type="text"
          onChange={handleChange}
          value = {information.Description}
      />
      <br/>
      <Label
          text="Expiry Date"
      />
      <Input 
          id = "ExpiryDate"
          name = "ExpiryDate"
          type="text"
          onChange={handleChange}
          value = {information.ExpiryDate}
      />
    <Describe
    text = "Setting up your Task"
    />
    <Select 
      selectType = {information.TaskType}  
    />
    <Describe
    text = "Worker Requirement"
    />
    
    <div className='taskType'>
      <p>Require Master Workers</p>
      <Label
          text="Yes"
      />
      <Input 
        type="radio"
        name="RequireMW"
        onChange={handleChange}
        value="Yes"
      />
      <Label
          text="No"
      />
      <Input 
        type="radio"
        name="RequireMW"
        onChange={handleChange}
        value="No"
      />
     <div className="blank"><p></p></div>
    </div> 
    <Label
          text="Reward per response"
      />
      <Input 
          id = "reward"
          name = "Reward"
          onChange={handleChange}
          value={information.Reward}
      />
      <br/>
      <Label
          text="Number of workers"
      />
      <Input 
          id = "number"
          name = "Number"
          onChange={handleChange}
          value={information.Number}
      />
      <Button 
          type="submit"
          text = "Save"
          onClick = {handleClick}
      />
        </div>
    )
}
export default Register