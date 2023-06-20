import exprss from "express"
import {books} from './books.js'

const app = exprss()
app.use(exprss.json())

app.listen(5000, () => console.log("Server is up and running at port 5000"))

app.get("/books", (req, res) => {
    console.log("bookList here")
    res.send(books)
 })

app.get("/listonebytitle", handleListOneByTitle) 
app.get("/listonebyid", handleListOneById) 
app.get("/allbooksofanauthor/:author", handleAllBooksOfAnAuthor)
app.post('/books/add', handleBookAdd)
app.delete('/books/delete', handleBookDelete)
app.patch('/books/patch', handlePatchBooks)
app.put('/books/edit', handleBookEdit)


function handleListOneByTitle(req, res) {
    console.log("Request query:", req.query)

    const result = books.filter((item) => item.title ===  req.query.title)
    console.log("results:", result)
    res.send({
        success: true,
        result,
    })
}

function handleListOneById (req, res) {
    console.log("Request query:", req.query)

    const result = books.filter((item) => item.id == req.query.id)
    console.log("results:", result)
    res.send({
        success: true,
        result,
    })
}

function handleAllBooksOfAnAuthor (req, res) {
    console.log('Req.params', req.params)
    const result = books.filter((item) => item.author === req.params.author)
    console.log('result:', result)
    res.send({
        success: true,
        result,
    })
}

function handleBookAdd (req, res) {
    console.log('request', req.body)
    books.push(req.body)
    console.log("books:", books)
    res.send("Book added Sucessfully")
}

function handleBookDelete (req, res) {
    
    const book = req.query.id
    console.log("request:", req.query)

    let newBooks = books.filter(
        (item) => item.id != req.query.id)
    console.log("new book list:", newBooks)
    res.send('Book deleted successfully')
}

function handlePatchBooks (req, res) {
    console.log("request:", req.body)

    const newEditedBooks = books.map((element) => {
        if(element.id == req.body.id){
            element = {...element, ...req.body}
        }
        return element
    })
    console.log("books:", newEditedBooks)
    res.send("Book edited successfully")
}

function handleBookEdit (req, res) {
    console.log("request:", req.body)
    const newEditedBooks = books.map((element) => {
        if(element.id == req.body.id){
            element =req.body
        }
        return element
    })
    console.log("books:", newEditedBooks)

    res.send("Book edited put")
}