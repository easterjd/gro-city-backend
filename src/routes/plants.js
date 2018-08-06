const router = require('express').Router({ mergeParams: true })
const ctrl = require('../controllers/plants')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOne)
router.post('/', ctrl.create)
// router.patch('/:id', ctrl.patch)
// router.delete('/:id', ctrl.destroy)

module.exports = router
