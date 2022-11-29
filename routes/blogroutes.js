const express = require('express')
const router = express.Router()

// Importing user Controller file
const userController = require('../controllers/blogController')

router.get('/', blogController.getPost).post('/', blogController.postBlog)
router
  .get('/:id', blogController.getById)
  .put('/:id', blogController.updateBlog)
  .delete('/:id', blogController.removeBlog)

module.exports = router
