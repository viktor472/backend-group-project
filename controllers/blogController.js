let posts = [];

//create blog post (Viktor)
exports.postUser = (req, res) => {
  let title = req.body.title;
  let article = req.body.article;
  posts.push({
    title: title,
    article: article,
    id: (users.length + 1).toString(),
  });
  res.status(200).json({
    msg: `Post upploaded!`,
  });
};
