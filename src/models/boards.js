const db = require('../db')
const plantsModel = require('./plants')

function get (userId) {
  return db('boards')
    .where({ user_id: userId })
    .then(boards => {
      const ids = boards.map(({ id }) => id)
      return plantsModel.get()
        .whereIn('board_id', ids)
        .then(plants => {
          return boards.map(board => {
            const filtered = plants.filter(plant => plant.board_id === board.id)
            return { ...board, plants: filtered }
          })
        })
    })
}

function find (id) {
  return db('boards').where({ id }).first()
}

function create (body) {
  return db('boards')
    .insert(body)
    .returning('*')
    .then(([response]) => response)
}

// PATCH ROUTE for UPDATES

function destroy (id) {
  return db('boards')
    .where({ id })
    .del()
    .returning('*')
    .then(([response]) => response)
}

module.exports = {
  get, find, create, destroy
}
