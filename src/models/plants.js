const db = require('../db')

function get () {
  return db('plants')
}

function find (id) {
  return db('plants').where({id}).first()
}

function getPage (page, body) {
  return db('plants')
  .then(response => {
    const filterPlants = response.filter(plant => {
      if (body['scientific_name'] !== "") {
        if (!plant['scientific_name'].includes(body['scientific_name'])) return false
      }
      if (body.data['habit'] !== "") {
        if (!plant.data['habit'].includes(body.data['habit'])) return false
      }
      if (body.data['growPeriod'] !== "") {
        if (!plant.data['growPeriod'].includes(body.data['growPeriod'])) return false
      }
      if (body.data['flowerColor'] !== "") {
        if (!plant.data['flowerColor'].includes(body.data['flowerColor'])) return false
      }
      if (body.data['tempMin'] !== "") {
        if (parseNegInt(plant.data['tempMin']) > parseNegInt(body.data['tempMin'])) return false
      }
      for (let key in body.data) {
        if (key !== 'habit' && key !== 'growPeriod' && key !== 'flowerColor' && key !== 'tempMin') {
          let filterValue = body.data[key]
          if (filterValue !== "" && plant.data[key] !== filterValue) return false
        }
      }
      return true
    })
    const pageAmount = Math.ceil(filterPlants.length / 12)
    return {filterPlants, pageAmount}
  })
  .then(({filterPlants, pageAmount}) => {
    const start = (page * 12) - 12
    const end = page * 12
    const dataSlice = filterPlants.slice(start, end)
    return {dataSlice, pageAmount}
  })
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

function parseNegInt(string) {
  if (string[0] === '-') {
    return -parseInt(string.slice(1))
  } else {
    return parseInt(string)
  }
}

module.exports = {
  get, find, getPage, create, patch, destroy
}
