import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
function Header(props){
    return <div className='hd'>
      <ul>
			<li><Link to="/">{props.text1}</Link></li>
			<li><Link to="/worker">{props.text2}</Link></li>
            
		</ul>
    </div> 
}
export default Header