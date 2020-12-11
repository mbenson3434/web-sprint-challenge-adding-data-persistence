// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
};

function get() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.project_id')
        .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes');
}

function insert(tasks) {
    return db('tasks')
      .insert(tasks)
      .then(ids => {
        return db('tasks')
        .where({ id: ids[0] });
      });
  }