// Import default any name

const someObject = require ('./demoImportExport')
console.log('Some Object', someObject)

console.log(someObject.namedFunction(4, 3));

require("dotenv").config();
// console.log('dotenv', dotenv)

const http = require('http')
// console.log("🚀 ~ http:", http);

const firstRequestListener = (req, res) => {
    console.log('firstRequestListener is Executed')
    res.end('Hello world')
}

const server = http.createServer(firstRequestListener)
// console.log("🚀 ~ server:", server);

const port =process.env.PORT
server.listen(port, ()=> console.log('Server is up and running at port', port))
// server.listen(4444, () => console.log('Server is up and running'))

