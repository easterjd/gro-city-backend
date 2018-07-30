const db = require('../db')

function get () {
  return db('plants')
}

function find (id) {
  return db('plants').where({ id }).first()
}

function create (body) {
  return db('plants')
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
  return db('plants')
    .where({ id })
    .del()
    .returning('*')
    .then(([response]) => response)
}

module.exports = {
  get, find, create, patch, destroy
}
