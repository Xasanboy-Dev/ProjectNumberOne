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
        res.status(200).json({ message: "Hello Bro" })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
// Post
server.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE name = $1  AND lastname = $2 AND email = $3 AND password = $4`, [name, lastname, email, password])).rows
        console.log(user)
        if (user.length == 0) {
            await pool.query(`INSERT INTO users (name,lastname,email,password) VALUES ($1,$2,$3,$4)`, [name, lastname, email, password])
            res.status(201).json({ message: "Created!" })
        } else {
            res.status(200).json({ message: "Your account is already exist!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
let arr: any

server.post('/country', (req: Request, res: Response) => {
    try {
        console.log(req.body)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.post('/login', async (req: Request, res: Response) => {
    try {
        const { name, lastname, email, password } = req.body
        const user = (await pool.query(`SELECT * FROM users WHERE name = $1 AND lastname = $2 AND email = $3 AND password = $4`, [name, lastname, email, password])).rows
        if (user.length == 1) {
            arr = user
            return res.status(200).json({ message: user })
        } else {
            res.status(201).json({ message: "Not Found. Please check your answers!" })
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})
server.get('/user', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: arr })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})