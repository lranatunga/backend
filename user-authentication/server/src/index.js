import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())


app.use('/autherized', userRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is up and running at port ${port}`))