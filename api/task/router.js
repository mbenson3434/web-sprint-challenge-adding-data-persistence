// build your `/api/tasks` router here
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
                message: "The tasks could not be retrieved."
            })
        })
});

router.post('/', (req, res) => {
    const newTask = req.body
    db.insert(newTask)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "There was an error while saving the task to the database"
        })
      })
  });

module.exports = router;