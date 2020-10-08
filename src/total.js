import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import Register from './Register';
import './Header.css'
import Describe from './Describe'
import Label from './Label'
import Input from './Input'
import Select from './Select'
import Button from './Button'
import './Task.css'
import ChoiceTask from './ChoiceTask'
import DecisionTask from './DecisionTask'
import SetenceTask from './SetenceTask'
ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);
function App() {
  const [selectTask,setTask] = useState('')
  const getValue=(e)=>{
    setTask(e.target.value)
  }
  return (
    <div>
     <Header
     text1 = "New Requester Task"
     text2 = "Worker Task"
     />
    <Register />
    </div>
  );
}
export default App;


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
      
      fetch('http://localhost:8080/register', {
          method:'post',
          headers:{
            'Accept':'application/json,text/plain,*/*',
            'Content-Type':'application/x-www-form-urlencoded'},
          body:`TaskType=${information.TaskType}&Title=${information.Title}&Description=${information.Description}&ExpiryDate=${information.ExpiryDate}&RequireMW=${information.RequireMW}&Reward=${information.Reward}&Number=${information.Number}`
      })
      .then(response => response.json())
      .then(data=>console.log(data))
      .catch(err=>{
          console.log("Error:"+err)
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

function Button(props){
    return <button type={props.type} onClick={props.onClick}>{props.text}</button>
}
export default Button

function Input(props){
    return <input className="i1"
    value={props.value} 
    type={props.type} 
    name = {props.name} 
    id={props.id} 
    placeholder={props.placehoder} 
    onChange={props.onChange}></input>
}
export default Input

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

function DecisionTask(){
    return <div>
       <h2>This is a Choice Task</h2>
       <p>You need to  provide True/False as answers. </p>
       <p>Do you accept telecommuting?</p>
       <label>True<input value="T" type="radio" name="2"/></label> 
       <label>False<input value="F" type="radio" name="2"/></label> 
    </div> 
}
export default DecisionTask

function Describe(props){
    return <div className='hd'>
      <p>{props.text}</p>
    </div> 
}
export default Describe

function Header(props){
    return <div className='hd'>
      <ul>
			<li><a href="">{props.text1}</a></li>
			<li><a href="">{props.text2}</a></li>
            
		</ul>
    </div> 
}
export default Header

function Label(props){
    return <label>{props.text}</label>
}
export default Label

function Select(props){
    if(props.selectType == "ChoiceTask"){
        return <ChoiceTask />
    } else if(props.selectType == "DecisionTask"){
        return <DecisionTask />
    }else if(props.selectType == "SentenceTask"){
        return <SetenceTask />
    }
    else{
        return <div></div>
    }
}
export default Select

function SentenceTask(){
    return <div>
       <h2>This is a Sentence-Level Task</h2>
      <p>You need to  provide sentences as answers.</p>
      <p>What are States and Lifecycle hooks?</p>
      <textarea></textarea>
    </div> 
}
export default SentenceTask

h2{
    padding-top: 10px;
    padding-left: 40px;
    margin-right: 10px;
}
textarea{
    margin-left: 40px;
    margin-bottom: 10px;
    width: 30%;
    height: 200px;
}body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .hd{
    font-size: 25px;
    font-weight: bold;
    background-color: darkgray;
    display: flex;
}
.taskType{
    display: flex;
}
.blank{
    visibility: hidden;
    flex:25%
}
button{
    width: 200px;
    height: 50px;
    font-size: 20px;
}
p{
    display: flex;
    padding-top: 10px;
    padding-left: 40px;
    font-size: 20px;
    flex:20%
}
label{
    margin-top: 30px;
    font-size: 20px;
    margin-left: 40px;
    width: 10%
}
.i1{
    width:30%;
    height: 30px;
    margin: 30px;
}
ul{
    padding-top: 10px;
    
}
li{
 display: inline;
 padding-right:20px;
}
input{
  flex:2%;
  
}.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
    