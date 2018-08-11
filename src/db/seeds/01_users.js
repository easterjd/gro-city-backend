const { hashSync } = require('bcryptjs')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Surya', last_name: 'Moorthy', email: 'ayrus2289@gmail.com', password: hashSync('password')},
        {id: 2, first_name: 'Chris', last_name: 'Peterson', email: 'crpete23@gmail.com', password: hashSync('password')},
        {id: 3, first_name: 'Dillon', last_name: 'Easter', email: 'johndilloneaster@gmail.com', password: hashSync('password')}
      ])
    })
    .then(function () {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
    })
}
