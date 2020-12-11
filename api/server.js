// build your server here
const express = require('express');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');

const server = express();

server.use(express.json())

server.use("/projects", projectRouter)
server.use("/resources", resourceRouter)
server.use("/tasks", taskRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Get some projects done!</h2>`);
});

module.exports = server;