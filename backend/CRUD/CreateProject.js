const express = require("express");
const router = express.Router();

// middleware
const auth = require("../Middleware/auth");
// // models (schemas)
const Project = require("../models/Project");

// // Express validation
const { body, validationResult } = require("express-validator");

router.post("/", auth, async (req, res) => {
  // express validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.userId);

  const {
    projectTitle,
    projectDetails,
    githubLink,
    pageLink,
    pageImageLink,
    token,
  } = req.body;
  const Projects = new Project();
  Projects.projectTitle = projectTitle;
  Projects.projectDetails = projectDetails;
  Projects.githubLink = githubLink;
  Projects.pageLink = pageLink;
  Projects.pageImageLink = pageImageLink;
  Projects.token = token;


  try {
    const createNotes = await Projects.save();
    res
      .json({ createNotes, success: true, message: "Created Project Success" })
      .status(201);
    console.log("create Project success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, massage: "creating Project Error" });
  }
});

module.exports = router;
