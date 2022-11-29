const express = require('express')
const router = express.Router()

// Importing user Controller file
const userController = require('../controllers/blogController')

router.get('/', blogController.getUser).post('/', blogController.postUser)
router
  .get('/:id', blogController.getById)
  .put('/:id', blogController.updateUser)
  .delete('/:id', blogController.removeUser)

module.exports = router
