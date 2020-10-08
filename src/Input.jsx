import React from 'react';
import "./Header.css"
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