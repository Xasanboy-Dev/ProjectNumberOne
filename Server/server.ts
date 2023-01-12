import express, { Request, Response } from "express"
import { pool } from "./config/db"
import cors from "cors"
const server = express()
const PORT = 8080
server.use(express.json())
server.use(cors())
server.use(express.urlencoded({ extended: true }))





server.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "Hello Bro!" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})




server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})