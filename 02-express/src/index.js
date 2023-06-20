import express  from 'express';
import {users} from './user.js';
// console.log('express', express)

const app = express()

app.listen(5000, () => console.log
('Server is up and running at port 5000'))

app.get('/listusers', handleListUsers)
app.get('/listone', handleListOneUser)
app.get('/serachbyemail/:email', handleSearchByEmail)

function handleListUsers (req, res) {
    console.log('handleList Users here')
    // res.send('Hello from handleListUsers')
    res.send(users)
}

function handleListOneUser (req, res) {
    // console.log('handleList Users here')
    // res.send('Hello from listOneUser')
    console.log('Req.query', req.query)
    const result = users.filter((item) => item.name === req.query.name)
    console.log('result:', result)
    res.send({
        sucess:true,
        result
    })
}

function handleSearchByEmail(req, res) {
    console.log('req.params', req.params)
    const result = users.filter((items) => items.email === req.params.email)
    console.log('result:', result)
    res.send({
        success:true,
        result
    })

}