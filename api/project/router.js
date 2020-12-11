// build your `/api/projects` router here
const express = require('express');

const db = require('./model')

const router = express.Router();

router.get('/', (req, res) => {
    db.get(req.query)
    .then(data => {
      for (let i in data) {
        if (data[i].completed === 0) {
          data[i].completed = false
        } else {
          data[i].completed = true;
        }
      }
      res.status(200).json(data);
    })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "The project information could not be retrieved."
            })
        })
});

router.post('/', (req, res) => {
    const newProject = req.body
    db.insert(newProject)
    .then(project => {
      if (project[0].completed === 0) {
        project[0].completed = false
      } else {
        project[0].completed = true;
      }
      res.status(201).json(project[0]);
    })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "There was an error while saving the user to the database"
        })
      })
  });

module.exports = router;