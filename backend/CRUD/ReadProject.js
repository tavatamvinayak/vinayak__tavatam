const express = require('express');
const router = express.Router();

// middleware
const auth = require('../Middleware/auth');

// models (schemas)
const Project = require('../models/Project');

router.get('/' ,async(req,res)=>{
    try {
        const Projects = await Project.find({});
        res.status(200).json(Projects)
        console.log("read Project success")
        
    } catch (error) {
        console.error(error)
        res.status(500).json({massage : "creating Project Error"})
    }
})



module.exports = router;