const express = require('express')
const router = express.Router()

// Importing post Controller file
const blogController = require('../controllers/blogController')

router.get('/', blogController.getPost).post('/', blogController.postBlog)
router
  .get('/:id', blogController.getById)
  .put('/:id', blogController.updateBlog)
  .delete('/:id', blogController.removeBlog)

module.exports = router
