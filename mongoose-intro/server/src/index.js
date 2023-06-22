import  express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import dbConnect from './config/db.js'


dotenv.config()
dbConnect()
const app = express()


app.use(cors())
app.listen(5000, () => console.log('Server is up and running at port 5000'))