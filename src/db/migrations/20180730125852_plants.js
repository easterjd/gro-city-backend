exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', table => {
      table.increments()
      table.string('title').notNullable()
      table.text('description').notNullable().defaultsTo('')
      table.boolean('completed').notNullable().defaultsTo(false)
      table.integer('board_id').references('boards.id')
      table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
