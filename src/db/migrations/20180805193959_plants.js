exports.up = function(knex, Promise) {
  return knex.schema.createTable('plants', table => {
    table.increments();
    table.string('title').notNullable();
    table.text('scientific_name').notNullable().defaultsTo('');
    table.json('data').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plants');
};
