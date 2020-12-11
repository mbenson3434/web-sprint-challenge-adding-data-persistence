// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    get,
    insert
};

function get() {
    return db('resources');
}

function insert(resources) {
    return db('resources')
      .insert(resources)
      .then(ids => {
        return db('resources')
        .select('name')
        .where({ id: ids[0] })
        .first();
      });
  }