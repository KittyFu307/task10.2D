
import React ,{useState}from 'react';
import './Header.css'
import axios from 'axios'
import './file.css'
import ImageUploader from 'react-images-upload';
import { Component } from 'react';
const Fileupload =()=>{
    const [file,setFile] = useState('');
    const [filename,setFilename] = useState('');
    const [uploadedFile,setUploadedFile] = useState({})

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
        console.log(file)
    };

    const onClick = async e =>{
        const formData = new FormData();
        formData.append('file',file)
        console.log(file)
        try{
            const res = await axios.post('/upload',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res)
            const {fileName, filePath} = res.data
            setUploadedFile({fileName,filePath})

        }catch(err){
            if(err.response.status === 500){
                console.log("there was a problem with the server");
            }else{
                console.log(err.response.data.msg)
            }
        }
    }
    return (<div className="center">
        <input className='file' type='file' id='customFile' onChange={onChange} />
        <label htmlFor='customFile'>
            {filename}
        </label>
        <button className='file' type='submit' value="Upload" onClick={onClick}>submit</button>
    { uploadedFile?(<div className='render-chat'><h3>{uploadedFile.fileName}</h3>
    <img src={uploadedFile.filePath} alt='' />
    </div>):null}
    
    </div>
    
    )
}
export default Fileupload