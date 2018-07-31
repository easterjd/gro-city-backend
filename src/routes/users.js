const router = require('express').Router()
const ctrl = require('../controllers/users')

router.post('/signup', ctrl.signup)
router.post('/login', ctrl.login)

module.exports = router
