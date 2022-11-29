const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
//midle weare
app.use(express.json())
app.use('/api/blog', require('./routes/blogRoutes'))

//midle weare end

app.listen(PORT, (err) => {
  console.log(`Listening on port: ${PORT}`)
})
