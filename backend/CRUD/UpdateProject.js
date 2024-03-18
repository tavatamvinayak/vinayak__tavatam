const express = require("express");
const router = express.Router();

// middleware
const auth = require("../Middleware/auth");

// models (schemas)
const Project = require("../models/Project");

router.put("/:id", auth, async (req, res) => {
  const id = req.params.id;

  const { projectTitle, projectDetails, githubLink, pageLink, pageImageLink } =
    req.body;
  const newNotes = {
    projectTitle: projectTitle,
    projectDetails: projectDetails,
    githubLink: githubLink,
    pageLink: pageLink,
    pageImageLink: pageImageLink,
  };

  try {
    const updateNote = await Project.findByIdAndUpdate(id, newNotes, {
      new: true,
    });
    res.json({ updateNote, success: true }).status(200);
    console.log("update note success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ massage: "update notes Error" });
  }
});

module.exports = router;
