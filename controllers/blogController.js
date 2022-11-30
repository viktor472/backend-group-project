let posts = []

//get blog posts (Viktor)
exports.getPost = (req, res) => {
  res.status(200).json({
    msg: 'Post:',
    result: posts.length,
    status: 'success',
    data: posts
  })
}

//create blog post (Viktor)
exports.postBlog = (req, res) => {
  const title = req.body.title
  const article = req.body.article
  posts.push({
    title: title,
    article: article,
    id: (users.length + 1).toString()
  })
  res.status(200).json({
    msg: `Post upploaded!`
  })
}

//update blog post (Sina)
exports.updateBlog = (req, res) => {
  // Adding the header and body to the variables
  let id = req.params.id
  let title = req.body.title
  let article = req.body.article

  // Check title and article not empty
  if (title && article) {
    let index = posts.findIndex((upd) => upd.id == id)

    posts[index] = {
      ...posts[index],
      title,
      article
    }

    res.status(200).json({
      msg: 'Blog updated',
      status: 'success',
      data: posts
    })
  } else {
    res.status(400).json({
      msg: 'Validation error',
      status: 'Failed'
    })
  }
}

// Delete blog post (Navid)

exports.removeBlog = (req, res) => {
  var id = req.params.id;

  if (id) {
    if (el => el.id == id) {
      const newPosts = posts.filter(el => el.id !== id);
      posts = newPosts;
      res.status(200).json({
        msg: `Blog with id: ${id}  deleted`,
      status: 'success'
      })
    } else{
      res.status(400).json({
        msg: 'id match error',
        status: 'Failed'
      })
    }
  } else {
  res.status(400).json({
    msg: 'id exist error',
    status: 'Failed'
    })
  }
}
