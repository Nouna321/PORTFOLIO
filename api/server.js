const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('knex')

const app = express()

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'test',
        database: 'postgres',
    },
})

db.select('*')
    .from('contacts')
    .then((data) => {
        console.log(data)
    })

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/Modal', (req, res) => {
    const { firstname, lastname, email, title, expressyourself } = req.body
    db('contacts')
        .insert({
            firstname: firstname,
            lastname: lastname,
            email: email,
            title: title,
            expressyourself: expressyourself,
        })
        .then((user) => {
            res.json(user[0])
        })
        .catch((err) => res.status(400).json('unable to get user'))
})

app.listen(3001, () => {
    console.log('app is running on port 3001')
})
