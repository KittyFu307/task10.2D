import React,{useState} from 'react'
import './Task.css'
import { Header, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ButtonD from './ButtonD'
import Button from './Button'
const Task = (props)=>{
    const [open, setOpen] = useState(false)
    return <div className="column">
       <h3>{props.title}</h3>
       <p>{props.description}</p>
       <p>{props.expiryDate}</p>
       <p>{props.key}</p>
       

       <Modal 
       closeIcon 
       open={open} trigger={<Button text="Details" />}
       onClose={() =>setOpen(false)}
       onOpen={()=>setOpen(true)}>
           <Header content={props.title} />
           <Modal.Content>
               <p>Task type:{props.type}</p>
               <p>Required master worker? {props.master}</p>
               <p>Reward per response: {props.reward}</p>
               <p>Number of workers: {props.number}</p>
           </Modal.Content>
           <Modal.Actions>
               
           </Modal.Actions>
       </Modal>
       <br />
       <br></br>
       <ButtonD
        id = {props.id}
        />
    </div>
}

export default Task