const model = require('../models/plants')
const resourceName = 'plant'

async function getAll (req, res, next) {
  try {
    const response = await model.get()
    res.status(200).json({response})
  } catch (e) {
    next({
      status: 404,
      error: `Plants could not be found`
    })
  }
}

async function getOne (req, res, next) {
  try {
    const id = req.params.id
    const response = await model.find(id)
    res.status(200).json({response})
  } catch (e) {
    next({
      status: 404,
      error: `Plant Id not found`
    })
  }
}

async function create (req, res, next) {
  try {
    const response = await model.create(req.body)
    res.status(201).json({ [resourceName]: response })
  } catch (e) {
    next({
      status: 400,
      error: `Plant could not be created`
    })
  }
}

async function patch (req, res, next) {
  const id = req.params.id
  const response = await model.patch(id, req.body)

  res.json({ [resourceName]: response })
}

async function destroy (req, res, next) {
  const id = req.params.id
  const response = await model.destroy(id)

  res.json({ [resourceName]: response })
}

module.exports = {
  create, patch, destroy
}
