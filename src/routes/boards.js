const router = require('express').Router()
const ctrl = require('../controllers/boards')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.post('/', auth.isLoggedIn, ctrl.create)
router.delete('/:id', auth.isAuthorized, ctrl.destroy)

module.exports = router
