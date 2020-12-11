
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'Google', resource_description: 'A massive internet database'}, //1
        {resource_name: 'Lambda Training Kit', resource_description: 'Curriculum specific information'}, //2
        {resource_name: 'Setup cheet sheet', resource_description: 'Quick directions on how to set up files for sql projects'} //3
      ]);
    });
};
