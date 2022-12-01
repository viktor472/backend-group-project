const uuid = require('uuid')
const myUId = uuid.v4
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
    id: myUId(),
    title: title,
    article: article
  })

  res.status(200).json({
    msg: `Post upploaded!`,
    data: posts
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

    // Check ID exist
    if (index >= 0) {
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
  } else {
    res.status(400).json({
      msg: 'Please insert title or article',
      status: 'Failed'
    })
  }
}

// Delete blog post (Navid)

exports.removeBlog = (req, res) => {
  // get id from reguest
  let id = req.params.id
  let idCheck = posts.findIndex(el => el.id === id);
  console.log(idCheck);
  // check id match
  if (idCheck > 1) {
     const newPosts = posts.filter((el) => el.id !== id)
    posts = newPosts;
    // delete success message
    res.status(200).json({
      msg: `Blog with id: ${id}  deleted`,
      status: 'success',
      data: posts
    })
  } else {
    //delete match error
    res.status(400).json({
      msg: 'id match error',
      status: 'Failed'
    })
  }
}
