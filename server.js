const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const ranges = require('./ranges/index.js')
const applyCashApi = require('./src/CashRanges/CashAPI')
applyCashApi(app)


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
  })
const path = require('path')
app.use(express.static(path.join(__dirname, 'build')))

app.listen(port)
console.log('server started on port' + port)