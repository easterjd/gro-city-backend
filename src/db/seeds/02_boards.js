
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards').del()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {id: 1, user_id: 1, title: 'Balcony'},
        {id: 2, user_id: 2, title: 'Window Sill'},
        {id: 3, user_id: 3, title: 'Indoor Wall Plants'}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('boards_id_seq', (SELECT MAX(id) FROM boards));`)
    })
}
