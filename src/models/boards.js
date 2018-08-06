const db = require('../db')
const plantsModel = require('./plants')

function get (userId) {
  return db('boards')
    .where({ user_id: userId })
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
    return db('plants')
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

module.exports = {
  get, find, create, patch, destroy
}
