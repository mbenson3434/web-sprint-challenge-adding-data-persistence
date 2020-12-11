
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Google', description: 'A massive internet database'}, //1
        {name: 'Lambda Training Kit', description: 'Curriculum specific information'}, //2
        {name: 'Setup cheet sheet', description: 'Quick directions on how to set up files for sql projects'} //3
      ]);
    });
};
