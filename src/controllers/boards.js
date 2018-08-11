const {plural} = require('pluralize')
const model = require('../models/boards')
const {parseToken} = require('../lib/auth')
const resourceName = 'board'

async function index(req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id

  const response = await model.get(userId)
  res.json({
    [plural(resourceName)]: response
  })
}

async function plants(req, res, next) {
  const token = parseToken(req.headers.authorization)
  const userId = token.sub.id
  const boardId = req.params.id

  const response = await model.getPlants(userId, boardId)
  res.json({response})
}

async function removePlant(req, res, next) {
  const boardId = req.params.id;
  const plantId = req.params.plantId;

  const response = await model.removePlant(boardId, plantId)
  res.json({response})
}

async function create(req, res, next) {
  try {
    const token = parseToken(req.headers.authorization)
    const userId = token.sub.id

    const response = await model.create({ ...req.body,
      user_id: userId
    })

    res.status(201).json({[resourceName]: response})
  } catch (e) {
    next({status: 400, error: `Board could not be created`})
  }
}

async function patch(req, res, next) {
  const id = req.params.id
  const response = await model.patch(id, req.body)

  res.json({[resourceName]: response})
}

async function destroy(req, res, next) {
  const id = req.params.id
  const response = await model.destroy(id)

  res.json({ [resourceName]: response})
}

async function addPlant(req, res, next) {
  const plant_id = req.params.plant_id
  const board_id = req.params.id
  const response = await model.addPlants({plant_id, board_id})

  res.json({[resourceName]: response})
}


module.exports = {
  index,
  create,
  patch,
  destroy,
  plants,
  removePlant,
  addPlant
}
