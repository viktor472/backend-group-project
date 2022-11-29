let posts = []

//create blog post (Viktor)
exports.postUser = (req, res) => {
  let title = req.body.title
  let article = req.body.article
  posts.push({
    title: title,
    article: article,
    id: (users.length + 1).toString()
  })
  res.status(200).json({
    msg: `Post upploaded!`
  })
}

//Update blog post (Sina)
exports.updateUser = (req, res) => {
  // Read from head and body
  let id = req.params.id
  let title = req.body.title
  let article = req.body.article

  // Check title and article fields not empty
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
