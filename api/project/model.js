// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
};

function get() {
    return db('projects');
}

function insert(project) {
    return db('projects')
      .insert(project)
      .then(ids => {
        return db('projects')
        .where({ id: ids[0] });
      });
  }
  