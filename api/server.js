const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const database = {
    users: [
        {
            firstName: 'AIT SADOUNE',
            lastName: 'Zouina',
            email: 'zouina@gmail.com',
            Title: 'dev web',
            expressYourSelf: 'hi my name is zouina',
            joined: new Date(),
        },
    ],
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/Modal', (req, res) => {
    const { firstName, lastName, email, Title, expressYourSelf } = req.body
    database.users.push({
        firstName: 'AIT SADOUNE',
        lastName: 'Zouina',
        email: 'zouina@gmail.com',
        Title: 'dev web',
        expressYourSelf: 'hi my name is zouina',
        joined: new Date(),
    })

    res.json(database.users[database.users.length - 1])
})

app.listen(3001, () => {
    console.log('app is running on port 3001')
})
