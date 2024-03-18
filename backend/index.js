// // imports
const express = require('express');
const cors =require('cors')

const cookieParser = require("cookie-parser");
const app = express();

const Port = 8080 || proccess.env.PORT

// // db connect
const dbconnect = require('./db')
dbconnect();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());


// // routes
app.use('/signup', require('./routes/signup'));



// /// // CURD 
app.use('/project',require('./CRUD/CreateProject'));  // // post     //  create Notes
app.use('/project',require('./CRUD/ReadProject'));    // // get      //  read notes
app.use('/project',require('./CRUD/UpdateProject'));  // // put      //  update notes
app.use('/project',require('./CRUD/DeleteProject'));  // // delete   //  delete notes


app.get('/data',(req,res)=>{
    res.json({name:"vishal" , last:"tavatam"})
    console.log("data sended success ")
})


app.listen(Port,()=>{
    console.log("8080");
})