exports.up = function(knex, Promise) {
  return knex.schema.table('plants', table => {
    table.dropColumn('board_id')
  }).then(() => knex.schema.table('plants', table => {
    table.integer('board_id')
    table.foreign('board_id').references('boards.id').onDelete('CASCADE')
  }))
};

exports.down = function(knex, Promise) {
  return knex.schema.table('plants', table => {
    table.dropColumn('board_id')
  })
};
