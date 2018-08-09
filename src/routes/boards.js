const router = require('express').Router()
const ctrl = require('../controllers/boards')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.index)
router.get('/:id', auth.isAuthorized, ctrl.plants)
router.post('/', auth.isLoggedIn, ctrl.create)
router.patch('/:id', auth.isAuthorized, ctrl.patch)
router.delete('/:id', auth.isAuthorized, ctrl.destroy)
router.delete('/:id/plants/:plantId', auth.isAuthorized, ctrl.removePlant)

module.exports = router
