const express = require('express');
const router = express.Router();

// middleware
const auth = require('../Middleware/auth');

// models (schemas)
const Project = require('../models/Project');

router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const RemoveProject = await Project.deleteOne({ _id: id })
     
        res.status(202).json(RemoveProject);
        console.log("removed Project")

    } catch (error) {
        console.error(error)
        res.status(500).json({ massage: "remove Project Error" })
    }

})



module.exports = router;