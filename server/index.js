import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

const app = express()
const PORT_NUMBER = process.env.SERVER_PORT_NUMBER
const corsOption={
    origin: "http://localhost:300/",
    methods: "POST, GET, PUT, PATCH, DELETE",
    credentials: true,
    allowedHeaders: "Content-Type,Authorization, Cache-Control, Expires, Pragma",
}

app.use(cors(corsOption))
app.use(express.json())
app.listen(PORT_NUMBER, ()=>{ 
    console.log(`Server Started, URL -> localhost:${6000}`)
})