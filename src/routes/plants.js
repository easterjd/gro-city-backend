const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/plants')

router.get('/', ctrl.getAll)
router.post('/:page', ctrl.getPage)
router.post('/', ctrl.create)
// router.patch('/:id', ctrl.patch)
// router.delete('/:id', ctrl.destroy)

module.exports = router
