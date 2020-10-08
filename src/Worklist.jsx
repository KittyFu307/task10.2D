import React,{useState,useEffect} from 'react';
import './App.css';
import './Task.css'
import CardList from './CardList'

function Worklist(props) {
  const [search,setSearch] = useState({
    searchTitle:'',
    searchDate:''
  })
  const onChange = (e) =>{
    const {name,value} = e.target
    setSearch((preValue)=>{
      return {
        ...preValue,
        [name]:value
      }
    })
  }
  
  
  return (<div>
   <div className="App"><p className="th2">Task List</p></div>

    <input value={search.searchTitle} 
    name="searchTitle"
    onChange={onChange} 
    className="ti" type="text"
    placeholder="Search Task by Title">

    </input>
    <input value={search.searchDate} 
    name="searchDate"
    onChange={onChange} 
    className="ti" type="date" 
    placeholder="Search Task by Expiry Date">
    </input>
   <CardList 
     searchTitle={search.searchTitle}
     searchDate = {search.searchDate}
   />
    
    </div>
  );
}

export default Worklist;
