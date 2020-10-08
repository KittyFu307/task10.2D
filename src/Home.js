import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import Register from './Register';
import './Header.css'
function Home(props) {
 
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

export default Home;
