// build your `/api/resources` router here
const express = require('express');

const db = require('./model')

const router = express.Router();

router.get('/', (req, res) => {
    db.get(req.query)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "The project information could not be retrieved."
            })
        })
});

router.post('/', (req, res) => {
    const newResource = req.body
    db.insert(newResource)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({
          message: "There was an error while saving the user to the database"
        })
      })
  });

module.exports = router;