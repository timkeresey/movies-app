const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended:true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
