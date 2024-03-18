const mongoose = require('mongoose')

const Project_Add = mongoose.Schema({
    projectTitle:{
        type:String,
        required : true,
    },
    projectDetails:{
        type: String,
        required:true
    },
    githubLink:{
        type: String,
        required:true
    },
    pageLink:{
        type:String
    },
    pageImageLink:{
        type:String
    },
})

module.exports = mongoose.model('Project_Add' , Project_Add);