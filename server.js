const express = require('express')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use('/users', (req, res, next) => {
    console.log('this is the users route')
    res.send(`<h1>This is the users route</h1>`)
})

app.use('/', (req, res, next) => {
    console.log('this is the home route')
    res.send(`<h1>This is the home route</h1>`)
})

app.listen(3000)