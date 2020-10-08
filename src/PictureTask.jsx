import fileUpload from 'express-fileupload';
import React from 'react';
import './Header.css'
import Fileupload from './Fileupload'
function PictureTask(){
    return <div>
       <h2>This is a Picture processing Task</h2>
       <p>You can upload a picture and then it will send you a task </p>
       <Fileupload />
       
    </div> 
}
export default PictureTask