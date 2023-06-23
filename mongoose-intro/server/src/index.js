import  express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import dbConnect from './config/db.js'
import userRoutes from "./routes/userRoutes.js"


dotenv.config()
dbConnect()
const app = express()

app.use(cors())

app.use(express.json())

app.use('/users', userRoutes)
app.listen(5000, () => console.log('Server is up and running at port 5000'))