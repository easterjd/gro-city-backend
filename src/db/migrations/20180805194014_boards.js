exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', table => {
    table.increments();
    table.string('title').notNullable();
    table.integer('user_id').references('users.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('boards');
};
