const express = require("express")
const bodyParser = require("body-parser")
const User = require("./models/User")
const mongoose = require("mongoose")
const https = require("https")
const fileUpload = require('express-fileupload');
const cors = require("cors")
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

app.use(fileUpload());

mongoose.connect("mongodb+srv://admin-kitty:Deakin2020@cluster0.pzwde.mongodb.net/Task?retryWrites=true&w=majority", {useNewUrlParser: true ,useUnifiedTopology:true})

app.get('/', (req,res)=>{
    const user = {
        TaskType:"123",
        Title:"123"
    }
    res.send(user)
})
app.post('/register',(req,res)=>{
    
    const user = new User({
        TaskType:req.body.TaskType,
        Title:req.body.Title,
        Description:req.body.Description,
        ExpiryDate:req.body.ExpiryDate,
        RequireMW:req.body.RequireMW,
        Reward:req.body.Reward,
        Number:req.body.Number
    });
    user.save()
    .catch((err)=>console.log(err));
    res.json('save to db:' + user)
})

app.post('/upload',(req,res)=>{
    if(req.files === null){
        return res.status(400).json({msg:"No file upload"});
    }
    const file = req.files.file

    file.mv(`${__dirname}/task10/public/uploads/${file.name}`, err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({fileName:file.name, filePath: `/uploads/${file.name}`});
    })
})
let port = process.env.PORT;
if(port == null || port == ""){
    port = 4000;
}
app.listen(port, (req,res)=>{
    console.log("Server is running successfully!")
})
