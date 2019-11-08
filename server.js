const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const ranges = require('./ranges/index.js')
const positions = {
    1: 'UTG',
    2: 'HJ',
    3: 'CO',
    4: 'BTN',
    5: 'SB',
    6: 'BB'
}
const path = require('path')
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ranges/open/:hero', function (req, res) {
    res.send(ranges.open[positions[req.params.hero]])
})
app.get('/ranges/facing-raise/:hero/:villain', function (req, res) {
    const hero = positions[req.params.hero]
    const villain = positions[req.params.villain]
    res.send(ranges.facingRaise[hero+'_'+villain])
})
app.get('/ranges/facing-3bet/:hero/:villain', function (req, res) {
    const hero = positions[req.params.hero]
    const villain = positions[req.params.villain]
    res.send(ranges.threeBet[hero+'_'+villain])
})
app.get('/ranges/facing-4bet/:hero/:villain', function (req, res) {
    const hero = positions[req.params.hero]
    const villain = positions[req.params.villain]
    res.send(ranges.fourBet[hero+'_'+villain])
})
app.get('/ranges/squeeze/:hero/:villain/:caller', function (req, res) {
    const hero = positions[req.params.hero]
    const villain = positions[req.params.villain]
    const caller = positions[req.params.caller]
    res.send(ranges.squeeze[hero+'_'+villain+'_'+caller])
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'))
  })
app.listen(port)
console.log('server started on port' + port)