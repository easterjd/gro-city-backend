
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('plants_boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants_boards').insert([
        {plant_id: 40, board_id: 1},
        {plant_id: 53, board_id: 2},
        {plant_id: 51, board_id: 2},
        {plant_id: 52, board_id: 2},
        {plant_id: 54, board_id: 2},
        {plant_id: 160, board_id: 3}
      ])
    })
}
