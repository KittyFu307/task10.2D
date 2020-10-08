import React ,{useState}from 'react';
import './App.css';
import Home from './Home'
import Worker from './Worker'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
const App= (props)=>{
    
        return(
        <Router >
            <div className="total">
            
            <Route exact path="/" component={Home} />
            <Route exact path="/worker" component={Worker} />
            </div>
        </Router>
        )
    
}

export default App;

