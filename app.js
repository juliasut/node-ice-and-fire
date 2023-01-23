const express = require('express')
const charactersRoutes = require('./routes/characterRoutes')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.use('/api', charactersRoutes)


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
