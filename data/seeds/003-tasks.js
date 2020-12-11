
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'Set up projects files', notes: 'Use your set up cheat sheet', project_id: 1 }, 
        {description: 'Plan out front end of app', notes: 'Work with your team to decide design aspects', project_id: 2 }
      ]);
    });
};
