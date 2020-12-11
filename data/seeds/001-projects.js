
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Sprint Challenge', project_description: 'A challenging task', completed: false }, //1
        {project_name: 'Side Project', project_description: 'An App that helps us reconnect with friends', completed: false } //2
      ]);
    });
};
