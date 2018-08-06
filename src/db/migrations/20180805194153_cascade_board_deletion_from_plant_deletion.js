exports.up = function(knex, Promise) {
  return knex.schema.table('boards', table => {
    table.dropColumn('plant_id');
  }).then(() => knex.schema.table('boards', table => {
    table.integer('plant_id');
    table.foreign('plant_id').references('plants.id').onDelete('CASCADE');
  }));
};

exports.down = function(knex, Promise) {
  return knex.schema.table('boards', table => {
    table.dropColumn('plant_id');
  });
};
