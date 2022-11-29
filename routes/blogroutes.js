const express = require('express')
const router = express.Router()

// Importing post Controller file
const blogController = require('../controllers/blogController.js')

router.get('/', blogController.getPost)

router.post('/', blogController.postBlog)

router.put('/:id', blogController.updateBlog)

// router.delete('/:id', blogController.removeBlog)

module.exports = router
