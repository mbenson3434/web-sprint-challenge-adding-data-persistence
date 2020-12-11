
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'Set up projects files', task_notes: 'Use your set up cheat sheet', project_id: 1 }, 
        {task_description: 'Plan out front end of app', task_notes: 'Work with your team to decide design aspects', project_id: 2 }
      ]);
    });
};
