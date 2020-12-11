// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
};

function get() {
    return db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('project_name', 'project_description', 'task_description', 'task_notes');
}

function insert(tasks) {
    return db('tasks')
      .insert(tasks)
      .then(ids => {
        return db('tasks')
        .where({ task_id: ids[0] });
      });
  }