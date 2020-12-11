
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sprint Challenge', description: 'A challenging task', completed: false }, //1
        {name: 'Side Project', description: 'An App that helps us reconnect with friends', completed: false } //2
      ]);
    });
};
