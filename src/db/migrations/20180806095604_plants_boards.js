exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants_boards', table => {
    table.integer('plant_id').notNullable();
    table.foreign('plant_id').references('plants.id').onDelete('CASCADE');
    table.integer('board_id').notNullable();
    table.foreign('board_id').references('boards.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants_boards');
};
