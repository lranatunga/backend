import express from "express"
import {users} from './user.js'

const app = express()
// MIDDLEWARE
app.use(express.json())

app.listen(5000, () => console.log('Server is up and running at port 5000'))

app.get('/user/list', (req, res) => {
    res.send(users)
})

app.post('/users/add', handleUserAdd)
app.delete('/users/delete', handleDeleteUser)
app.put("/users/edit", handleEditUser)
app.patch('/users/patch', handlePatchUser)

function handleUserAdd (req, res) {
    console.log('req:', req.body)
    users.push(req.body)
    console.log("users", users)
    res.send("User added succesfully")
}
// to delete we have to have unique id
// but here we don not have id. so we use name
// we can use body or url part to delete data
// usually we use query 
// if it is sensitive we use body 
function handleDeleteUser(req, res) {
    const user = req.query.name
    console.log('req.query:', req.query)

    // let usersArray = users.filter(
    //     (item) => item.name.toLocaleLowerCase() !== req.query.name.toLocaleLowerCase())
        
        let usersArray = users.filter(
            (item) => item.name.toLocaleLowerCase() !== req.body.name.toLocaleLowerCase())    
        console.log("🚀 ~ users:", usersArray);


    res.send("delete here");

}

function handleEditUser(req, res) {
    console.log("🚀 ~ req:", req.body);

    const editUser = users.map((element) =>{
        if(element.name === req.body.name){
            element = req.body
        }
        return element
    })
    console.log("users:", editUser)
    res.send('Put here')
}

function handlePatchUser (req, res) {
    console.log('req:', req.body)

    const newEditUsers = users.map((element) =>{
        if(element.name === req.body.name){
            element = {...element, ...req.body}
        }
        return element
    })
    console.log("users:", newEditUsers)
    res.send('Patch here')
} 