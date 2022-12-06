const express = require('express')
const swaggerDoc = require('swagger-ui-express');
const swaggerDocumentation = require('./ApiDoc/documentations')

const app = express()
const PORT = process.env.PORT || 3000
//midle weare
app.use(express.json())
app.use('/api/blog', require('./routes/blogRoutes.js'))
app.use('/documentation', swaggerDoc.serve)
app.use('/documentation', swaggerDoc.setup(swaggerDocumentation))

//midle weare end

app.listen(PORT, (err) => {
  console.log(`Listening on port: ${PORT}`)
})
