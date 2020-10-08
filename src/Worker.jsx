import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import './Header.css'
import Worklist from './Worklist'
function Worker() {
  
  return (
    <div>
     <Header
     text1 = "New Requester Task"
     text2 = "Worker Task"
     />
     <Worklist />
    </div>
  );
}

export default Worker;
