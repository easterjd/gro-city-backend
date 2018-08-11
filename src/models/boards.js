const db = require('../db')
const plantsModel = require('./plants')

function get (userId) {
  return db('boards')
    .where({ user_id: userId })
}

function getPlants (userId, boardId) {
  const board_id = parseInt(boardId)
  return db('plants_boards')
    .where({ board_id })
    .then(async plants => {
      const plantsInfo = await Promise.all(plants.map(plantId => {
        return plantsModel.find(plantId.plant_id)
      }))
      return plantsInfo
    })
}

function removePlant(boardId, plantId){
  return db('plants_boards')
    .where({ plant_id: plantId, board_id: boardId})
    .del()
    .returning('*')
    .then(([response]) => response)
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

function patch (id, body) {
  return find(id).then(response => {
    return db('boards')
      .update({
        ...response,
        ...body,
        updated_at: new Date()
      })
      .where({ id })
      .returning('*')
      .then(([response]) => response)
  })
}

function destroy (id) {
  return db('boards')
    .where({ id })
    .del()
    .returning('*')
    .then(([response]) => response)
}

function addPlants(body) {
  return db('plants_boards')
    .insert(body)
    .returning('*')
    .then(([response]) => response)
}

module.exports = {
  get, find, create, patch, destroy, getPlants, removePlant, addPlants
}
