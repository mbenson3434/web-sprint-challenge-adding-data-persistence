
exports.up = function (knex) {
    return knex.schema
        .createTable('projects', table => {
            table.increments()
            table.string('name', 128).notNullable()
            table.string('description', 128)
            table.boolean('completed').notNullable().defaultTo(false)
        })
        .createTable('resources', table => {
            table.increments()
            table.string('name', 128).notNullable().unique()
            table.string('description', 128)
        })
        .createTable('tasks', table => {
            table.increments()
            table.string('description', 300).notNullable()
            table.string('notes', 300)
            table.boolean('completed').notNullable().defaultTo(false)
            table.integer('project_id')
                .unsigned().notNullable()
                .references('id').inTable('projects')
                .onDelete('CASCADE').onUpdate('CASCADE')
        })
        .createTable('project_resources', table => {
            table.increments()
            table.integer('project_id')
                .unsigned().notNullable()
                .references('id').inTable('projects')
                .onDelete('CASCADE').onUpdate('CASCADE')
            table.integer('resource_id')
                .unsigned().notNullable()
                .references('id').inTable('resources')
                .onDelete('CASCADE').onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
