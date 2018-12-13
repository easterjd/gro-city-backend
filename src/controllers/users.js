const model = require('../models/users')
const auth = require('../lib/auth')

async function signup (req, res, next) {
  try {
    const response = await model.create(req.body)
    const token = auth.createToken(response.id)

    res.status(201).json({ token })
  } catch (e) {
    next({ status: 400, error: `User could not be registered` })
  }
}

async function login (req, res, next) {
  try {
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)

    res.json({ token })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

async function verify (req, res, next) {
  try {
    await auth.parseToken(req.headers.authorization)
    res.json({ isLoggedIn: true })
  } catch (e) {
    next({ status: 401, error: 'Login has expired, please sign in again.'})
  }
}

module.exports = {
  signup, login, verify
}
