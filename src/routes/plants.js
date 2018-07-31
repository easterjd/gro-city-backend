const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/plants')
const auth = require('../lib/auth')

router.post('/', auth.isAuthorized, ctrl.create)
router.patch('/:id', auth.isAuthorized, ctrl.patch)
router.delete('/:id', auth.isAuthorized, ctrl.destroy)

module.exports = router
